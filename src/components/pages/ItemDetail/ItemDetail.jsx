import React from "react";
import ContadorContainer from "../../common/contador/ContadorContainer";
import { Box, Typography } from "@mui/material";

const ItemDetail = ({ cursoSeleccionado, agregarCurso, initial }) => {
  return (
    <Box
      sx={{
        bgcolor: "#cfe8fc",
        width: "50%",
        margin: "auto",
        textAlign: "center",
        padding: "20px",
      }}
    >
          <Typography gutterBottom variant="h4" component="div">
            <b>Curso de {cursoSeleccionado.titulo}</b>
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ padding: '5px'}}>
            {cursoSeleccionado.descripcion}
          </Typography>

      <Box sx={{ display: "flex", padding: '20px' }}>
        <Box>
          <img src={cursoSeleccionado.img} alt="" />
        </Box>
        <Box sx= {{ textAlign:'left', padding:'0 20px' }} >
          <Typography variant="body1" color="text.secondary">
            - <strong>Temario:</strong> {cursoSeleccionado.temario}
            <br />
            - <strong>Dedicación:</strong> {cursoSeleccionado.dedicacion}
            <br />
            - <strong>Relator:</strong> {cursoSeleccionado.relator}
            <br />
            - <strong>Tags:</strong> {cursoSeleccionado.tags}
          </Typography>
          <Typography variant="h5" color="green"> 
            Precio: {cursoSeleccionado.precio}
            <br />
            </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: '50px' }}>
        {initial ? <h4>Ya tienes {initial} cupos registrados</h4> : <h4>Elige la cantidad de cupos que deseas comprar</h4>}

        <ContadorContainer
          cupos={cursoSeleccionado.cupos}
          agregarCurso={agregarCurso}
          initial={initial}
        />
      </Box>
    </Box>
  );
};

export default ItemDetail;
