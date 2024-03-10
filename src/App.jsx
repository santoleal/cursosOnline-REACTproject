import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { temaGeneral } from "./themeConfig";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={temaGeneral}> */}
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
