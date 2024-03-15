import { useContext, useState } from "react";

import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";


const CartWidget = () => {
  const [cantidadItems, setCantidadItems] = useState(0);

  const {cart, obtenerTotalCuposPorCurso} = useContext( CartContext)

  let total = obtenerTotalCuposPorCurso()

  return (
    <>
      <Link to="/carrito" style={{textDecoration: "none", color: 'white'}}>
        <Badge badgeContent={total} showZero color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </>
  );
};

export default CartWidget;
