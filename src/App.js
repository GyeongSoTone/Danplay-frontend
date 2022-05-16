import React from 'react'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import ROUTES from './constants/routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Home from './pages/Home'
import Login from './pages/Login'
import MyPage from './pages/MyPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.ROOT} element={<Home />}></Route>
          <Route path={ROUTES.LOGIN} element={<Login />}></Route>
          <Route path={ROUTES.MYPAGE} element={<MyPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
