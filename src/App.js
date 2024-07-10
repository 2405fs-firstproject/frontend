import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact.js";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/Contact" element={<Contact />} />
    //   </Routes>
    // </Router>
    <Contact />
  );
}

export default App;
