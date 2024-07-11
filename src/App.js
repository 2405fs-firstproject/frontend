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
import ContactForm from "./pages/contact/ContactForm"; // 기본 내보내기로 가져오기
import ContactMain from "./pages/contact/ContactMain";
import CounselForm from "./pages/contact/CounselForm";
import "./App.css";

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
              <Route path="/login" element={<Login />} />
              <Route path="/joinus" element={<JoinUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
