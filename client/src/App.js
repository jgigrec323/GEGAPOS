import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import Tables from './components/Tables';
import Reservation from './components/Reservation';
import Accounting from './components/Accounting';
import Settings from './components/Settings'
import Login from './components/Login';
import Registration from './components/Registration';
import MenuItems from './components/MenuItems';
import Orders from './components/Orders';



function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />}></Route>
      <Route path='register' element={<Registration />}></Route>
      <Route path='/' element={<Layout />}>
        <Route path='menu' element={<Menu />}>
          <Route path=':categoryId' element={<MenuItems />}></Route>
        </Route>
        <Route path='orders' element={<Orders />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
        <Route path='tables' element={<Tables />}></Route>
        <Route path='reservation' element={<Reservation />}></Route>
        <Route path='accounting' element={<Accounting />}></Route>
        <Route path='settings' element={<Settings />}></Route>
      </Route>
    </Routes>
  );
}


export default App;
