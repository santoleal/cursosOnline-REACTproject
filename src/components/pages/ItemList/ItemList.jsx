import { Box } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

import "./itemList.css"

const ItemList = ({ items }) => {

  return (
    <Box component={"section"} className="tarjetas">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default ItemList;
