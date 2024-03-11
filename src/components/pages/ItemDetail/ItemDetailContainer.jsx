import { useContext, useEffect, useState } from "react";
import { cursos } from "../../../assets/data/listaCursos";
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { collection, doc, getDoc } from "@firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  
  const [cursoSeleccionado, setCursoSeleccionado] = useState( {} )

  const {id} = useParams()

  const {addToCart, obtenerCantidadById} = useContext(CartContext)

  let cantidadTotal = obtenerCantidadById(id)

  console.log(cantidadTotal)

  const navegar = useNavigate();
  

  useEffect(() => {
    let cursoColeccion = collection(db, "cursos"); 

    let obtenerDoc = doc(cursoColeccion, id)

    getDoc(obtenerDoc).then((res) => {
      if (res.exists()) {
        setCursoSeleccionado({ ...res.data(), id: res.id });
      } else {
        console.log("No existe el documento");
      }
    } );
  
  }, [id]);


  const agregarCurso = ( cantidad ) => {

    let objetoCurso = {
      ...cursoSeleccionado,
      cantidad: cantidad,

    }

    addToCart( objetoCurso)
    console.log("Este es el curso a comprar: ",objetoCurso)

    Swal.fire({
      position: "center",
      icon: "success",
      title: ("Has añadido correctamente."),
      showConfirmButton: false,
      timer: 1500
    });

    // navegar("/carrito")



  }

  return <ItemDetail cursoSeleccionado={cursoSeleccionado} agregarCurso={agregarCurso} initial={cantidadTotal} />;
};

export default ItemDetailContainer;
