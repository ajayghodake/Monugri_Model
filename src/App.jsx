import './App.css'
// import { createBrowserRouter,  } from 'react-router-dom';
// import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {

  return (
    <>
    <Navbar/>
      <Home/>
      <Profile/>
    </>
  )
}

export default App
