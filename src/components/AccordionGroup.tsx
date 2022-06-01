import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export default function AccordionGroup() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordionGroup">
      <Accordion
        className="accordion"
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          className="accordion__title"
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h4>General settings</h4>
        </AccordionSummary>
        <AccordionDetails className="accordion__details">
          <small>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </small>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion"
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          className="accordion__title"
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h4>General settings</h4>
        </AccordionSummary>
        <AccordionDetails className="accordion__details">
          <small>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </small>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
