import React from "react";
import HomeImg from "./HomeImg";
import styled from "styled-components";
import jeju from "../../assets/images/1/jeju.jpg";
import gapyeng from "../../assets/images/1/gapyeong.jpg";
import busan from "../../assets/images/1/busan.jpg";
import gyengju from "../../assets/images/1/gyengju.jpg";
import seoul from "../../assets/images/1/seoul.jpg";


const GroupLine = styled.div`
  width: 100%;
  margin-top: 5%;
  padding-left: 5%;
`;

const GroupLabel = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const HomeBox = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopularCityBox = styled.div`
  border: none;
  padding: 1% 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 80px;
  width: 100%;
`;

const City = styled.div`
  border: none;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  min-width: 180px;
  box-sizing: border-box;
`;

const MostUsedBox = styled.a`
  border: none;
  padding: 1% 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  width: 100%;
`;

const MostUsed = styled.div`
  border: 1px solid black;
  width: 180px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  box-sizing: border-box;
`;

const MostTicketBox = styled.a`
  border: none;
  padding: 1% 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  width: 100%;
`;

const MostTicket = styled.div`
  border: 1px solid black;
  width: 180px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  box-sizing: border-box;
`;

const CityImg = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 15px;
  box-sizing: border-box;
`;

const CityName = styled.span`
  padding: 5px 0;
  font-weight: bold;
`;

export default function Home() {
  return (
    <>
      <HomeImg />
      {/* //! 홈 화면 */}
      <HomeBox>
        <GroupLine>
          <GroupLabel>국내 인기 여행지</GroupLabel>
        </GroupLine>
        <PopularCityBox>
          <City>
            <CityImg src={jeju} />
            <CityName>제주도</CityName>
          </City>
          <City>
            <CityImg src={seoul} />
            <CityName>서울</CityName>
          </City>
          <City>
            <CityImg src={busan} />
            <CityName>부산</CityName>
          </City>
          <City>
            <CityImg src={gapyeng} />
            <CityName>가평</CityName>
          </City>
          <City>
            <CityImg src={gyengju} />
            <CityName>경주</CityName>
          </City>
        </PopularCityBox>

        <GroupLine>
          <GroupLabel>인기 숙소</GroupLabel>
        </GroupLine>
        <MostUsedBox>
            <MostUsed></MostUsed>
            <MostUsed></MostUsed>
            <MostUsed></MostUsed>
            <MostUsed></MostUsed>
        </MostUsedBox>

        <GroupLine>
          <GroupLabel>인기 레저 & 티켓</GroupLabel>
        </GroupLine>
        <MostTicketBox>
          <MostTicket></MostTicket>
          <MostTicket></MostTicket>
          <MostTicket></MostTicket>
          <MostTicket></MostTicket>
        </MostTicketBox>
      </HomeBox>
    </>
  );
}
