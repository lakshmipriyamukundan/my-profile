import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import PersonalWebsite from "./components/PersonalWebsite";
import theme from "./Theme";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <PersonalWebsite />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
