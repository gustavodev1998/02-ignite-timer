import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

/* Qualquer parte da APP deste que esteja dentro do ThemeProvider */
import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
