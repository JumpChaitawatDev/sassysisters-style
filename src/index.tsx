import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { RecoilRoot } from "recoil";

const SassysistersApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <SassysistersApp />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
