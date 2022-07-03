import React from "react";

import { NavLink } from "react-router-dom";

import { Container } from "./styles";

import Logo from "../../assets/logo.svg";

const Header = () => (
  <Container>
    <header>
      <div>
        <div>
          <img src={Logo} alt="Bill" />
        </div>
        <span>Bill</span>
      </div>
      <nav>
        {/* <NavLink
          style={{
            paddingBottom: "7px",
            borderBottom: "3px solid #FF872C",
          }}
          to="/"
        >
          Listagem
        </NavLink> */}
        {/* <NavLink
          style={{
            paddingBottom: "7px",
            borderBottom: "3px solid #FF872C",
          }}
          to="/import"
        >
          Importar
        </NavLink> */}
      </nav>
    </header>
  </Container>
);

export default Header;
