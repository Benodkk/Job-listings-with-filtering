import React from "react";
import ReactDOM from "react-dom/client";

import store from "./redux/index.ts";
import { Provider } from "react-redux";

import App from "./App.tsx";

import { GlobalStyle } from "./styles/Global.ts";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
