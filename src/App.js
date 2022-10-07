import React from "react";
import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Header,
} from "./containers";
import "./App.css";

import { Cta, Brand, Navigation } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navigation />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
