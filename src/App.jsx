import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer";
import { NavBarContainer } from "./components/layout/navbar/NavBarContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import { ThemeProvider } from "@emotion/react";
import { temaGeneral } from "./themeConfig";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={temaGeneral}> */}
      <Routes>
        <Route element={<NavBarContainer />}>
          <Route element={<Footer />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categorias/:tags" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/itemDetail" element={<ItemDetailContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={<h1>Error 404. Página no encontrada.</h1>}
            />
          </Route>
        </Route>
      </Routes>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
