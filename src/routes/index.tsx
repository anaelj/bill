import React from 'react'

import { Route, Routes as RR } from 'react-router-dom'
import Cadastro from '../pages/Cadastro'

import Despesas from '../pages/Despesas'
import Login from '../pages/Login'
import Viagens from '../pages/Viagens'

const Routes: React.FC = () => (
  <RR>
    <Route path="/" element={<Login />} />
    <Route path="/viagens" element={<Viagens />} />
    <Route path="/despesas" element={<Despesas />} />
    <Route path="/cadastro" element={<Cadastro />} />
  </RR>
)

export default Routes
