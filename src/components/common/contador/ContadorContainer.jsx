import { useState } from "react"
import Contador from "./Contador"

const ContadorContainer = ( {cupos, agregarCurso, initial=1} ) => {

 const [ contador, setContador] = useState(initial)


 const sumar = () => {

    if (contador < cupos){
        setContador(contador + 1)}
        else {
            alert("Ha llegado a la cantidad máxima de stock")
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