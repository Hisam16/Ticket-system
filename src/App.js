// src/App.js
import React from "react";
import "./App.css";
import Form from "./components/Form";
import AppNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />

      <Form />
    </div>
  );
}

export default App;
