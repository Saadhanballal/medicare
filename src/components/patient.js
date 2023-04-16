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

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  { field: "age", headerName: "Age", type: "number", width: 40 },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "gender", headerName: "Gender", width: 70 },
  { field: "contact", headerName: "Contact", type: "phone", width: 150 },
];
const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    gender: "Female",
    contact: 9876543210,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 24,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Quin",
    age: 150,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 11,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 12,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    gender: "Male",
    contact: 9876543210,
  },
  {
    id: 13,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    gender: "Male",
    contact: 9876543210,
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
    <>
      <div
        className="container p-2"
        style={{
          height: 700,
          width: "100%",

          background: "#5ABF84",
          borderRadius: "20px",
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

              <Form.Group className="mb-3" controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="Enter Age" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control placeholder="Enter Gender" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGrid">
                  <Form.Label>Contact Number </Form.Label>
                  <Form.Control placeholder="Phone Numner" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Prescription Details</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label>Attach Report</Form.Label>
                  <Form.Control type="file" size="lg" />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit" className="btn">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Typography
          className="container fw-bolder"
          sx={{ flex: "1 1 100%", marginLeft: 2, marginTop: 2 }}
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
              marginLeft: "5%",
              marginBottom: 4,
            }}
          >
            <AddRoundedIcon></AddRoundedIcon>New Patient
          </Button>
          <div>
            <DataGrid
              className="container mt-4 bg-info"
              style={{ borderRadius: "20px", height: "600px" }}
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
            />
          </div>
        </Typography>
      </div>
    </>
  );
}
