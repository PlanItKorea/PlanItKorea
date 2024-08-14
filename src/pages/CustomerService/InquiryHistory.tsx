import React, { useEffect, useState } from "react";
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
import axios from "axios";


export default function InquiryHistory() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleExpansion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [inquiries, setInquiries] = useState<Inquiry[]>([])

    const fetchInquiry = async () => {
      const response = await axios.get('http://localhost:3001/inquiry')
      setInquiries(response.data);
    }

    useEffect(() => {
      fetchInquiry();
    },[])

  return (
    <>
      <ContentDiv>
        <BtnCategory>
          <NavLink to={"/inquiryCRUD"}>
            <InquiryBtn>문의하기</InquiryBtn>
          </NavLink>
          <NavLink to={"/inquiryHistory"}>
            <InquiryBtn style={{ backgroundColor: "#ddd" }}>
              문의내역
            </InquiryBtn>
          </NavLink>
        </BtnCategory>
        {inquiries.map((item) => (
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
              <Typography sx={{ fontWeight: "bold", fontSize:'20px'}}>{item.category} - {item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
            >
              <Typography>{item.content}</Typography>
              <img src={item.image} style={{width:'450px', height:"250px", border:'none'}}/>
              <Typography variant="caption">- {item.id}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </ContentDiv>
    </>
  );
}
