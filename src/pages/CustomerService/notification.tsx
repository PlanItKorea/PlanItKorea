import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ContentDiv } from '../../styles/customer';
import { announcement } from '../../mocks/announcement';

export default function Notification() {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleExpansion = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  

  return (
    <ContentDiv style={{overflow: 'auto',boxSizing:'border-box'}}>
      {announcement.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleExpansion(item.id)}
          sx={{
            margin:1,'& .MuiAccordion-region': { height: expanded === item.id ? 'auto' : 0 },
            '& .MuiAccordionDetails-root': { display: expanded === item.id ? 'block' : 'none' }, 
            overflow: 'auto', 
            
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography sx={{fontWeight:'bold'}}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
            <Typography variant="caption">- {item.author}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </ContentDiv>
  );
}
