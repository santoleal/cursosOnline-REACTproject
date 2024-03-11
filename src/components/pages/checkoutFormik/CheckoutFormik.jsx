import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";



const CheckoutFormik = () => {

  const [pedidoId, setPedidoId] = useState(null);


  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
    },
    onSubmit: (info) => {
      console.log(info);
      const pedidosColeccion = collection(db, "pedidos");

      addDoc(pedidosColeccion, info).then((res) => setPedidoId(res.id));
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo requerido").min(2, "Debe tener al menos 2 caracteres.").max(20,"Debe tener máximo 20 caracteres."),
      apellido: Yup.string().required("Campo requerido").min(2, "Debe tener al menos 2 caracteres.").max(30, "Debe tener máximo 30 caracteres."),
      email: Yup.string().email("Email inválido. Debe contener @ y extensión").required("Campo requerido"),
      telefono: Yup.number().required("Campo requerido"),
    }),
  }  
  );

  console.log(errors);

  return (
    <div style={{ padding: "50px", margin: "auto"}}>
      {
        pedidoId ? (
          
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Pedido realizado con éxito. Ya nos contactaremos! Serie de pedido: ",
            showConfirmButton: true,
            timer: 5500,
          })
        ) : (

          <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ maxWidth: '70%', margin: 'auto' }}>
          <Grid item xs={12} md={6}> 
            <TextField
              label="Nombre"
              variant="filled"
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Apellido"
              variant="filled"
              name="apellido"
              onChange={handleChange}
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
            />
          </Grid>

          <Grid item xs={12} >            
            <TextField
              label="Email"
              variant="filled"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teléfono"
              variant="filled"
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>

        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
          <Button variant="outlined" type="button">
            Cancelar
          </Button>
          <Button variant="outlined" type="button">
            Limpiar Formulario
          </Button>
          </Grid>
      </Grid>
      </form> )


      }
    </div>
  );
};

export default CheckoutFormik;
