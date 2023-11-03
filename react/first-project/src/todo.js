import { useState } from "react"
function Todolist()
{
    let [newdata,add_data]=useState('');
    let [tododata,add_list]=useState(['files','headset','charger'])
    const delete_data =(todo_data_value) =>
    {
       let filter_data = tododata.filter(
        (single_data)=>single_data!=todo_data_value
       )
       add_list(filter_data)
       
    }
    return(
       
        <>
        <table border={2}>
            <tr>
            <th>S.No</th>
            <th>Order</th>
            </tr>
            
            {
                 tododata.map(   (data,index)=>(
                     <tr>
                        <td>{index}</td>
                        <td>{data}</td>
                        <td><button type="button" onClick={()=>delete_data(data)}>Del</button></td>
                    </tr>
         
                 )
         
         
                 )
            }
          
        </table>
        {newdata}
        <input type="text" id="newentry" onKeyUp={(e)=>add_data(e.target.value)}/>
        <button onClick={()=>add_list([...tododata,newdata])}>ADD</button>
        </>
       



    )
        
    
}
export default Todolist