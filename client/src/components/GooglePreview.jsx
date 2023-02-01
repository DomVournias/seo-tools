import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../context";

const GooglePreview = () => {
  const defaultTitle = "This is an Example page Title";
  const defaultDescription =
    "Use the input fields to write a custom page Title and Meta description. This preview box shows you how your page will look in the search results from Google.";
  const defaultPermalink = "example-permalink";

  const [snippetTitle, setSnippetTitle] = useState(defaultTitle);
  const [snippetDescription, setSnippetDescription] =
    useState(defaultDescription);
  const [snippetPermalink, setSnippetPermalink] = useState(defaultPermalink);
  const {
    focusKeyword,
    setIsInMetaTitle,
    setIsInMetaPermalink,
    setIsInMetaDescription,
  } = useContext(GlobalStateContext);

  const handlePermalink = (e) => {
    const value = e.target.value;
    const newValue = value.replace(/ /g, "-");
    setSnippetPermalink(newValue);
  };

  useEffect(() => {
    const keywordInPermalink = snippetPermalink.includes(focusKeyword);
    const keywordInTitle = snippetTitle.includes(focusKeyword);
    const keywordInDescription = snippetDescription.includes(focusKeyword);

    if (keywordInTitle) {
      setIsInMetaTitle(true);
    } else {
      setIsInMetaTitle(false);
    }

    if (keywordInPermalink) {
      setIsInMetaPermalink(true);
    } else {
      setIsInMetaPermalink(false);
    }

    if (keywordInDescription) {
      setIsInMetaDescription(true);
    } else {
      setIsInMetaDescription(false);
    }
  }, [focusKeyword, snippetTitle, snippetDescription, snippetPermalink]);

  return (
    <Container>
      <Block>
        <Url>
          example.com ›{" "}
          {snippetPermalink === "" ? defaultPermalink : snippetPermalink}
        </Url>
        <Title>
          <a href="">{snippetTitle === "" ? defaultTitle : snippetTitle}</a>
        </Title>
        <Content>
          {snippetDescription === "" ? defaultDescription : snippetDescription}
        </Content>
      </Block>
      <Row>
        <InnerRow>
          <Label>Title</Label>
          <Score>
            <Count>{snippetTitle.length} / 60</Count>
            <Indicator></Indicator>
          </Score>
        </InnerRow>
        <Input
          type="text"
          maxLength={60}
          onChange={(e) => setSnippetTitle(e.target.value)}
          value={snippetTitle}
        />
        <Description>
          This is what will appear in the first line when this post shows up in
          the search results.
        </Description>
      </Row>
      <Row>
        <InnerRow>
          <Label>Permalink</Label>
          <Score>
            <Count>{snippetPermalink.length} / 75</Count>
            <Indicator></Indicator>
          </Score>
        </InnerRow>
        <Input
          type="text"
          maxLength={75}
          onChange={handlePermalink}
          value={snippetPermalink}
        />
        <Description>
          This is the unique URL of this page, displayed below the post title in
          the search results.
        </Description>
      </Row>
      <Row>
        <InnerRow>
          <Label>Description</Label>
          <Score>
            <Count>{snippetDescription.length} / 160</Count>
            <Indicator></Indicator>
          </Score>
        </InnerRow>
        <TextArea
          type="text"
          maxLength={160}
          onChange={(e) => setSnippetDescription(e.target.value)}
          value={snippetDescription}
        />
        <Description>
          This is what will appear as the description when this post shows up in
          the search results.
        </Description>
      </Row>
    </Container>
  );
};

export default GooglePreview;

const Container = styled.div``;

const Row = styled.div`
  position: relative;
  margin-top: 12px;
  padding: 20px 15px 15px;
  border-radius: 4px;
  background: #f0f2f4;
  color: #000;
  display: flex;
  flex-direction: column;
`;

const InnerRow = styled.div`
  font-weight: 600;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
`;
const Label = styled.label`
  font-size: 15px;
  opacity: 0.7;
`;

const Input = styled.input`
  border-color: #7f868d;
  border-radius: 4px;
  font-size: 13px;
  line-height: normal;
  background-color: #fff;
  padding: 6px 8px;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.1s linear;
  border: 1px solid #757575;
`;

const TextArea = styled.textarea`
  border-color: #7f868d;
  height: 4rem;
  border-radius: 4px;
  font-size: 13px;
  line-height: normal;
  background-color: #fff;
  padding: 6px 8px;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.1s linear;
  border: 1px solid #757575;
  resize: none;
`;

const Score = styled.span``;
const Count = styled.span`
  font-size: 15px;
  color: #7f868d;
  font-weight: 500;
`;
const Indicator = styled.span``;
const Description = styled.p`
  margin: 0;
  color: #7f868d;
  padding-top: 8px;
  font-size: 13px;
  font-style: normal;
`;

const Block = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const Url = styled.div`
  font-size: 14px;
  color: #5f6368;
  margin-bottom: 6px;
`;
const Title = styled.div`
  font-size: 18px;
  color: #1a0dab;

  a {
    :hover {
      opacity: 1;
    }
  }
`;
const Content = styled.div`
  line-height: 1.58;
  font-size: 14px;
  color: #545454;
  min-height: 37px;
  margin-top: 3px;
`;
