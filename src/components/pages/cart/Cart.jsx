import { Box, Button, Container, Grid } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const {
    cart,
    limpiarCarrito,
    borrarCursoById,
    obtenerPrecioTotal,
    obtenerTotalCuposPorCurso,
  } = useContext(CartContext);

  let totalPrecio = obtenerPrecioTotal();

  let totalCuposPorCurso = obtenerTotalCuposPorCurso();


  const vaciarCarritoConAlerta = () => { 

    Swal.fire({
      title: "¿Quieres vaciar el carro?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Dejar como está`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        limpiarCarrito()
        Swal.fire("Eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Todo sigue igual...", "", "info");
      }
    });

     }


  return (
    <div>
      {cart.length === 0 ? (
        <Box sx={{ textAlign:'center'}}>
          <h1>No hay cursos en el carrito</h1>
          <Link to="/">
            <Button variant="contained" color="primary" sx={{ margin: '50px'}}>
              Volver a la tienda
            </Button> </Link>
        </Box>
      ) : (

        <Container sx={{ textAlign:"center"}}>
        <h1>Resumen de Cursos comprados</h1>
          <Grid container spacing={2} columns={16} sx={{ textAlign:"center", margin: "20px"}}> 
          <Grid item xs={16} md={8}>
            {cart.map((product) => (
            <div key={product.id} style={{ border: "1px solid green", padding: "5px", margin: "auto", width: "80%"}}>

              <h2>Curso: {product.titulo}</h2>
              <h3>Cupos a comprar: {product.cantidad}</h3>
              <h3>Precio por cupo: {product.precio} </h3>
              <h4>Precio total por curso: { product.cantidad * product.precio} </h4>


            <Button onClick={() => borrarCursoById(product.id)}>
              Eliminar curso
            </Button>
         
        </div>
      ))}
      </Grid>
      <Grid item xs={16} md={8} >
        <div>
          <Box>
            <h3>Total de cursos a comprar: {cart.length} </h3>
            <h3>Total de cupos por cursos: {totalCuposPorCurso} </h3>
            <h2>Precio total: {totalPrecio}</h2>
          </Box>
          <Box display="flex" alignItems="flex-end" gap={4} flexDirection="row" justifyContent="center">
            <Link to="/checkout">
              <Button variant="contained" color="primary">
                Finalizar la compra
              </Button><br/>
            </Link>
            <Button variant="outlined" onClick={vaciarCarritoConAlerta}>
              Vaciar carrito
            </Button>
          </Box>
        </div>
        </Grid>
       </Grid>
       </Container>

      )}
    </div>
  );
};

export default Cart;
