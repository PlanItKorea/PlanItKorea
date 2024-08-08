import React from "react";
import {
  AllDiv,
  DateColumn,
  DateDiv,
  DateDivWrap,
  GroupLine,
  DetailLabel,
  NavDiv,
  NavInnerDiv,
  NavTitle,
  ProductImage,
  ProductName,
  ReserVationDetail,
  ReservationMainInner,
  ReservationNumber,
  ReserVationProductDiv,
  ReserVationProductImgDiv,
  PersonDiv,
  Person,
  PriceDiv,
  PriceBox,
  PriceBack,
  CancelBtn,
  DetailLabelRe,
  MapUl,
  MainLi,
} from "../../styles/myPage/Main";
import { NavLink } from "react-router-dom";
import hotel1 from "../../assets/images/house/house1.jpg";
import hotel3 from "../../assets/images/house/house3.jpg";
import hotel4 from "../../assets/images/house/house4.jpg";
import { Reservation } from "../../types/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWonSign } from "@fortawesome/free-solid-svg-icons";

const mockReservation: Reservation[] = [
  {
    name: "홍길동",
    phoneNumber: "01012341234",
    id: 120,
    productName: "호텔호텔호텔",
    price: "100,000",
    reservationNumber: 123,
    startDate: "08-07",
    endDate: "08-10",
    person: 3,
    img: hotel1,
  },
  {
    name: "전우치",
    phoneNumber: "01012341234",
    id: 121,
    productName: "호텔호텔호텔",
    price: "180,000",
    reservationNumber: 124,
    startDate: "08-10",
    endDate: "08-15",
    person: 3,
    img: hotel3,
  },
  {
    name: "각시탈",
    phoneNumber: "01012341234",
    id: 3,
    productName: "호텔호텔호텔",
    price: "90,000",
    reservationNumber: 128,
    startDate: "08-14",
    endDate: "08-19",
    person: 2,
    img: hotel4,
  },
];

export default function ReservationCheck() {
  return (
    <>
      <GroupLine />
      <AllDiv>
        <NavDiv>
          <NavLink to="/MyPageMain">
            <NavInnerDiv>
              <NavTitle>계정 관리</NavTitle>
            </NavInnerDiv>
          </NavLink>
          <NavLink to="/ReservationCheck">
            <NavInnerDiv style={{ backgroundColor: "#eee" }}>
              <NavTitle>예약 확인</NavTitle>
            </NavInnerDiv>
          </NavLink>
          <NavLink to="/WishList">
            <NavInnerDiv>
              <NavTitle>찜 목록</NavTitle>
            </NavInnerDiv>
          </NavLink>
        </NavDiv>

        <MapUl>
          {mockReservation.map((item) => (
            <MainLi key={item.reservationNumber}>
              <ReservationMainInner>
                <ReserVationProductDiv>
                  <ReserVationProductImgDiv>
                    <ProductImage src={item.img} />
                  </ReserVationProductImgDiv>
                </ReserVationProductDiv>
                <ReserVationDetail>
                  <ReservationNumber>
                    NO: {item.reservationNumber}
                  </ReservationNumber>
                  <ProductName>{item.productName}</ProductName>
                  <DateDivWrap>
                    <DateColumn>
                      <DetailLabel>체크인</DetailLabel>
                      <DateDiv>{item.startDate}</DateDiv>
                    </DateColumn>
                    <DateColumn>
                      <DetailLabel>체크아웃</DetailLabel>
                      <DateDiv>{item.endDate}</DateDiv>
                    </DateColumn>
                  </DateDivWrap>
                  <PersonDiv>
                    <DetailLabel>인원수</DetailLabel>
                    <Person>{item.person} </Person>
                  </PersonDiv>
                </ReserVationDetail>

                <PriceDiv>
                  <CancelBtn>예약 취소</CancelBtn>

                  <PriceBox>
                    <DetailLabelRe>가격</DetailLabelRe>
                    <PriceBack>
                      {item.price}{" "}
                      <FontAwesomeIcon
                        style={{ marginLeft: "5px" }}
                        icon={faWonSign}
                      />{" "}
                    </PriceBack>
                  </PriceBox>
                </PriceDiv>
              </ReservationMainInner>
            </MainLi>
          ))}
        </MapUl>
      </AllDiv>
    </>
  );
}
