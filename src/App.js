import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Main />
      </div>
    </div>
  );
}
