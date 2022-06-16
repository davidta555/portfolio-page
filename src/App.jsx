import React from "react";
import Main from "./components/main/Main";
// import { Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Technologies from "./components/technologies/Technologies";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      {/* <Main /> */}
      {/* <Route path="/" element={<Main />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="teachnologies" element={<Technologies />}></Route>
      <Route path="contact" element={<Contact />}></Route> */}
      {/* <Nav /> */}
      {/* <About /> */}
      <Technologies />
      {/* <Contact /> */}
    </div>
  );
};

export default App;
