import { useEffect, useState } from "react";
import { cursos } from "../../../assets/data/listaCursos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  
  const [cursoSeleccionado, setCursoSeleccionado] = useState( {} )

  const {id} = useParams()
  

  useEffect(() => {
    let curso = cursos.find((item2) => item2.id === +id);

    const obtenerCurso = new Promise((resolve, reject) => {
      resolve(curso);
      // reje ct(error);
    });

    obtenerCurso
      .then((res) => setCursoSeleccionado(res))
      .catch((err) => console.log("Estos son los errores: " + { err })).finally(() => console.log("Finalizó la promesa") );
  }, [id]);


  const agregarCurso = ( cantidad ) => {

    let objetoCurso = {
      ...cursoSeleccionado,
      cantidad: cantidad,
    }
    console.log("Este es el curso a comprar: ",objetoCurso)
  }

  return <ItemDetail cursoSeleccionado={cursoSeleccionado} agregarCurso={agregarCurso} />;
};

export default ItemDetailContainer;
