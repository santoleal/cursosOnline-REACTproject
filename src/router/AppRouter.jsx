import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import { useFormik } from "formik"

import { rutas } from "./menuRouter"

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