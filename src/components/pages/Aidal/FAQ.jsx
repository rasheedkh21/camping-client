import React from 'react'
import {FrequentAsked, QuestionContainer, SendQuestion } from './style'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQ = () => {
  return (
    <div>
      <QuestionContainer>
        <FrequentAsked>
        
          <div>
            <Accordion className="options">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Frequently asked questions</h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="options">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Frequently asked questions</h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="options">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Frequently asked questions</h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="options">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Frequently asked questions</h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="options">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                     <h3>Frequently asked questions</h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </FrequentAsked>
        <SendQuestion>
        <h1>Have you got a Question</h1>
            <input type="text" placeholder='Your name' required />
            <input type="text" placeholder='Your email'  required/>
            <textarea name="message" placeholder="Your Question" cols={10} rows={5} />
            <button>Send Question</button>
        </SendQuestion>
      </QuestionContainer>
    </div>
  )
}

export default FAQ