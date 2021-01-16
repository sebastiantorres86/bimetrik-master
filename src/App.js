import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Header />
      <hr />
      <Routes />
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
