import * as React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { useState } from "react";
import { Button } from "react-bootstrap";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  { field: "age", headerName: "Age", type: "number", width: 40 },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 400,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "date", headerName: "Date", width: 180 },
  { field: "time", headerName: "Time", width: 180, sortable: false },
  { field: "duration", headerName: "Duration", width: 180, sortable: false },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    date: "03/04/2023",
    time: "9:00 AM",
    duration: "20 Min",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    date: "03/04/2023",
    time: "9:25 AM",
    duration: "10 Min",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    date: "03/04/2023",
    time: "9:40 AM",
    duration: "20 Min",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    date: "03/04/2023",
    time: "10:00 AM",
    duration: "30 Min",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 24,
    date: "03/04/2023",
    time: "10:30 AM",
    duration: "15 Min",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Quin",
    age: 150,
    date: "03/04/2023",
    time: "10:50 AM",
    duration: "40 Min",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    date: "03/04/2023",
    time: "11:45 AM",
    duration: "15 Min",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    date: "03/04/2023",
    time: "12:00 PM",
    duration: "30 Min",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    date: "03/04/2023",
    time: "2:00 PM",
    duration: "15 Min",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    date: "03/04/2023",
    time: "2:30 PM",
    duration: "30 Min",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    date: "03/04/2023",
    time: "2:30 PM",
    duration: "30 Min",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    date: "03/04/2023",
    time: "2:30 PM",
    duration: "30 Min",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    date: "03/04/2023",
    time: "2:30 PM",
    duration: "30 Min",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    date: "03/04/2023",
    time: "2:30 PM",
    duration: "30 Min",
  },
];

export default function DataTable() {
  const [show, setShow] = useState(false);

  function handleshow(breakpoint) {
    setShow(true);
  }
  return (
    <div
      className="container"
      style={{
        height: 700,
        width: "100%",
        background: "#5ABF84",
        marginTop: "5px",
        borderRadius: "20px",
      }}
    >
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker orientation="landscape" />
          </LocalizationProvider>
        </Modal.Body>
      </Modal>
      <Typography
        className="container fw-bold pt-4"
        sx={{ flex: "1 1 100%", marginLeft: 2 }}
        variant="h5"
        id="tableTitle"
        component="div"
      >
        Upcoming Appointments
        <Button
          className="btn btn-info shadow"
          onClick={handleshow}
          style={{
            justifyContent: "center",
            marginLeft: "1%",
            marginBottom: 4,
            color: "white",
          }}
        >
          <CalendarMonthIcon></CalendarMonthIcon>New Appointment
        </Button>
      </Typography>
      <DataGrid
        className="container mb-1 mt-4 bg-info"
        style={{ borderRadius: "20px", height: "600px" }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
