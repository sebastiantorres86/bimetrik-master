import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
