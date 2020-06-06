import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayPage from "./component/playPage/playPage";
import Navbar from "./component/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <PlayPage />
    </>
  );
}

export default App;
