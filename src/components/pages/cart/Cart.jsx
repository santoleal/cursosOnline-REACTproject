import { Button } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {

  const { cart, limpiarCarrito, borrarCursoById, obtenerPrecioTotal, obtenerTotalCuposPorCurso } = useContext( CartContext)

let totalPrecio = obtenerPrecioTotal()

let totalCuposPorCurso = obtenerTotalCuposPorCurso()

  return (
    <div>
        <h1>Estoy en el carrito</h1>


        {
          cart.map((product) => (
          <div key={product.id} style={{border: "1px solid green", padding:"5px", margin:"5px"}}>
            <h2>{product.titulo}</h2>
            <h2>Cantidad: {product.cantidad}</h2>
            <h2>Precio: {product.precio} </h2>
            <Button onClick={() => borrarCursoById(product.id)}>Eliminar curso</Button>
            </div>
          ))
        }
        <h3>Total de cursos a comprar: {cart.length} </h3>
        <h3>Total de cupos por cursos: {totalCuposPorCurso} </h3>
        <h2>Precio total: {totalPrecio}</h2>

        <Link to= "/checkout" >
          <Button variant="contained" color="primary">Finalizar la compra</Button>
        </Link>
        <Button variant="contained" onClick={limpiarCarrito}>Vaciar carrito</Button>
    </div>
  )
}

export default Cart