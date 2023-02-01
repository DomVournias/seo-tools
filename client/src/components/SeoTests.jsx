import React, { useState } from "react";
import styled from "styled-components";
import { Rows, Row } from "./Tools.styled";
import BasicSEO from "./BasicSEO";
import AdditionalChecks from "./AdditionalChecks";
import { theme } from "../styles/Theme";

const SeoTests = ({ totalWordCount }) => {
  const [activeIndexes, setActiveIndexes] = useState([0, 1]);

  const handleToogle = (index) => {
    let newActiveIndexes;
    if (activeIndexes.includes(index)) {
      newActiveIndexes = activeIndexes.filter((i) => i !== index);
    } else {
      newActiveIndexes = [...activeIndexes, index];
    }
    setActiveIndexes(newActiveIndexes);
  };

  const handleArrows = (index) => {
    if (activeIndexes.includes(index)) {
      return <>{theme.icons.arrowUp}</>;
    } else {
      return <>{theme.icons.arrowDown}</>;
    }
  };


  return (
    <Rows>
      <Row>
        <TabButton onClick={() => handleToogle(0)}>
          <TabLabel>Basic SEO</TabLabel>
          {handleArrows(0)}
        </TabButton>

        {activeIndexes.includes(0) && (
          <BasicSEO totalWordCount={totalWordCount} />
        )}
      </Row>
      <Row>
        <TabButton onClick={() => handleToogle(1)}>
          <TabLabel>Additional</TabLabel>
          {handleArrows(1)}
        </TabButton>

        {activeIndexes.includes(1) && <AdditionalChecks />}
      </Row>
    </Rows>
  );
};

export default SeoTests;

const TabButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;

  svg {
    color: rgba(0, 0, 0, 0.7);
    font-size: 24px;
    padding: 0rem 1rem;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TabLabel = styled.span`
  font-size: 14px;
  padding: 16px 48px 16px 16px;
  display: block;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;
