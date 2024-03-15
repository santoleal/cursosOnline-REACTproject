import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Contador = ( { contador, sumar, restar, agregarCurso }) => {
  return (
    <div>
      <Box sx={{ display:"flex", justifyContent: 'space-evenly', alignItems: 'center', textAlign: "center", padding: "20px" }}>
      <Button variant="contained" size="small" onClick={restar}>-</Button>
      <h3>{contador}</h3>
      <Button variant="contained" size="small" onClick={sumar}>+</Button>
      </Box>
      <Button variant="contained" size="small" onClick={()=> agregarCurso(contador)}>Agregar al carrito</Button><br/>
      <Link to="/carrito"><Button variant="outlined" size="small" sx= {{ margin: '10px'}}>Ir al carrito</Button></Link>
    </div>
  );
};

export default Contador;
