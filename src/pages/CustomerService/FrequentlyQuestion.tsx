import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ContentDiv } from "../../styles/customer";
import axios from "axios";
import { Announcement } from "../../types/type";

export default function Notification() {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const [frequentlyQuestion, setFrequentlyQuestion] = React.useState<Announcement[]>([])

  const handleExpansion =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    const fetchQuestion = async () => {
      const response = await axios.get('http://localhost:3001/frequentlyQuestion')
      setFrequentlyQuestion(response.data)
    }

    React.useEffect(() => {
      fetchQuestion();
    },[])

  return (
    <ContentDiv>
      {frequentlyQuestion.map((item) => (
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
            <Typography variant="caption">- {item.author}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </ContentDiv>
  );
}
