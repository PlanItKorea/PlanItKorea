import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Logo, LogoDIv, LogoName } from "../../styles/logo";
import logoImg from "../../assets/images/logo.png";
import theme from "../../styles/theme";
import { NavLink, useNavigate } from "react-router-dom";
import useStore from "../../stores/useStore";
import {AllDiv, SignInDiv, InputLabel, InputContainer, ErrorMessage, Button, GroupLine, InputIdField, InputPasswordField} from "../../styles/Sign"

const OptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
`;

const OptionSpan = styled.span`
  color: ${theme.palette.text.disabled};
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #000000;
    text-decoration: underline;
  }
`;

export default function Signin() {
  const [idError, setIdError] = useState<boolean | string>();
  const [passwordError, setPasswordError] = useState<boolean | string>();

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    const idValue = event.target.value;
    setId(idValue);
    if (!idValue) {
      setIdError("아이디를 입력해주세요.");
    } else {
      setIdError("");
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (password && !passwordRegex.test(password)) {
      setPasswordError(
        "비밀번호는 8자 이상이어야 하며, 특수문자가 포함되어야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    if (!id) {
      setIdError("아이디를 입력해주세요.");
    }
    if (!password) {
      setPasswordError(
        "비밀번호는 8자 이상이어야 하며, 특수문자가 포함되어야 합니다."
      );
    }
    if (id && password && !passwordError) {
      setIsLoggedIn(true);

      //! 로그인 정보 !!!!
      const signInData = {
        id,
        password,
      };
      console.log(signInData);
    
      navigate("/");
    }
  };

  return (
    <>
    <GroupLine />
      <AllDiv>
        <LogoDIv style={{ marginBottom: "40px", alignItems: "center" }}>
          <Logo src={logoImg} alt="logo" />
          <LogoName>Plan It Korea</LogoName>
        </LogoDIv>
        <SignInDiv>
          <InputContainer>
            <InputLabel htmlFor="idField">아이디</InputLabel>
            <InputIdField
              type="text"
              id="idField"
              name="id"
              placeholder="아이디를 입력해주세요."
              onChange={handleIdChange}
              value={id}
              hasIdError={!!idError}
              required
            />
            {idError ? (
              <ErrorMessage>아이디를 입력해주세요.</ErrorMessage>
            ) : (
              <></>
            )}
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="passwordField">비밀번호</InputLabel>
            <InputPasswordField
              type="password"
              id="passwordField"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={handlePasswordChange}
              value={password}
              hasPasswordError={!!passwordError}
              required
            />
            {passwordError ? (
              <ErrorMessage>
                특수기호, 비밀번호 8자리를 입력해주세요
              </ErrorMessage>
            ) : (
              <></>
            )}
          </InputContainer>
          <InputContainer>
            <Button onClick={handleLogin}>로그인</Button>
          </InputContainer>
          <InputContainer>
            <OptionDiv>
              <NavLink to="/IdSearch">
                <OptionSpan>아이디 찾기</OptionSpan>
              </NavLink>
              <NavLink to="/PasswordSearch">
                <OptionSpan>비밀번호 찾기</OptionSpan>
              </NavLink>
              <NavLink to="/SignUp">
                <OptionSpan>회원 가입</OptionSpan>
              </NavLink>
            </OptionDiv>
          </InputContainer>
        </SignInDiv>
      </AllDiv>
    </>
  );
}
