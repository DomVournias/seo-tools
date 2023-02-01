import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../context";
import { theme } from "../styles/Theme";
import { formatParagraph } from "./formatParagraph";

export function useKeywordDensity(paragraph) {
  //* Take the value and split it to individual words
  //* Extract all the focus keyword
  //* Count the length of the array (keywordDensity.count)
  //* Formula to find density - count / wordcount = result * 100 = keywordDensity.value

  const { focusKeyword, keywordDensityResult, setKeywordDensityResult } =
    useContext(GlobalStateContext);

  const [wordsCount, setWordsCount] = useState(0);
  const [keywordCount, setKeywordCount] = useState(0);
  const [keywordDensity, setKeywordDensity] = useState(0);

  const wordsArray = formatParagraph(paragraph) || [];

  const paragraphLength = wordsArray.length;

  const keywordExtract = wordsArray.filter((word) => word === focusKeyword);

  useEffect(() => {
    setKeywordCount(keywordExtract.length);
    setWordsCount(paragraphLength);

    //* This is the keyword density formula and the proper format
    const calculatedDensity = (keywordCount / wordsCount) * 100 || 0;
    const formattedDensity = parseFloat(calculatedDensity.toFixed(2));

    setKeywordDensity(formattedDensity);
  }, [paragraph, focusKeyword]);

  function keywordDensityLogic() {
    if (keywordDensity < 0.5) {
      const low = `Keyword Density is ${keywordDensity}%  which is very low, the Focus
      Keyword and combination appears ${keywordCount} times.`;
      setKeywordDensityResult({
        ...keywordDensityResult,
        icon: theme.icons.close,
        message: low,
      });
    }

    if (keywordDensity > 0.5 && keywordDensity < 0.8) {
      const mid = `Keyword Density is ${keywordDensity}%, the Focus
        Keyword and combination appears ${keywordCount} times.`;
      setKeywordDensityResult({
        ...keywordDensityResult,
        icon: theme.icons.check,
        message: mid,
      });
    }

    if (keywordDensity > 0.8 && keywordDensity < 1) {
      const mid2 = `Keyword Density is ${keywordDensity}%, the Focus
        Keyword and combination appears ${keywordCount} times.`;
      setKeywordDensityResult({
        ...keywordDensityResult,
        icon: theme.icons.checkGreen,
        message: mid2,
      });
    }

    if (keywordDensity > 1 && keywordDensity < 1.5) {
      const best = `Keyword Density is ${keywordDensity}%  which is best, the Focus
        Keyword and combination appears ${keywordCount} times.`;
      setKeywordDensityResult({
        ...keywordDensityResult,
        icon: theme.icons.checkFilled,
        message: best,
      });
    }

    if (keywordDensity > 1.5 && keywordDensity < 2) {
      const over1 = `Keyword Density is ${keywordDensity}%  which is  quite overused, the Focus
        Keyword and combination appears ${keywordCount} times.`;
      setKeywordDensityResult({
        ...keywordDensityResult,
        icon: theme.icons.checkGreen,
        message: over1,
      });
    }

    if (keywordDensity > 2 && keywordDensity < 2.5) {
      const over2 = `Keyword Density is ${keywordDensity}%  which is overused, the Focus
        Keyword and combination appears ${keywordCount} times.`;
      setKeywordDensityResult({
        ...keywordDensityResult,
        icon: theme.icons.check,
        message: over2,
      });
    }

    if (keywordDensity > 2.5) {
      const high = `Keyword Density is ${keywordDensity}%  which is high, the Focus
        Keyword and combination appears ${keywordCount} times.`;
      setKeywordDensityResult({
        ...keywordDensityResult,
        icon: theme.icons.close,
        message: high,
      });
    }
  }

  return { keywordDensity, keywordCount, keywordDensityLogic };
}
