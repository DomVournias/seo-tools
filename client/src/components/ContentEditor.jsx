import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { RichTextEditor } from "@mantine/rte";
import { GlobalStateContext } from "../context";
import { useKeywordContentCheck } from "../hooks/useKeywordContentCheck";
import { pRegex } from "../utils/regexes";
import { useKeywordHeadingsCheck } from "../hooks/useKeywordHeadingsCheck";
import { useKeywordDensity } from "../hooks/useKeywordDensity";

const ContentEditor = ({ setTotalWordCount }) => {
  const [value, onChange] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const { focusKeyword, setIsInHeadings } = useContext(GlobalStateContext);

  let parsedValue = value.replace(/<\/?[^>]+(>|$)/g, " ");
  const paragraph = value.match(pRegex);

  const { keywordUnder300, keywordOver300, keywordInContent } =
    useKeywordContentCheck(wordCount, paragraph);
  const { isIncluded } = useKeywordHeadingsCheck(value);
  const { keywordDensity, keywordCount, keywordDensityLogic } =
    useKeywordDensity(paragraph);

  useEffect(() => {
    // array of words
    const words = parsedValue.split(" ");

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);
    setTotalWordCount(wordCount);
  }, [value]);

  //* Check keyword density

  useEffect(() => {
    keywordDensityLogic();
  }, [keywordCount, keywordDensity]);

  //* Check if keyword is in the headings

  useEffect(() => {
    if (isIncluded) {
      setIsInHeadings(true);
    } else {
      setIsInHeadings(false);
    }
  }, [isIncluded]);

  //* Check if the focus keyword is in the beginning of the content

  useEffect(() => {
    if (paragraph !== null) {
      keywordUnder300();
      keywordOver300();
      keywordInContent();
    }
  }, [value, wordCount, focusKeyword]);

  return (
    <EditorStyled>
      <RichTextEditor value={value} onChange={onChange} id="rte" />
    </EditorStyled>
  );
};

export default ContentEditor;

const EditorStyled = styled.div`
  & .ql-editor {
    min-height: 1080px;
  }
`;
