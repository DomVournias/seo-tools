import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../context";
import { h2Regex, h3Regex, h4Regex } from "../utils/regexes";
import { formatParagraph } from "./formatParagraph";

export function useKeywordHeadingsCheck(value) {
  const { headings, setHeadings, focusKeyword, setIsInHeadings, isInHeadings } =
    useContext(GlobalStateContext);

  const [isIncluded, setIsIncluded] = useState(false);

  const heading2 = value.match(h2Regex) || [];
  const heading3 = value.match(h3Regex) || [];
  const heading4 = value.match(h4Regex) || [];

  useEffect(() => {
    setHeadings({ ...headings, H2: heading2, H3: heading3, H4: heading4 });

    const flattenedArray = Object.values({
      H2: heading2,
      H3: heading3,
      H4: heading4,
    }).reduce((acc, val) => acc.concat(val));

    const formattedWords = formatParagraph(flattenedArray);

    const existsCheck = formattedWords.includes(focusKeyword);

    setIsIncluded(existsCheck);
  }, [value, focusKeyword, isInHeadings, setIsInHeadings]);

  return { isIncluded };
}
