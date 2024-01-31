import { Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


// Esto va para la entrega final 

const SubMenu = () => {
  return (
    <Container
        maxWidth="lm"
        style={{ textAlign: "center", padding: "20px 0px" }}
      >
        <>{<h1>Categorías: </h1>}</>
        <Link to="/">
          <Button color="secondary" variant="filled">
            Todos
          </Button>
        </Link>
        <Link to="/categoria/literatura">
          <Button color="secondary" variant="filled">
            Literatura
          </Button>
        </Link>
        <Link to="/tematica/programacion">
          <Button color="secondary" variant="filled">
            Programación
          </Button>
        </Link>
        <Link to="/tematica/idiomas">
          <Button color="tertiary" variant="filled">
            Idiomas
          </Button>
        </Link>
        <Link to="/tematica/infantil">
          <Button color="tertiary" variant="filled">
            Infantil
          </Button>
        </Link>
        <Link to="/tematica/autoayuda">
          <Button color="tertiary" variant="filled">
            Autoayuda
          </Button>
        </Link>
      </Container>
  )
}

export default SubMenu