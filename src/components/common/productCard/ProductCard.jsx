import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345, my: 5 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.img}
      />
      <CardContent sx={{p:5}}>
        <Typography gutterBottom variant="h5" component="div">
        <b>{item.titulo}</b>
        </Typography>
        <Typography variant="body1" color="text.secondary">
        {item.descripcion}
        </Typography>
        <Typography sx={{py:2}} variant="body1" color="text.secondary">
        <b>Precio: ${item.precio}.- CLP</b>
        </Typography>
      </CardContent>
      <CardActions sx={{px:5}}>
        <Link to= {`/itemDetail/${item.id}`} >
          <Button size="large" variant="contained">Ver más detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;


