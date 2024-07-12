import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import K_Pass_Card from "./components/K_Pass_Card";
import Home2_1 from "./components/Home2_1";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card-details/:cardName" element={<K_Pass_Card />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
