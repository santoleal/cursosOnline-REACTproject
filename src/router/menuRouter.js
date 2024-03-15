import ItemDetailContainer from "../components/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/ItemList/ItemListContainer";
import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik";
import Cart from "../components/pages/cart/Cart";

export const rutas = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categorias",
    path: "/categorias/:tags",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: Cart,
  },

  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutFormik,
  },
];
