import React, { useContext } from "react";
import { GlobalStateContext } from "../context";
import { theme } from "../styles/Theme";
import { BasicChecks } from "./Tools.styled";

const AdditionalChecks = () => {
  const { isInHeadings, keywordDensityResult } = useContext(GlobalStateContext);

  return (
    <BasicChecks>
      <li>
        {isInHeadings ? (
          <>
            {theme.icons.checkFilled}
            <span>Focus Keyword found in the subheading(s).</span>
          </>
        ) : (
          <>
            {theme.icons.close}
            <span>
              Focus Keyword not found in subheading(s) like H2, H3, H4, etc..
            </span>
          </>
        )}
      </li>
      <li>
        {theme.icons.exclamation}
        <span>Add an image with your Focus Keyword as alt text.</span>
      </li>
      <li>
        <>
          {keywordDensityResult.icon}
          <span>{keywordDensityResult.message}</span>
        </>
      </li>
    </BasicChecks>
  );
};

export default AdditionalChecks;
