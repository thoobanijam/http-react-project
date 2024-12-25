import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App1 from "./App1";
import Login from "./Login";

function App2() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="/login"></Link>
      </div>
      <Routes>
      <Route path="/" element={<Login />} />
  <Route path="/login" element={<Login />} />
  <Route path="/app1" element={<App1 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App2;
