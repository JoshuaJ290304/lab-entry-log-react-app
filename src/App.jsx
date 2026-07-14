import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddLogEntry from "./components/AddLogEntry";
import ViewLogEntries from "./components/ViewLogEntries";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-log-entry" element={<AddLogEntry />} />
        <Route path="/view-log-entry" element={<ViewLogEntries />} />
      </Routes>
    </>
  );
}

export default App;