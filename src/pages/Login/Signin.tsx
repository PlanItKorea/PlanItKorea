import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Logo, LogoDIv, LogoName } from "../../styles/logo";
import logoImg from "../../assets/images/logo.png";
import theme from "../../styles/theme";
import { Palette } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import useStore from "../../stores/useStore";

const AllDiv = styled.div`
  padding: 12% 10%;
  display: block;
  height: 80vh;
`;

const SignInDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  background-color: #f4f4f4f4;
  border-radius: 15px;
  border: none;
  height: 47px;
  max-width: 1500px;
  width: 100%;
  padding-left: 5%;
  margin-bottom: 20px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const InputLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  align-self: flex-start;
`;

const InputContainer = styled.div`
  width: 50%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: ${theme.palette.primary.main};
  border-radius: 15px;
  height: 47px;
  max-width: 1500px;
  width: 100%;
  padding-left: 5%;
  margin-bottom: 20px;
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: ${theme.palette.primary.dark};
  }
`;

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

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
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
      setPasswordError("비밀번호는 8자 이상이어야 하며, 특수문자가 포함되어야 합니다.");
    }
    if (id && password && !passwordError) {
      setIsLoggedIn(true);
      navigate("/");
    }
  };


  return (
    <>
      <AllDiv>
        <LogoDIv style={{ marginBottom: "30px", alignItems: "center" }}>
          <Logo src={logoImg} alt="logo" />
          <LogoName>Plan It Korea</LogoName>
        </LogoDIv>
        <SignInDiv>
          <InputContainer>
            <InputLabel htmlFor="idField">아이디</InputLabel>
            <InputField
              type="text"
              id="idField"
              name="id"
              placeholder="아이디를 입력해주세요."
              onChange={handleIdChange}
              value={id}
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
            <InputField
              type="password"
              id="passwordField"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={handlePasswordChange}
              value={password}
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
