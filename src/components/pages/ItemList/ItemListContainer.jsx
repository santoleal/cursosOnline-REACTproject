import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SkeletonCard from "../../common/skeletonCard/SkeletonCard";
import { Container } from "@mui/material";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfiguracion";
import { cursos } from "../../../assets/data/listaCursos";
import { Button } from "@mui/base";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);  
  const { tags } = useParams();
  // const rellenarDB = () => {
  //   const cursosColeccion = collection(db, "cursos");

  //   cursos.forEach((curso) => {
  //     addDoc(cursosColeccion, curso);
  //   }
  //   );
  // }

  useEffect(() => {

    let cursosColeccion = collection(db, "cursos");
    let consulta = undefined

    if (!tags) {  
      consulta = cursosColeccion;
    }  else {

    consulta = query(cursosColeccion, where("tags", "==", tags));

    } 
    getDocs(consulta).then((res) => {
      const nuevoAreglo = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
      setItems(nuevoAreglo);
    }
    );
  }, [tags]);

  console.log(items);

  return <>
  {/* <Button onClick={rellenarDB}>Rellenar DB</Button> */}
  {items.length === 0 ? (<div>
            <Container sx={{ display: "flex", padding: "30px"}}> 
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </Container>
  </div>) : <ItemList items={items} />}</>;
};

export default ItemListContainer;
