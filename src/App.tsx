import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import Footer from './component/Footer';
import IndexHome from './pages/home/Home';
import CustomerService from './pages/CustomerService/CustomerServiceMain'
import SignIn from './pages/Login/Signin'
import SignUp from './pages/Login/Signup'
import IdSearch from './pages/Login/IdSearch'
import PasswordSearch from './pages/Login/PasswordSearch'
import MyPage from "./pages/MyPage/MyPageMain"




function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Routes>
      <Route path='/' element={<IndexHome/>}/>
      <Route path='/CustomerService' element={<CustomerService/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/IdSearch' element={<IdSearch/>}/>
      <Route path='/PasswordSearch' element={<PasswordSearch/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/MyPage' element={<MyPage/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
