import { useContext } from "react";
import { GlobalStateContext } from "../context";
import { formatParagraph } from "./formatParagraph";

export function useKeywordContentCheck(wordCount, paragraph) {
  const { focusKeyword, setIsAtTheBeginning, setIsInTheContent } =
    useContext(GlobalStateContext);

  function keywordUnder300() {
    if (wordCount < 300) {
      const wordExistsUnder300 =
        formatParagraph(paragraph).includes(focusKeyword);
      if (wordExistsUnder300) {
        setIsAtTheBeginning(true);
      } else {
        setIsAtTheBeginning(false);
      }
    }
  }

  function keywordOver300() {
    if (wordCount > 300) {
      let theTenPercent = formatParagraph(paragraph).slice(
        0,
        formatParagraph().length * 0.1
      ); //10% of the text
      const wordExistsOver300 = theTenPercent.includes(focusKeyword);
      if (wordExistsOver300) {
        setIsAtTheBeginning(true);
      } else {
        setIsAtTheBeginning(false);
      }
    }
  }

  const keywordExistsInContent =
    formatParagraph(paragraph).includes(focusKeyword);

  function keywordInContent() {
    if (keywordExistsInContent) {
      setIsInTheContent(true);
    }
  }

  return { keywordUnder300, keywordOver300, keywordInContent };
}
