import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./section/Header";
import { Footer } from "./section/Footer";
import { Email } from "./pages/Policy/Email";
import { Private } from "./pages/Policy/Private";
import { Service } from "./pages/Policy/Service";
import ContactForm from "./pages/contact/ContactForm";
import ContactMain from "./pages/contact/ContactMain";
import CounselForm from "./pages/contact/CounselForm";
import NoticeForm from "./pages/Notice/NoticeForm";
import Info from "./pages/Info/Info";
import "./App.css";
import Card_sub from "./pages/main2/Card_sub";
import { Home } from "./section/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Wrapper">
          <Header />
          <div className="contentWrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/email" element={<Email />} />
              <Route path="/private" element={<Private />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contactform" element={<ContactForm />} />
              <Route path="/contactmain" element={<ContactMain />} />
              <Route path="/counsel" element={<CounselForm />} />
              <Route path="/notice" element={<NoticeForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/info" element={<Info />} />
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
