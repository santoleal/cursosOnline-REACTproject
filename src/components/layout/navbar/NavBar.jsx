import React from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
// import './NavBar.css'

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  Container,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";

const NavBar = ({
  // pages,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h3">
              <Link to="/" style={{textDecoration: "none",
  color: 'white'}}>Cursos online</Link>
              </Typography>

            {/* Esta es la caja del menú responsive */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>

            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CURSOS ONLINE
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, px: 5 }}
            >
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <MenuItem sx={{ py: 2 }}>
                    <Typography variant="h4">{page}</Typography>
                  </MenuItem>
                </Button>
              ))} */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <CartWidget />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>


      <Container
        maxWidth="lm"
        style={{ textAlign: "center", padding: "20px 0px" }}
      >
        <>{<h3>Categorías: </h3>}</>
        <Link to="/">
          <Button color="secondary" variant="filled">
            Todos
          </Button>
        </Link>
        <Link to="/categorias/Habilidades blandas">
          <Button color="secondary" variant="filled">
          Habilidades blandas
          </Button>
        </Link>
        <Link to="/categorias/Formacion general">
          <Button color="secondary" variant="filled">
          Formación general
          </Button>
        </Link>
      </Container>

    </>
  );
};

export default NavBar;
