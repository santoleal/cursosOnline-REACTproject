import { useState } from "react"
import Checkout from "./Checkout"


const CheckoutContainer = () => {

    const [userInfo, setUserInfo] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
    })

    // const capturarNombre = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         nombre: e.target.value
    //     })
    // }

    // const capturarApellido = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         apellido: e.target.value
    //     })
    // }

    // const capturarEmail = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         email: e.target.value
    //     })
    // }

    // const capturarTelefono = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         telefono: e.target.value
    //     })
    // }


    const handleChange = (e) => {
        setUserInfo({
            ...userInfo, 
            [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Este es el usuario: ", userInfo)
    }

    const limpiarDatos = (e) => {
        setUserInfo({
            ...userInfo, 
            [e.target.name]: ""
        })
    }

    const cancelarOperacion = () => {
        console.log("Operación cancelada")
    }


    return (
    <div>
        
        <h1>Este es el checkout</h1>

        <form onSubmit={handleSubmit}>
            <label>Nombre: </label><input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
            <label>Apellido: </label><input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} />
            <label>Email: </label><input type="text" name="email" placeholder="Email" onChange={handleChange} />
            <label>Teléfono: </label><input type="text" name="telefono"  placeholder="Teléfono" onChange={handleChange} />

            <button type="submit">Enviar datos</button>

            <button type="button" onClick={limpiarDatos} >Limpiar Datos</button>

            <button type="button" onClick={cancelarOperacion}>Cancelar operación</button>

        </form>

        
        {/* <Checkout /> */}



    </div>
  )
}

export default CheckoutContainer