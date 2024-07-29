import React, { useEffect, useRef, useState } from "react";
import theme from "../styles/theme";
import "../assets/fonts/font.css";
import logo from "../assets/images/logo.png";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "@mui/system";
import { NavLink } from "react-router-dom";


const Box = styled.div`
  padding: 0px 20px;
  margin: 10px 70px 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin: 0;
  padding: 0;
`;

const LogoName = styled.h1`
  font-family: "TTTogether";
  font-size: 16px;
  color: ${theme.palette.text.secondary};
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;

const OptionBox = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomerServiceButton = styled.button`
  border: 1px solid #2b6678;
  border-radius: 5px;
  color: #2b6678;
  background-color: white;
  padding: 6px 15px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.1 ease;
  &:hover {
    background-color: #eee;
  }
  //! 화면 크기가 768 이하일때 숨김
  @media (max-width: 900px) {
    display: none;
  }
`;
const MenuCustomerServiceButton = styled.button`
  border: 1px solid #2b6678;
  border-radius: 5px;
  color: #2b6678;
  background-color: white;
  padding: 6px 15px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.1 ease;
  &:hover {
    background-color: #eee;
  }
`;
const SingInButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #82aef5;
  padding: 6px 15px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.1 ease;
  &:hover {
    background-color: #5f7dff;
  }
  //! 화면 크기가 768 이하일때 숨김
  @media (max-width: 900px) {
    display: none;
  }
`;
const MenuSingInButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #82aef5;
  padding: 6px 15px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.1 ease;
  &:hover {
    background-color: #5f7dff;
  }
`;

const MenuButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  margin: 0;
  cursor: pointer;
  transition: background-color 0.1 ease;
  background-color: white;
  &:hover {
    background-color: #eee;
  }
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuBar = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: white;
  padding: 6px 15px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 1000;
`;

const GroupLine = styled.span`
  border: 1px solid #d9d9d9;
  margin: 5px;
`;

const MenuGroup = styled.ul`
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  color: ${theme.palette.text.secondary};
`;

const MenuList = styled.li`
  font-size: 15px;
  font-weight: bold;
  list-style: none;
  color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export default function Header() {
  const [showMenuModal, setShowMenuModal] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current && 
      !modalRef.current.contains(event.target as Node)) {
        setShowMenuModal(false)
      }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <>
      <Box>
        <LogoBox>
          <LogoLink href="./">
            <Logo src={logo} alt="Logo" />
            <LogoName>Plan It Korea</LogoName>
          </LogoLink>
        </LogoBox>
        <OptionBox>
          {/* //! 고객센터 버튼*/}
            <NavLink to="/CustomerService">
          <CustomerServiceButton>
            <span> 고객센터 </span>
          </CustomerServiceButton>
            </NavLink>

          {/* //! 로그인 버튼 */}
          <NavLink to='SignIn'>
          <SingInButton>
            <span>로그인 & 회원가입</span>
          </SingInButton>
          </NavLink>

          {/* //! 햄버거 바 */}
          <MenuBox>
            <MenuButton onClick={() => setShowMenuModal(!showMenuModal)}>
              <MenuIcon />
            </MenuButton>
            {showMenuModal && (
              <MenuBar ref={modalRef}>
                <MenuCustomerServiceButton>
                <NavLink to='CustomerService'>
                  <span> 고객센터 </span>
                </NavLink>
                </MenuCustomerServiceButton>
                <NavLink to='SignIn'>
                <MenuSingInButton>
                  <span>로그인 & 회원가입</span>
                </MenuSingInButton>
                </NavLink>
                <GroupLine />
                <MenuGroup>국내 숙소</MenuGroup>
                <MenuList>호텔 & 리조트</MenuList>
                <MenuList>펜션 & 풀빌라</MenuList>
                <MenuList>캠핑 & 글램핑</MenuList>
                <GroupLine />
                <MenuGroup>레저 & 티켓</MenuGroup>
                <MenuList>관광</MenuList>
                <MenuList>테마파크</MenuList>
                <MenuList>레저스포츠</MenuList>
                <MenuList>전시 & 공연</MenuList>
              </MenuBar>
            )}
          </MenuBox>
        </OptionBox>
      </Box>
    </>
  );
}
