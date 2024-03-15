import { useState } from "react"

import Contador from "./Contador"
import Swal from "sweetalert2"

const ContadorContainer = ( {cupos, agregarCurso, initial=1} ) => {

 const [ contador, setContador] = useState(initial)


 const sumar = () => {

    if (contador < cupos){
        setContador(contador + 1)}
        else {
            Swal.fire("Ha llegado a la cantidad máxima de cupos a comprar.")
        }
 }

 const restar = () => {
    if (contador > 0) {
        setContador(contador -1)
    }
 } 


    return (
 <Contador contador = {contador} sumar = {sumar} restar = {restar} agregarCurso ={agregarCurso} />
  )
}

export default ContadorContainer