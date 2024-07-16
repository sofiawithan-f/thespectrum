import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './fonts/SmartFrocks/SmartFrocksNf-BdrG.ttf';

import {
  Navigation,
  Home,
  Epk,
  Contact,
} from "./components";



ReactDOM.render(
  <Router style = {{backgroundImage: `url($background)`}}>
    <Navigation />
    <main className = "main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/epk"  element={<Epk />} />
      <Route path="/contact" element={<Contact />} />
   
    </Routes>
  </main>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
