import React, { useContext } from "react";
import { GlobalStateContext } from "../context";
import { BasicChecks } from "./Tools.styled";
import { theme } from "../styles/Theme";

const BasicSEO = ({ totalWordCount }) => {
  const {
    isAtTheBeginning,
    isInTheContent,
    isInMetaTitle,
    isInMetaPermalink,
    isInMetaDescription,
  } = useContext(GlobalStateContext);

  return (
    <BasicChecks>
      <li>
        {isAtTheBeginning ? (
          <>
            {theme.icons.checkFilled}
            Focus Keyword appears in the first 10% of the content.
          </>
        ) : (
          <>
            {theme.icons.close} Focus Keyword doesn't appear at the beginning of
            your content.
          </>
        )}
      </li>
      <li>
        {isInMetaTitle === true ? (
          <>
            {theme.icons.checkFilled}
            Hurray! You're using the Focus Keyword in the SEO Title.
          </>
        ) : (
          <>
            {theme.icons.close}
            Add Focus Keyword to the SEO title.
          </>
        )}
      </li>
      <li>
        {isInMetaDescription === true ? (
          <>
            {theme.icons.checkFilled}
            Focus Keyword used inside SEO Meta Description.
          </>
        ) : (
          <>
            {theme.icons.close}
            Focus Keyword not found in your SEO Meta Description.
          </>
        )}
      </li>
      <li>
        {isInMetaPermalink === true ? (
          <>
            {theme.icons.checkFilled}
            Focus Keyword used in the URL.
          </>
        ) : (
          <>
            {theme.icons.close}
            Focus Keyword not found in the URL.
          </>
        )}
      </li>
      <li>
        {isInTheContent ? (
          <>
            {theme.icons.checkFilled}
            Focus Keyword found in the content.
          </>
        ) : (
          <>
            {theme.icons.close}
            Focus Keyword doesn't appear in the content.
          </>
        )}
      </li>
      <li>
        {totalWordCount < 600 ? (
          <>
            {theme.icons.close}
            Content is {totalWordCount} words long. Consider using at least 600
            words.
          </>
        ) : (
          <>
            {theme.icons.checkFilled}
            Content is {totalWordCount} words long. Good job!
          </>
        )}
      </li>
    </BasicChecks>
  );
};

export default BasicSEO;
