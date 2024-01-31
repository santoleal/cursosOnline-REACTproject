import React from "react";

const Contador = ( { contador, sumar, restar, agregarCurso }) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h3>{contador}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={()=> agregarCurso(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default Contador;
