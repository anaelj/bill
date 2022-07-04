import React from 'react'

import { Route, Routes as RR } from 'react-router-dom'
import Cadastro from '../pages/Cadastro'

import Expenses from '../pages/Expenses'
import Login from '../pages/Login'
import Travels from '../pages/Travels'

const Routes: React.FC = () => (
  <RR>
    <Route path="/" element={<Login />} />
    <Route path="/travels" element={<Travels />} />
    <Route path="/expenses" element={<Expenses />} />
    <Route path="/cadastro" element={<Cadastro />} />
  </RR>
)

export default Routes
