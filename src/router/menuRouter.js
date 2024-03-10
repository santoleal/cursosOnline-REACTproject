import ItemDetailContainer from "../components/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/ItemList/ItemListContainer";
import Cart from "../components/pages/cart/Cart";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik";

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
