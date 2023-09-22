let input=document.getElementById('text')
let add=document.getElementById('add')
let todo=document.getElementById('todoList')
 let todos=[];
 window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos'))
    todos.forEach(element => {
        
    });
 }