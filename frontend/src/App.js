import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import TableData from "./components/TableData";
import "bootstrap/dist/css/bootstrap.min.css";
import OriginalTable from "./components/OriginalTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test1 from "./components/Test1";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/test" element={<Test1 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
