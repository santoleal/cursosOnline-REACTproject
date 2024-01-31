import * as React from "react";
import NavBar from "./NavBar";

export const NavBarContainer = () => {
  const pages = [ "Inicio", "Cursos", "Estudiantes", "Contacto"  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <NavBar
      pages={pages}
      anchorElNav={anchorElNav}
      handleOpenNavMenu={handleOpenNavMenu}
      handleCloseNavMenu={handleCloseNavMenu}
    />
  );
};
