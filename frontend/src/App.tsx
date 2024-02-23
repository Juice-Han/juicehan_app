import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Papago from "./pages/Papago";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/papago" element={<Papago/>}/>
        <Route path="*" element={<div>404 error</div>}/>
      </Routes>
    </>
  );
}

export default App;
