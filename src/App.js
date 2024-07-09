import { Header } from "./section/Header";
import { Home } from "./section/Home";
import { Footer } from "./section/Footer";
import { Email } from "./pages/Policy/Email";
import { Private } from "./pages/Policy/Private";
import { Service } from "./pages/Policy/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />} />
          <Route path="/private" element={<Private />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
