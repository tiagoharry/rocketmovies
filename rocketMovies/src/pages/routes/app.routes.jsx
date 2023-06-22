import { Routes, Route } from 'react-router-dom'

import { Perfil } from '../Perfil'
import { Create } from '../Create'
import { Preview } from '../Preview'
import { Home } from '../Home'
import { SignIn } from '../SignIn'


export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<Create />}/>
      <Route path="/preview" element={<Preview />}/>
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/signin" element={<SignIn />}/>
    </Routes>
  )
}