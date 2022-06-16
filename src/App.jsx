import React from "react";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Technologies from "./components/technologies/Technologies";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
