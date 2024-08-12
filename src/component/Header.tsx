import React, { useEffect, useRef, useState } from "react";
import "../assets/fonts/font.css";
import logo from "../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import {
  Box,
  CustomerServiceButton,
  GroupLine,
  Logo,
  LogoBox,
  LogoLink,
  LogoName,
  MenuBar,
  MenuBox,
  MenuButton,
  MenuCustomerServiceButton,
  MenuGroup,
  MenuList,
  MenuSingInButton,
  OptionBox,
  SingInButton,
} from "../styles/component/HeaderStyle";
import useAuthStore from "../stores/useAuthStore";

export default function Header() {
  const [showMenuModal, setShowMenuModal] = useState<boolean>(false);
  const isLogIn = useAuthStore((state) => state.user);
  

  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowMenuModal(false);
    }
  };

  const ModalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowMenuModal(!showMenuModal);
  };

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
          <NavLink to="/notification">
            <CustomerServiceButton>
              <span> 고객센터 </span>
            </CustomerServiceButton>
          </NavLink>
          <NavLink to="signIn">
            <SingInButton>
              <span>로그인 & 회원가입</span>
            </SingInButton>
          </NavLink>
          <MenuBox>
            <MenuButton ref={buttonRef} onClick={ModalClick}>
              <MenuIcon />
            </MenuButton>
            {showMenuModal && (
              <MenuBar ref={modalRef}>
                <NavLink to="signIn">
                  <MenuSingInButton>
                    <span>로그인 & 회원가입</span>
                  </MenuSingInButton>
                </NavLink>
                {isLogIn && (
                  <NavLink to="myPageMain">
                    <MenuCustomerServiceButton
                      style={{ padding: "6px 41px", margin: "5px 0" }}
                    >
                      <span> 마이페이지 </span>
                    </MenuCustomerServiceButton>
                  </NavLink>
                )}

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
