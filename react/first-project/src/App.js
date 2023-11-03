// import logo from './logo.svg';
// import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { useState } from 'react';
import Todolist from './todo';

function App() {
let [startvalue,countfunction]=useState(1);

  return (
    // <div className="App">
    <>
      {/* <header className="App-header"> */}
        {startvalue}
        <button onClick={()=>countfunction(startvalue+1)} >add_one_value</button>
       <Header name="sheik" addata={startvalue} addfivevalue={()=>countfunction(startvalue+5)} />
      {/* </header>
    </div> */}
    <Todolist />
    </>
  );
}

export  {App};
