import React from "react";
import { ContentDiv } from "../../styles/customer";
import { BtnCategory, InquiryBtn } from "../../styles/Inquiry";
import { NavLink } from "react-router-dom";

export default function InquiryHistory() {
  return (
    <>
      <ContentDiv>
        <BtnCategory>
          <NavLink to={"/InquiryCRUD"}>
            <InquiryBtn>문의하기</InquiryBtn>
          </NavLink>
          <NavLink to={"/InquiryHistory"}>
            <InquiryBtn style={{backgroundColor:"#ddd"}}>문의내역</InquiryBtn>
          </NavLink>
        </BtnCategory>
        
      </ContentDiv>
    </>
  );
}
