import React, { createContext, useState } from "react";
import { theme } from "../styles/Theme";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});
  const [focusKeyword, setFocusKeyword] = useState("");
  const [isAtTheBeginning, setIsAtTheBeginning] = useState(false);
  const [isInTheContent, setIsInTheContent] = useState(false);
  const [isInMetaTitle, setIsInMetaTitle] = useState(false);
  const [isInMetaPermalink, setIsInMetaPermalink] = useState(false);
  const [isInMetaDescription, setIsInMetaDescription] = useState(false);
  const [isInHeadings, setIsInHeadings] = useState(false);
  const [keywordDensityResult, setKeywordDensityResult] = useState({
    message: "",
    icon: theme.icons.close,
  });

  const [headings, setHeadings] = useState({
    H1: [],
    H2: [],
    H3: [],
    H4: [],
    H5: [],
  });

  return (
    <GlobalStateContext.Provider
      value={{
        globalState,
        setGlobalState,
        focusKeyword,
        setFocusKeyword,
        headings,
        setHeadings,
        isAtTheBeginning,
        setIsAtTheBeginning,
        isInTheContent,
        setIsInTheContent,
        isInMetaTitle,
        setIsInMetaTitle,
        isInMetaPermalink,
        setIsInMetaPermalink,
        isInMetaDescription,
        setIsInMetaDescription,
        isInHeadings,
        setIsInHeadings,
        keywordDensityResult,
        setKeywordDensityResult,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
