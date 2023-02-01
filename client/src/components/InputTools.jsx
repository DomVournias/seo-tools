import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../context";
import GooglePreview from "./GooglePreview";
import { Label, Row } from "./Tools.styled";
import { IoMdCloseCircle } from "react-icons/io";

const InputTools = () => {
  const { focusKeyword, setFocusKeyword } = useContext(GlobalStateContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const inputRef = useRef(null);

  const handleOnKeyDown = (e) => {
    if (e.key !== "Enter") return;

    const value = e.target.value;

    if (!value.trim()) return;

    setFocusKeyword(e.target.value);
    setIsDisabled(true);

    e.target.value = "";
  };

  const handleDeleteTag = () => {
    setFocusKeyword("");
    setIsDisabled(false);
  };

  useEffect(() => {
    if (!isDisabled) {
      inputRef.current.focus();
    }
  }, [isDisabled]);

  return (
    <>
      <Row>
        <Label>Focus Keyword</Label>
        <FocusKeyword>
          {focusKeyword === "" ? null : (
            <Tag>
              <font>{focusKeyword}</font>
              <span onClick={handleDeleteTag}>
                <IoMdCloseCircle />
              </span>
            </Tag>
          )}

          <input
            type="text"
            ref={inputRef}
            disabled={isDisabled}
            onKeyDown={handleOnKeyDown}
            placeholder={
              isDisabled ? "Currently you can use only one keyword..." : ""
            }
          />
        </FocusKeyword>
      </Row>
      <Row>
        <Label>Preview</Label>
        <GooglePreview />
      </Row>
    </>
  );
};

export default InputTools;

const FocusKeyword = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 45px;
  gap: 0.2rem;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  input {
    height: 100%;
    width: 100%;
    color: #000;
    padding-left: 1rem;
  }
`;

const Tag = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  margin: 0.4rem 0rem 0.4rem 0.4rem;
  background-color: #e5e5e5;
  border-radius: 8px;

  font {
    margin-right: 0.3rem;
  }

  span {
    display: flex;
    cursor: pointer;
  }
`;
