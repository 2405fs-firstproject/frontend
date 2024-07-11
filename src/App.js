import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./section/Header";
import { Home } from "./section/Home";
import { Footer } from "./section/Footer";
import { Email } from "./pages/Policy/Email";
import { Private } from "./pages/Policy/Private";
import { Service } from "./pages/Policy/Service";
import { Login } from "./pages/Login";
import { JoinUs } from "./pages/JoinUs";
import Home2_1 from "./pages/main2/Home2_1";
import Card_sub from "./pages/main2/Card_sub";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Wrapper">
          <Header />
          <div className="contentWrapper">
            <Routes>
              <Route path="/" exact element={<Home2_1 />} />
              <Route path="/home" element={<Home />} />
              <Route path="/email" element={<Email />} />
              <Route path="/private" element={<Private />} />
              <Route path="/service" element={<Service />} />
              <Route path="/login" element={<Login />} />
              <Route path="/joinus" element={<JoinUs />} />
              <Route path="/k-pass-card" element={<Card_sub />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
