import React from "react";
import { ContentDiv } from "../../styles/customer";
import { BtnCategory, InquiryBtn } from "../../styles/Inquiry";
import { NavLink } from "react-router-dom";
import { Inquiry } from "../../types/type";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const mockInquiries: Inquiry[] = [
  {
    id: "User ID",
    category: "payment",
    title: "결제 문제",
    content: "결제 오류가 발생했습니다.",
    image: null,
  },
  {
    id: "User ID2",
    category: "cancellation",
    title: "취소 문제",
    content: "결제 취소 오류가 발생했습니다.",
    image: null,
  },
];

export default function InquiryHistory() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleExpansion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <ContentDiv>
        <BtnCategory>
          <NavLink to={"/InquiryCRUD"}>
            <InquiryBtn>문의하기</InquiryBtn>
          </NavLink>
          <NavLink to={"/InquiryHistory"}>
            <InquiryBtn style={{ backgroundColor: "#ddd" }}>
              문의내역
            </InquiryBtn>
          </NavLink>
        </BtnCategory>
        {mockInquiries.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleExpansion(item.id)}
            sx={{
              margin: 1,
              "& .MuiAccordion-region": {
                height: expanded === item.id ? "auto" : 0,
              },
              "& .MuiAccordionDetails-root": {
                display: expanded === item.id ? "block" : "none",
              },
              overflow: "auto",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
            >
              <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
            >
              <Typography>{item.content}</Typography>
              <Typography>{item.image}</Typography>
              <Typography variant="caption">- {item.id}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </ContentDiv>
    </>
  );
}
