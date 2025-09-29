import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './LoginPage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainPage from './MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//dffds
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage/> }/>
        <Route path='/main' element={ <MainPage/> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
