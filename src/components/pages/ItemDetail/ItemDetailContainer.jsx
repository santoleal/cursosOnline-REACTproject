import { useContext, useEffect, useState } from "react";
import { cursos } from "../../../assets/data/listaCursos";
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  
  const [cursoSeleccionado, setCursoSeleccionado] = useState( {} )

  const {id} = useParams()

  const {addToCart, obtenerCantidadById} = useContext(CartContext)

  let cantidadTotal = obtenerCantidadById(+id)

  console.log(cantidadTotal)

  const navegar = useNavigate();
  

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

    addToCart( objetoCurso)
    console.log("Este es el curso a comprar: ",objetoCurso)

    // navegar("/carrito")



  }

  return <ItemDetail cursoSeleccionado={cursoSeleccionado} agregarCurso={agregarCurso} initial={cantidadTotal} />;
};

export default ItemDetailContainer;
