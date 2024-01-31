import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const [cantidadItems, setCantidadItems] = useState(0);

  return (
    <>
      <Link to="/carrito" style={{textDecoration: "none", color: 'white'}}>
        <Badge badgeContent={cantidadItems} showZero color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </>
  );
};

export default CartWidget;
