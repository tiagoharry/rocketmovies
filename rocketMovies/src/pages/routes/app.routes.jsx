import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import { Perfil } from '../Perfil'


export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
    </Routes>
  )
}