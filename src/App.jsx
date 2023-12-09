import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./signup.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
