import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

interface AccordionProps {
  title: string;
  desc: string;
}

interface AccordionGroupProps {
  elements: AccordionProps[];
}

export default function AccordionGroup(props: AccordionGroupProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordionGroup">
      {props.elements.map((elt, i) => (
        <div>
          <Accordion
            className="accordion"
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
          >
            <AccordionSummary
              className="accordion__title"
              aria-controls="panel1bh-content"
              id={`panel${i}bh-header`}
            >
              <h4>{elt.title}</h4>
              <i className="fa-solid fa-plus" />
            </AccordionSummary>
            <AccordionDetails className="accordion__details">
              <small>{elt.desc}</small>
            </AccordionDetails>
          </Accordion>
          <hr className="accordion__hr" />
        </div>
      ))}
    </div>
  );
}
