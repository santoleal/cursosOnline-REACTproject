import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({children}) => {


    const [cart, setCart] = useState( [] )

    const addToCart = (product) => {
        let exist = isInCart(product.id)

        exist ? (
            setCart(cart.map((elemento) => (
                elemento.id === product.id ? {...elemento, cantidad: product.cantidad} :  elemento ))) 
                ) : ( setCart( [...cart, product])) }

    const isInCart = (id) => {
        let exist = cart.some( elemento => elemento.id === id )
        return exist
    }

    const obtenerCantidadById = (id)=> {
        let productoEncontrado = cart.find(elemento => elemento.id === id)
        return productoEncontrado?.cantidad
    }

    const limpiarCarrito = () => {
        setCart([])
    }

    const borrarCursoById = (id) => {
        setCart(cart.filter(elemento => elemento.id !== id))

    }

    const obtenerPrecioTotal = () => {
        let precioTotal = cart.reduce((acumulador, elemento) => acumulador + (elemento.precio * elemento.cantidad), 0)
        return precioTotal
    }

    const obtenerTotalCuposPorCurso = () => {
        let totalCuposPorCurso = cart.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0)
        return totalCuposPorCurso
    }

    let data = {cart, addToCart, obtenerCantidadById, limpiarCarrito, borrarCursoById, obtenerPrecioTotal, obtenerTotalCuposPorCurso}

    
  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextComponent