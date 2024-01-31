import { useEffect, useState } from "react";
import { cursos } from "../../../assets/data/listaCursos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

// De la primer pre-entrega
// const ItemListContainer = (gretting) => {
//   return <>
//   <h1>"Bienvenid@, {gretting.visitante}, a mi sitio de CursosOnline!"</h1>

//   </>;
// };

const ItemListContainer = () => {
  const [items, setItems] = useState([]);


  const { tags } = useParams()
  console.log(tags ? "Estoy filtrando" : "Estoy en home")

  useEffect(() => {

    // // Esto es para recordar cómo llamar desde una api
    // const mostrarCursosDesdeApi = fetch("api")
    // mostrarCursosDesdeApi.then().catch()

    const cursosFiltrados = cursos.filter( (curso) => curso.tags === tags )

    const mostrarCursos = new Promise((resolve) => {
      resolve(tags ? cursosFiltrados : cursos );
    });

    mostrarCursos
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [ tags ]);

  console.log(items);

  return <ItemList items={items} />;
};

export default ItemListContainer;
