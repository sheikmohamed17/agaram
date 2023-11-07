

function Deletedata(todo_data_value)
{
    
       let filter_data = existdata.filter(
        (single_data)=>single_data!==todo_data_value
       )
       add_list(filter_data)
       
    
}
