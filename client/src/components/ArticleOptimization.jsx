import React, { useState } from "react";
import styled from "styled-components";
import ContentEditor from "./ContentEditor";
import InputTools from "./InputTools";
import { Inner, Left, Right, Section, Wrapper } from "./Tools.styled";
import SeoTests from "./SeoTests";

const ArticleOptimization = () => {
  const [totalWordCount, setTotalWordCount] = useState(0);

  const [activeTab, setActiveTab] = useState("inputs");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Section>
      <Wrapper>
        <Left>
          <ContentEditor setTotalWordCount={setTotalWordCount} />
        </Left>
        <Right>
          <TabButtons>
            <TabButtonLeft
              onClick={() => handleTabChange("inputs")}
              activeTab={activeTab}
            >
              Input
            </TabButtonLeft>
            <TabButtonRight
              onClick={() => handleTabChange("tests")}
              activeTab={activeTab}
            >
              Tests
            </TabButtonRight>
          </TabButtons>

          <Inner>
            {activeTab === "inputs" && <InputTools />}
            {activeTab === "tests" && (
              <SeoTests totalWordCount={totalWordCount} />
            )}
          </Inner>
        </Right>
      </Wrapper>
    </Section>
  );
};

export default ArticleOptimization;

const TabButtons = styled.div`
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding-left: 2rem;

  & :nth-child(2) {
  }
`;

const TabButton = styled.button`
  color: #555;
  cursor: default;
  background-color: #fff;

  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 1rem;
  cursor: pointer;
  margin-bottom: -1px;
`;

const TabButtonLeft = styled(TabButton)`
  border: 1px solid
    ${({ activeTab }) => (activeTab === "inputs" ? "#ddd" : "#fff")};
  border-bottom-color: ${({ activeTab }) =>
    activeTab === "inputs" ? "#fff" : "#ddd"};
`;
const TabButtonRight = styled(TabButton)`
  margin-left: 2px;
  border: 1px solid
    ${({ activeTab }) => (activeTab === "tests" ? "#ddd" : "#fff")};
  border-bottom-color: ${({ activeTab }) =>
    activeTab === "tests" ? "#fff" : "#ddd"};
`;
