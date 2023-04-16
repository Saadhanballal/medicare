import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

//const pages = ["Home", "Appointments", "Patients"];
//const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const navHome = () => {
    
    navigate("/home");
  };
  const navAppointments = () => {
    navigate("/appointment");
  };
  const navPatients = () => {
    navigate("/patients");
  };

  return (
    <>
      <Navbar
        className="navbar my-3"
        position="static"
        style={{
          backgroundColor: "#5ABF84",
          borderRadius: "25px",
          width: "87%",
          marginLeft:"6.5%",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            
            <Typography
              variant="h4"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex", color: "black" },
                fontFamily: "monospace",
                fontWeight: 2000,
                letterSpacing: ".3rem",
                color:'black',
                textDecoration: "none",
              }}
              className="fw-bold"
            >
              Medicare
            </Typography>

            <Nav
              variant="pills "
              defaultActiveKey="link-0"
              className="container-fluid justify-content-end"
            >
              <Button size="sm">
                <Nav.Item>
                  <Nav.Link  className="fw-bold" eventKey="link-0" onClick={navHome}>
                    Home
                  </Nav.Link>
                </Nav.Item>
              </Button>
              <Button size="sm">
                <Nav.Item>
                  <Nav.Link className="fw-bold" eventKey="link-1" onClick={navAppointments}>
                    Appointments
                  </Nav.Link>
                </Nav.Item>
              </Button>
              <Button size="sm">
                <Nav.Item>
                  <Nav.Link
                    eventKey="link-2"
                    className="fw-bold"
                    onClick={navPatients}
                  >
                    Patients
                  </Nav.Link>
                </Nav.Item>
              </Button>
              <Button size="sm">
                <Nav.Item>
                  <Nav.Link
                    eventKey="link-3"
                    className="fw-bold"
                    onClick={handleShow}
                    onClose={handleCloseUserMenu}
                  >
                    Profile
                  </Nav.Link>
                </Nav.Item>
              </Button>
            </Nav>
            

            <Box sx={{ flexGrow: 0 }}>
              {/*<Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>*/}

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Modal
                  show={show}
                  onHide={handleClose}
                  style={{ width: "100%" }}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Your Profile</Modal.Title>
                  </Modal.Header>

                  <section>
                    <MDBRow className="justify-content-center align-items-center h-100">
                      <MDBCol className="mb-4 mb-lg-0">
                        <MDBCard>
                          <MDBRow className="g-0">
                            <MDBCol>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="Avatar"
                                className="my-5"
                                style={{ width: "115px" }}
                                fluid
                              />

                              <Button
                                variant="contained"
                                endIcon={<EditIcon />}
                                style={{ margin: "-60px 0px 0px 10px" }}
                              >
                                Edit
                              </Button>
                            </MDBCol>
                            <MDBCol md="8">
                              <MDBCardBody>
                                <MDBTypography tag="h6">
                                  Information
                                </MDBTypography>
                                <hr className="mt-0 mb-4" />
                                <MDBRow className="pt-1">
                                  <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">Name</MDBTypography>
                                    <MDBCardText className="text-muted">
                                      Dr Emma Watson
                                    </MDBCardText>
                                  </MDBCol>
                                  <MDBCol size="6" className="mb-3">
                                    <MDBTypography tag="h6">
                                      Specialist
                                    </MDBTypography>
                                    <MDBCardText className="text-muted">
                                      Surgeon
                                    </MDBCardText>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCardBody>
                            </MDBCol>
                          </MDBRow>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </section>
                </Modal>

                <MenuItem>
                  <Button onClick={handleShow}>profile</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={null}>Logout</Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </Navbar>
      <div></div>
    </>
  );
}
export default ResponsiveAppBar;
