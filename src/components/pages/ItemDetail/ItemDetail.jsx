import React from "react";
import ContadorContainer from "../../common/contador/ContadorContainer";
import { Box, Typography } from "@mui/material";

const ItemDetail = ({ cursoSeleccionado, agregarCurso, initial }) => {
  return (
    <Box sx={{ bgcolor: '#cfe8fc', width: '50%', margin: 'auto', textAlign: 'center', padding: '20px'  }}>
        <img src={cursoSeleccionado.img} alt="" />
      <Typography gutterBottom variant="h5" component="div">
        <b>{cursoSeleccionado.titulo}</b>
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {cursoSeleccionado.descripcion}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        -Temario: {cursoSeleccionado.temario}
        <br />
        -Dedicación: {cursoSeleccionado.dedicacion}
        <br />
        -Relator: {cursoSeleccionado.relator}
        <br />
        -Precio: {cursoSeleccionado.precio}
        <br />
        -Tags: {cursoSeleccionado.tags}
      </Typography>

      {
        initial && <h5>Ya tienes {initial} cupos registrados</h5>
      }

      <ContadorContainer cupos={cursoSeleccionado.cupos} agregarCurso={agregarCurso} initial={initial} />
    </Box>
  );
};

export default ItemDetail;
