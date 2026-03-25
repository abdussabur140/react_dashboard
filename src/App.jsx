import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard"; // create this

const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<Login />} />
      <Route path="/dashboard" element = {<Dashboard />} />
    </Routes>
  );
};

export default App;
