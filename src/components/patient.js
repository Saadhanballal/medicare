import AddRoundedIcon from "@mui/icons-material/AddRounded";
import * as React from "react";
import { Typography } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { rows } from "./patientdata";
//import PatientDetail from "./PatientDetail";
import { Link, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "sticky",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginTop: "1%",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "97%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "130ch",
      "&:focus": {
        width: "130ch",
      },
    },
  },
}));

export default function DataTable() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const [show, setShow] = useState(false);

  function handleshow(breakpoint) {
    setShow(true);
  }

  const columnsPerRow = 3;

  const navigate = useNavigate();
  const view = () => {
    navigate("/PatientDetail");
  };

  let [row, setrow] = useState(rows);

  // deleteById function for deleting the list items
  // const deleteById = (id) => {
  // setrow((oldValues) => {
  //     return oldValues.value(row).filter((item) => item.id !== id);
  //   });
  //   const newrow = rows.filter((item) => item.id !== id);
  //   setrow(newrow);
  // };
  // Search useState
  const [search, setSearch] = useState("");

  return (
    <div
      className="container"
      style={{
        width: "100%",
        borderRadius: "25px",
        background: "#5ABF84",
      }}
    >
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Patient Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="firstname"
                  placeholder="Enter First Name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastname" placeholder="Enter Last Name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="Enter Age" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Select Gender</Form.Label>
                <Form.Select>
                  <option>Select an option</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Contact Number </Form.Label>
                <Form.Control placeholder="Phone Numner" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Select Category</Form.Label>
                <Form.Select>
                  <option>Select a category</option>
                  <option>Option A</option>
                  <option>Option B</option>
                  <option>Option C</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Height </Form.Label>
                <Form.Control placeholder="in cm" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Weight </Form.Label>
                <Form.Control placeholder="in kg" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Allergies</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Prescription Details</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit" className="btn">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Typography
        className="container fw-bolder pt-4"
        sx={{ flex: "1 1 100%", marginLeft: 2, marginTop: 1 }}
        variant="h5"
        id="tableTitle"
        component="div"
      >
        Patients List
        <Button
          className="btn btn-info shadow"
          onClick={handleshow}
          style={{
            justifyContent: "center",
            marginLeft: "1%",
            marginBottom: 4,
          }}
        >
          <AddRoundedIcon></AddRoundedIcon>New Patient
        </Button>
        {/* search bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Typography>

      <div className="container">
        <Row xs={1} md={columnsPerRow}>
          {rows
            .slice(0)
            .reverse()
            .filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.firstName
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                    item.lastName
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    item.id.toString().includes(search.toString());
            })
            .map((item) => (
              <div key={item.id} className="container-fluid mt-4 mb-4">
                {/* Patient Info Card */}
                <Card
                  style={{ background: "#D9EDDF", borderRadius: "35px" }}
                  className="shadow-lg"
                >
                  <Image
                    className="align-self-center mt-3 shadow"
                    width={"40%"}
                    height={"40%"}
                    variant="top"
                    src={require("../assets/pfp.jpg")}
                    roundedCircle
                  />
                  <Card.Title>
                    <div className="mt-3 text-center">
                      <h4>
                        <b>
                          {item.firstName} {item.lastName}
                        </b>
                      </h4>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <div className="text-center">
                      <h5>Patient ID: {item.id}</h5>
                    </div>
                    <div className="row ps-4 mt-3">
                      <div className="col-6">
                        <h5>Age: {item.age}</h5>
                      </div>
                      <div className="col-5">
                        <h5>Weight: {item.weight}</h5>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <h5>{item.gender}</h5>
                    </div>
                  </Card.Text>
                  <div className="align-self-center mb-3">
                    <Button onClick={view} className="btn btn-info shadow">
                      View
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
        </Row>
      </div>
    </div>
  );
}
