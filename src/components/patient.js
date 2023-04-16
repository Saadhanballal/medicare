import AddRoundedIcon from "@mui/icons-material/AddRounded";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

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

const openForm = () => {
  return;
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 120 },
  { field: "lastName", headerName: "Last name", width: 140 },
  { field: "age", headerName: "Age", type: "number", width: 30 },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 150,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "contact", headerName: "Contact", type: "phone", width: 120 },
  {
    field: "category",
    headerName: "Category",
    type: "category",
    width: 100,
    justifyContent: "center",
  },
  { field: "height", headerName: "Height", type: "height", width: 100 },
  { field: "weight", headerName: "Weight", type: "weight", width: 100 },
  { field:"visit",type:"btn",width:100,
    sortable: false,
    headerName: "Visit Info",
    renderCell: () => (
      <IconButton aria-label="visitinfo"onClick={null}>
        <AddCircleIcon />
      </IconButton>
    )
  },
  
];
const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    gender: "Female",
    contact: 9876543210,
    category: "B",
    height: "160cm",
    weight: "70kg",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 24,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Quin",
    age: 50,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    gender: "Male",
    contact: 9876543210,
    category: "A",
    height: "170cm",
    weight: "60kg",
  },
];

export default function DataTable() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const [show, setShow] = useState(false);

  function handleshow(breakpoint) {
    setShow(true);
  }

  return (
    <div
      className="container"
      style={{
        height: 630,
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
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Typography>

      <DataGrid
        className="container mb-1 mt-4 bg-info"
        style={{ borderRadius: "20px", height: "470px" }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
