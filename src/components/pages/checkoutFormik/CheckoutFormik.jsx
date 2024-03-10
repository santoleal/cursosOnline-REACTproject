import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
    },
    onSubmit: (info) => {
      console.log(info);
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo requerido").min(2, "Debe tener al menos 2 caracteres.").max(20,"Debe tener máximo 20 caracteres."),
      apellido: Yup.string().required("Campo requerido").min(2, "Debe tener al menos 2 caracteres.").max(30, "Debe tener máximo 30 caracteres."),
      email: Yup.string().email("Email inválido. Debe contener @ y extensión").required("Campo requerido"),
      telefono: Yup.number().required("Campo requerido"),
    }),
  });

  console.log(errors);

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="filled"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />

        <TextField
          label="Apellido"
          variant="filled"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <TextField
          label="Email"
          variant="filled"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Teléfono"
          variant="filled"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}

        />

        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant="outlined" type="button">
          Cancelar
        </Button>
        <Button variant="outlined" type="button">
          Limpiar Formulario
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
