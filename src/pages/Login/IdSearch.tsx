import React from "react";
import logo from "../../assets/images/logo.png";
import { AllDiv, InputContainer, ErrorMessage,  } from "./Signin";
// import {InputNameField, InputPhoneField } from "./Signup"
import { Logo, LogoDIv, LogoName } from "../../styles/logo";
import theme from "../../styles/theme";
import styled from "styled-components";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export default function IdSearch() {
  return (
    <>
      <span
        style={{
          border: `1px solid ${theme.palette.primary.light}`,
          width: "100%",
          display: "flex",
        }}
      />
      <AllDiv>
        <LogoDIv style={{ marginBottom: "20px", alignItems: "center" }}>
          <Logo src={logo} alt="logo" />
          <LogoName>Plan It Korea</LogoName>
        </LogoDIv>
        <SearchDiv>
          <InputContainer>
          {/* <InputNameField
              type="text"
              name="name"
              placeholder="이름"
              value={name}
              onChange={handleNameChange}
              hasNameError={!!nameError}
              required
            />
            {nameError ? <ErrorMessage>{nameError}</ErrorMessage> : <></>} */}
          </InputContainer>
        </SearchDiv>
      </AllDiv>
    </>
  );
}
