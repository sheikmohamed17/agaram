import { useState,useEffect } from "react"
import axios from "axios"

function Apidata()
{
    let [apidata,changedata]=useState('')
    const getdata=()=>
    {
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts ',
            responseType: 'stream',
            // data:{
            //     request : 'getAllMembers'
            // }
        }).then(function(response)
        {
            console.log('response',response)        
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }
   useEffect(()=>{alert(1)},[apidata])
    
    
      
    
    return(
        <>
        {/* <button onClick={()=>{getdata()}}>ADD</button> */}
        {apidata}
     <input type="text" onKeyUp={(e)=>changedata(e.target.value)} />
        </>
    )
}
export default Apidata