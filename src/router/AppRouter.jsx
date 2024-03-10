import { Route, Routes } from "react-router-dom"
import { NavBarContainer } from "../components/layout/navbar/NavBarContainer"
import Footer from "../components/layout/footer/Footer"
import Layout from "../components/layout/Layout"
import { rutas } from "./menuRouter"
import { useFormik } from "formik"


const AppRouter = () => {

  const { handleChange, handleSubmit} = useFormik(
    {
      initialValues: {
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
      },
      onSubmit: (values) => {
        console.log(values)
      },
    }
  )
 
  return (
    <div>
        
        <Routes>
            <Route element={<Layout />}>
                {
                rutas.map(( {id, path, Element} ) => {
                    return <Route key={id} path={path} element={<Element />} />
                } )         
            } 
            </Route>
            <Route
            path="*"
            element={<h1>Error 404. Página no encontrada.</h1>}
            />
      </Routes>

    </div>
  )
}

export default AppRouter