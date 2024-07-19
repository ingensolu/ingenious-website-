import React, { useState,useEffect } from "react";
import { Container, Grid, Button, Box, Typography, Paper, Modal } from "@mui/material";
import styled from "styled-components";
import footerPatternImg from "../../assets/images/footer_pattern.png";
import "../../assets/css/cs-style.css"


const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  gap: 10px;
  border: 2px solid colorful_border_color;
  background-color: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);

  border-radius: 10px; 
  
  .MuiTypography-root {
    text-align: center;
    font-weight: 600;
    color: #333;
  }
  
  .MuiButton-root {
    background-color: #007acc; 
    color: #fff; 
    transition: background-color 0.3s;
    border-radius: 5px;
    text-transform: none;
    font-weight: 600;
    
    &:hover {
      background-color: #005b96;
    }
  }
`;

const jobPositions = [
  { 
    title: "MERN Stack Developer", 
    experience: "1 - 5 Years" 
  },
  { 
    title: "Ruby on Rails Developer", 
    experience: "1 - 4 Years", 
    description: "We are looking for Ruby on Rails developers who will be responsible for developing and maintaining the server-side logic for the central database, testing performance, troubleshooting, and integrating front-end elements into the application.",
    responsibilities: [
      "Design, build, and maintain efficient, reusable, and reliable Ruby code.",
      "Designing and developing new web applications.",
      "Integrating data storage solutions.",
      "Creating backend components.",
      "Identifying and fixing bottlenecks and bugs.",
      "Integrating user-facing elements designed by the frontend team.",
      "Connect applications with additional web servers.",
      "Maintaining APIs."
    ],
    requirements: [
      "Bachelor's / Master's in Computer Science, Computer Engineering, or related field.",
      "Proven work experience as a Ruby on Rails developer.",
      "Ability to write Ruby code.",
      "Proficiency in writing code versioning tools including GIT / GitHub / SVN.",
      "Good understanding of front-end technologies (ES6, Javascript, HTML, CSS).",
      "Knowledge of Javascript frameworks like React JS."
    ]
  },
  { 
    title: "Business Development Executive", 
    experience: "0 - 3 Years" 
  },
];

function Careers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleApply = (formLink) => {
    window.open(formLink, "_blank"); 
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
        <div className="pageBanner">
                <img src={footerPatternImg} className="pagebanner-img" alt="" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="pageBannerHead">
                                <h2>Careers</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <Container style={{ marginTop: "20px" }}>
        <Typography variant="h4">We are hiring</Typography>
        <Grid container spacing={3}>
          {jobPositions.map((position, index) => (
            <Grid item xs={12} key={index}>
              <StyledPaper elevation={3}>
                < Typography variant="subtitle1">{position.title}</Typography>
                <Typography variant="body1">{position.experience}</Typography>
                <Button variant="contained" color="primary" onClick={() => handleOpenModal(position)}>
                  VIEW DETAILS
                </Button>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal  open={modalOpen} onClose={handleCloseModal}>
  <Box
  className="modal-paper"
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
    }}
  >
    <Typography variant="h4">{selectedJob?.title}</Typography>
    <Typography variant="body1">Experience Required: {selectedJob?.experience}</Typography>
    {selectedJob?.description && (
      <>
        <Typography variant="body2">{selectedJob?.description}</Typography>
        <Typography variant="h6">RESPONSIBILITIES:</Typography>
        <ul>
          {selectedJob?.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <Typography variant="h6">REQUIREMENTS:</Typography>
        <ul>
          {selectedJob?.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </>
    )}
    <Button style={{ margin: '10px' }} variant="contained" color="primary" 
    onClick={() =>
      handleApply(
        "https://docs.google.com/forms/d/e/1FAIpQLScYgiczfWCPxSYKTccwMuiyYyZ5Rejf577vzvu1LaRObcDqkA/viewform?usp=sf_link"
      )
    }>
      Apply
    </Button>
    <Button variant="contained" color="secondary" onClick={handleCloseModal}>
      Close
    </Button>
  </Box>
</Modal>
    </>
  );
}

export default Careers;