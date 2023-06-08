import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'


export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  )
}