import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-slate-800">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/service" exact element={<Service />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
