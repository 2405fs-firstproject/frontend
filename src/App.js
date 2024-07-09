import { Header } from "./section/Header";
import { Home } from "./section/Home";
import { Footer } from "./section/Footer";
import { Email } from "./pages/Policy/Email";
import { Private } from "./pages/Policy/Private";
import { Service } from "./pages/Policy/Service";
import { Login } from "./pages/Login";
import { JoinUs } from "./pages/JoinUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Wrapper">
          <Header />
          <div className="contentWrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/email" element={<Email />} />
              <Route path="/private" element={<Private />} />
              <Route path="/service" element={<Service />} />
              <Route path="/login" element={<Login />} />
              <Route path="/joinus" element={<JoinUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
