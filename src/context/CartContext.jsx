import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({children}) => {


    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []) 

    const addToCart = (product) => {
        let exist = isInCart(product.id)

        if (exist) {
            let nuevoArreglo = cart.map((elemento) => (
                elemento.id === product.id ? {...elemento, cantidad: product.cantidad} :  elemento ))
            setCart(nuevoArreglo)
            localStorage.setItem('cart', JSON.stringify(nuevoArreglo) 
                )} else {
                    setCart( [...cart, product])
                    localStorage.setItem('cart', JSON.stringify([...cart, product]) 
                    )
                } }

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
        localStorage.removeItem('cart') 

    }

    const borrarCursoById = (id) => {
        let borrarArreglo = cart.filter(elemento => elemento.id !== id)
        setCart(borrarArreglo)
        localStorage.setItem('cart', JSON.stringify(borrarArreglo) 
        )           
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