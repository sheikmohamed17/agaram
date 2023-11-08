
import axios from "axios"

function Apidata()
{
    const getdata=()=>
    {
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then(function(response)
        {
            console.log(response)
        })
    }
    return(
        <>
        <button onClick={()=>{getdata()}}>ADD</button>
        
        
        </>
    )
}
export default Apidata