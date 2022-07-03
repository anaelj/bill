import React from "react";

import { Route, Routes as RR } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Import from "../pages/Import";

const Routes: React.FC = () => (
  <RR>
    <Route path="/" element={<Dashboard />} />
    <Route path="/import" element={<Import />} />
  </RR>
);

export default Routes;
