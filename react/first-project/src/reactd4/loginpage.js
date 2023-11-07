import { useState } from "react";
import Linkpage from "./linkpage";
import { useNavigate } from "react-router-dom";

function CheckLogin(props)
{
    const navigate=useNavigate();
    let[logindata,loginfunction]=useState({
        email:'safeeqameen@gmail.com',
        password:12345678
    })
    const checklog=()=>
    {
        if(logindata.email=='safeeqameen@gmail.com' && logindata.password==12345678)
        {
            // alert('Sucess')
            props.setIsLogged({staus:true,mail:logindata.email})
            navigate('/todo')
        }
        else{
            props.setIsLogged(false)
            
        }
    }
    return(
        
        <>
    {/* {JSON.stringify(logindata)} */}
     Email<input type="mail"defaultValue={logindata.email} onKeyUp={(e)=>loginfunction({
        ...logindata,
        email:e.target.value})}/>
     PassWord<input type="password" defaultValue={logindata.password} onKeyUp={(e)=>loginfunction({...logindata,password:e.target.value})}/>

  <button onClick={()=>checklog()} >Log</button>
  <Linkpage />
        </>
    )
}
export default CheckLogin;