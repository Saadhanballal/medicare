import * as React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typography } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

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
  const [show, setShow] = useState(false);

  function handleshow(breakpoint) {
    setShow(true);
  }

  let [rows, setrows] = useState([
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
      age: 50,
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
  ]);

  const deleteById = (id) => {
    setrows((oldValues) => {
      return oldValues.filter((item) => item.id !== id);
    });
  };
  // Search useState
  const [search, setSearch] = useState("");

  return (
    <div
      className="container fw-bolder shadow"
      style={{
        width: "100%",
        background: "#5ABF84",
        borderRadius: "25px",
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
        sx={{ flex: "1 1 100%", marginLeft: 2, marginTop: 1 }}
        variant="h5"
        id="tableTitle"
        component="div"
      >
        Appointments
        <Button
          className="btn btn-info shadow"
          onClick={handleshow}
          style={{
            justifyContent: "center",
            marginLeft: "1%",
            marginBottom: 4,
            color: "black",
          }}
        >
          <CalendarMonthIcon></CalendarMonthIcon>New Appointment
        </Button>
        {/* Search Bar */}
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

      <div>
        {rows
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
            <div
              className="container-fluid mt-4"
              style={{
                height: "110px",
                backgroundColor: "#D9EDDF",
                borderRadius: "25px",
              }}
            >
              <div key={item.id} className="d-flex flex-row">
                <div className="row flex-shrink-1 align-self-center">
                  {/* User profile picture */}
                  <Image
                    className="row mx-3"
                    width={80}
                    height={80}
                    src={require("../assets/pfp.jpg")}
                    roundedCircle
                  />
                </div>
                {/* User name */}
                <div className="row flex-grow-1 mx-3">
                  <div className="d-flex">
                    <h2 className="mt-1 w-100">
                      Name:{item.firstName} {item.lastName}
                    </h2>
                    <div className="d-flex p-2 w-100 justify-content-end">
                      <div
                        className="btn btn-info mx-2"
                        style={{ width: "75px", borderRadius: "10px" }}
                      >
                        Edit
                      </div>

                      <div
                        className="btn btn-danger mx-2"
                        style={{ width: "75px", borderRadius: "10px" }}
                        onClick={() => deleteById(item.id)}
                      >
                        Delete
                      </div>
                    </div>
                  </div>

                  {/* appointment details display */}
                  <div className="row d-flex">
                    <h5 className="col mt-4 ">Appointment No: {item.id}</h5>
                    <h5 className="col mt-4">Date: {item.date}</h5>
                    <h5 className="col mt-4">Time: {item.time}</h5>
                    <h5 className="col mt-4">Duration: {item.duration}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-3" style={{ height: "10px" }}></div>
    </div>
  );
}
