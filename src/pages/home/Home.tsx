import React from "react";
import HomeImg from "./HomeImg";
import jeju from "../../assets/images/1/jeju.jpg";
import gapyeng from "../../assets/images/1/gapyeong.jpg";
import busan from "../../assets/images/1/busan.jpg";
import gyengju from "../../assets/images/1/gyengju.jpg";
import seoul from "../../assets/images/1/seoul.jpg";
import { City, CityImg, CityName, CityWarp, GroupLabel, GroupLine, HomeBox, MostTicket, MostTicketBox, MostUsed, MostUsedBox, PopularCityBox, PriceDiv, ProductCity, ProductDetail, ProductImg, ProductName } from "../../styles/home/Home";
import { accommodations, tickets } from "../../mocks";



export default function Home() {
  const mainBerthProduct = accommodations.slice(0, 4);
  const mainTicketProduct = tickets.slice(0, 4);


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
        {mainBerthProduct.map(accommodations => (
          <MostUsed key={accommodations.id}>
            <ProductImg src={accommodations.img}/>
            <ProductDetail>
              <CityWarp>
            <ProductCity>{accommodations.city} - </ProductCity>
            <ProductCity>{accommodations.accommodationCategory}</ProductCity>
              </CityWarp>
            <ProductName>{accommodations.name}</ProductName>
            <PriceDiv>{accommodations.price} 원</PriceDiv>
            </ProductDetail>
          </MostUsed>
        ))}
        </MostUsedBox>

        <GroupLine>
          <GroupLabel>인기 레저 & 티켓</GroupLabel>
        </GroupLine>
        <MostTicketBox>
        {mainTicketProduct.map(tickets => (
          <MostTicket key={tickets.id}>
            <ProductImg src={tickets.img}/>
            <ProductDetail>
              <CityWarp>
              <ProductCity>{tickets.city} - </ProductCity>
              <ProductCity>{tickets.TicketCategory}</ProductCity>
              </CityWarp>
              <ProductName>{tickets.name}</ProductName>
              <PriceDiv>{tickets.price}</PriceDiv>
            </ProductDetail>
          </MostTicket>
        ))}

        </MostTicketBox>
      </HomeBox>
    </>
  );
}
