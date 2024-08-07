import React from 'react'
import { AllDiv, DateColumn, DateDiv, DateDivWrap,  GroupLine, DetailLabel, MainDiv, NavDiv, NavInnerDiv, NavTitle, ProductImage, ProductName, ReserVationDetail, ReservationMainInner, ReservationNumber, ReserVationProductDiv, ReserVationProductImgDiv, PersonDiv, Person, PriceDiv } from '../../styles/myPage/Main'
import { NavLink } from 'react-router-dom'
import hotel1 from '../../assets/images/house/house1.jpg'
import { Reservation } from '../../types/type'


const mockReservation: Reservation[] = [
  {
    name: '홍길동',
    phoneNumber:'01012341234',
    id: 120,
    productName: '호텔호텔호텔',
    price: '100,000',
    reservationNumber: 123,
    startDate: '08-07',
    endDate: '08-10',
    person:3,
    img: hotel1
  }
]
  


export default function ReservationCheck() {
  return (
    <>
    <GroupLine />
      <AllDiv>
        <NavDiv>
          <NavLink to='/MyPageMain'>
          <NavInnerDiv >
            <NavTitle>계정 관리</NavTitle>
          </NavInnerDiv>
          </NavLink>
          <NavLink to='/ReservationCheck'>
          <NavInnerDiv style={{backgroundColor:'#eee'}}>
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
              {mockReservation.map((item) => (
          <ReservationMainInner
          key={item.reservationNumber}>
            <ReserVationProductDiv>
              <ReserVationProductImgDiv>
                <ProductImage src={item.img} />
              </ReserVationProductImgDiv>
            </ReserVationProductDiv>
              <ReserVationDetail>
                <ReservationNumber>NO: {item.reservationNumber}</ReservationNumber>
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
                  <Person>{item.person}</Person>
                </PersonDiv>

                <PriceDiv>
                  {/* 가격 and 예약취소 */}
                </PriceDiv>
              </ReserVationDetail>
          </ReservationMainInner>
              ))}
        </MainDiv>
      </AllDiv>
    </>
  )
};
