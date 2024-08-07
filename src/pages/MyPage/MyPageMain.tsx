import React, { useEffect, useState } from "react";
import { User } from "../../types/type";
import { set } from "date-fns";
import axios from "axios";
import { Button } from "../../styles/Inquiry";
import { AllDiv, Box, Card, Error, GroupLine, Header,  IdInput, Label, Loading, MainBody, MainDiv, MainInner, NavDiv, NavInnerDiv, NavTitle, PageTitle,WithDrawalButton,WithdrawalDiv, WithdrawalInput } from "../../styles/myPage/Main";
import { NavLink } from "react-router-dom";



const user: User = {
  id: "dkssud12",
  password: "!dkssud1234",
  name: "박영준",
  birthDate: "19990924",
  phoneNumber: "01012341234",
};

export default function MyPageMain() {
  const [logInUser, setLogInUser] = useState<User | null>(user);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     setLoading(true);
  //     try {
  //       const userId = localStorage.getItem("logInUserId");
  //       if (userId) {
  //         const response = await axios.get<User>('');
  //         setLogInUser(response.data);
  //       } else {
  //         setError("로그인이 필요한 시스템입니다.");
  //       }
  //     } catch (error) {
  //       setError('로그인이 필요한 시스템입니다.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        setTimeout(() => {
          setLogInUser(user);
          setModal(false);
        }, 1000);
      } catch (error) {
        setError("사용자 정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (logInUser) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [logInUser]);

  const handleEdit = () => {
    setIsEditing(true);
    console.log(logInUser);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log(logInUser);
    
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (logInUser) {
      setLogInUser({
        ...logInUser,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <>
    <GroupLine />
      <AllDiv>
        <NavDiv>
          <NavLink to='/MyPageMain'>
          <NavInnerDiv style={{backgroundColor:'#eee'}}>
            <NavTitle>계정 관리</NavTitle>
          </NavInnerDiv>
          </NavLink>
          <NavLink to='/ReservationCheck'>
          <NavInnerDiv>
            <NavTitle>예약 확인</NavTitle>
          </NavInnerDiv>
          </NavLink>
          <NavLink to='/WishList'>
          <NavInnerDiv>
            <NavTitle>찜 목록</NavTitle>
          </NavInnerDiv>
          </NavLink>
        </NavDiv>

        <MainDiv>
          {loading && (
            <Card>
              <Loading>로딩중...</Loading>
            </Card>
          )}
          {error && (
            <Card>
              <Error>{error}</Error>
            </Card>
          )}
          {!loading && !error && logInUser && (
            <>
              {/* 정보 확인 필드 */}
              <MainInner>
                <Header>
                  <PageTitle>내 정보 관리</PageTitle>
                  <Button
                    style={{ margin: 0,  width: "80px" }}
                    onClick={isEditing ? handleSave : handleEdit}
                  >
                    {isEditing ? "저장" : "수정"}
                  </Button>
                </Header>
                <MainBody>
                  <ul>
                    <li key={logInUser.id}>
                      <Box>
                        <Label htmlFor="name">이름</Label>
                        <IdInput
                          id="name"
                          name="name"
                          value={logInUser.name}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                          contentEditable={isEditing}
                        />

                        <Label htmlFor="phoneNumber">전화번호</Label>
                        <IdInput
                        type="number"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={logInUser.phoneNumber}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                          contentEditable={isEditing}
                        />

                        <Label htmlFor="birthDate">생년월일</Label>
                        <IdInput
                        type="number"
                          id="birthDate"
                          name="birthDate"
                          value={logInUser.birthDate}
                          onChange={handleInputChange}
                          readOnly={!isEditing}
                          contentEditable={isEditing}
                        />
                      </Box>
                    </li>
                  </ul>
                </MainBody>
              </MainInner>

              {/* 회원탈퇴 필드 */}
              <MainInner>
                <Header>
                  <PageTitle style={{ color: "#f44336" }}>회원탈퇴</PageTitle>
                </Header>
                <MainBody>
                  <WithdrawalDiv>
                    <Label htmlFor="withdrawal"
                    style={{color:"#444"}}>비밀번호 확인</Label>
                    <WithdrawalInput id="withdrawal" name="withdrawal" 
                    type="password"
                    placeholder="비밀번호"
                    onChange={handlePwChange}/>
                    <WithDrawalButton>탈퇴</WithDrawalButton>
                  </WithdrawalDiv>
                </MainBody>
              </MainInner>
            </>
          )}
        </MainDiv>
      </AllDiv>
    </>
  );
}