import React, { useEffect, useRef, useState } from "react";
import "../assets/fonts/font.css";
import logo from "../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
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
import useAuthStore from "../stores/use.auth.store";

export default function Header() {
  const [showMenuModal, setShowMenuModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);

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

  const handleLogOut = () => {
    logout()
    navigate("/")
  }

  const logoClick = () => {
    navigate("/")
  }
  
  

  return (
    <>
      <Box>
        <LogoBox onClick={logoClick}>
            <Logo src={logo} alt="Logo" />
            <LogoName>Plan It Korea</LogoName>
        </LogoBox>
        <OptionBox>
            <CustomerServiceButton onClick={() => navigate("/notification")}>
              <span> 고객센터 </span>
            </CustomerServiceButton>
            {!isLoggedIn ? (
              <SingInButton onClick={() => navigate("/signIn")}>
              <span>로그인 & 회원가입</span>
            </SingInButton>
            ) : (
              <SingInButton onClick={handleLogOut} style={{minWidth:'164px'}}>
                    <span>로그아웃</span>
                  </SingInButton>
            )}

          <MenuBox>
            <MenuButton ref={buttonRef} onClick={ModalClick}>
              <MenuIcon />
            </MenuButton>
            {showMenuModal && (
              <MenuBar ref={modalRef}>
                {!isLoggedIn && (
                  <MenuSingInButton onClick={() => navigate("/signIn")}>
                    <span>로그인 & 회원가입</span>
                  </MenuSingInButton>
                )}
                {isLoggedIn && (
                  <MenuSingInButton onClick={logout} style={{minWidth:'164px'}}>
                    <span>로그아웃</span>
                  </MenuSingInButton>
                )}
                
                {isLoggedIn && (
                    <MenuCustomerServiceButton
                      style={{ padding: "6px 41px", margin: "5px 0" }}
                      onClick={() => navigate("/myPageMain")}>
                      <span> 마이페이지 </span>
                    </MenuCustomerServiceButton>
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
