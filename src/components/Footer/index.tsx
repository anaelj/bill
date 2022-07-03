import React from "react";

import { NavLink } from "react-router-dom";

import { Container } from "./styles";

const Footer = () => (
  <Container>
    <footer>
      <nav>
        <NavLink
          style={{
            paddingBottom: "7px",
            borderBottom: "3px solid #FF872C",
          }}
          to="/import"
        >
          Adicionar Item
        </NavLink>
      </nav>
    </footer>
  </Container>
);

export default Footer;
