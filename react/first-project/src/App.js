// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { useState } from 'react';
import Apidata from './reactd4/apidata';
import Todolist from './todo';
import Linkpage from './reactd4/linkpage';
import Userlist from './reactd3/usertable';
import CheckLogin from './reactd4/loginpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  let[isLogged,setIsLogged]=useState({status:false,mail:''})
const router=createBrowserRouter(
  [
    {
      path:'/todo',
      element:<Todolist isLogged={isLogged} setIsLogged={setIsLogged} />
    },
    {
      path:'/link',
      element:<Linkpage />
    },
    {
      path:'/userlist',
      element:<Userlist />
    },
    {
      path:'/',
      element:<CheckLogin isLogged={isLogged} setIsLogged={setIsLogged} />
    },
    {
      path:'/apidata',
      element:<Apidata />
    }
    
  ]
)

  return (
    // <div className="App">
    <>
      {/* <header className="App-header"> */}
        
   
  
    {/* <Todolist /> */}
    <RouterProvider router={router} />
    {/* <Userlist /> */}
    </>
  );
}

export  {App};
