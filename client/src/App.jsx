import './App.css'
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify"

import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Busket from './pages/busket/Busket';
import Favorited from './pages/favorited/Favorited';
import Error from './pages/error/Error';
import Payment from './pages/payment/Payment';
// import ProductPage from './pages/productpage/ProductPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <ToastContainer/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/busket' element={<Busket/>} />
          <Route path='/favorite' element={<Favorited/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='*' element={<Error/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
