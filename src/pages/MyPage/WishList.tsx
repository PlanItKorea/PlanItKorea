import React from 'react'
import { AllDiv, GroupLine, MainDiv, MainInner, NavDiv, NavInnerDiv, NavTitle } from '../../styles/myPage/Main'
import { NavLink } from 'react-router-dom'

export default function WishList() {
  return (
    <>
    <GroupLine />
      <AllDiv>
        <NavDiv>
          <NavLink to='/myPageMain'>
          <NavInnerDiv >
            <NavTitle>계정 관리</NavTitle>
          </NavInnerDiv>
          </NavLink>
          <NavLink to='/reservationCheck'>
          <NavInnerDiv >
            <NavTitle>예약 확인</NavTitle>
          </NavInnerDiv>
          </NavLink>
          <NavLink to='/wishList'>
          <NavInnerDiv style={{backgroundColor:'#eee'}}>
            <NavTitle>찜 목록</NavTitle>
          </NavInnerDiv>
          </NavLink>
        </NavDiv>

        <MainDiv>
          <MainInner>
            
          </MainInner>
        </MainDiv>
      </AllDiv>
    </>
  )
}
