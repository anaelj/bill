import React from "react";

import { Route, Routes as RR } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import { ExpenseItem } from "../pages/ExpenseItem";

import Expenses from "../pages/Expenses";
import Login from "../pages/Login";
import Travels from "../pages/Travels";

export const Routes = () => (
  <RR>
    <Route path="/" element={<Login />} />
    <Route path="/travels" element={<Travels />} />
    <Route path="/expenses" element={<Expenses />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/expenseitem" element={<ExpenseItem />} />
  </RR>
);
