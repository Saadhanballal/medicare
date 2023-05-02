import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Atable from "./components/appointment";
import Ptable from "./components/patient";
import Navbar from "./components/navbar";
import patientdata from "./components/patientdata";
import PatientDetail from "./components/PatientDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/appointment" element={<Atable />} />
        <Route exact path="/patients" element={<Ptable />} />
        <Route exact path="/PatientDetail" element={<PatientDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
