import { AskedQuestions, QuestionContainer, SendQuestion } from "./style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Question = () => {
  
  return (
    <div>
      <QuestionContainer>
        <AskedQuestions>
          <div>
            <Accordion className="options">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
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
                    <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
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
                    <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
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
                    <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
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
                    <p>Name</p> <h3>Question Lorem ipsum dolor sit amet ?</h3>
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
        </AskedQuestions>
        <SendQuestion>  
            <h1>Send a question</h1>
            <input type="text" name="" id="" placeholder="Your name" />
            <input type="text" name="" id="" placeholder="Your email" />
            <textarea name="message" placeholder="Your Question" cols={10} rows={5} />
            <button>Send Question</button>
        </SendQuestion>
      </QuestionContainer>
    </div>
  );
};

export default Question;
