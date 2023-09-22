let userDetails=[
    {
    email:"shei@gmail.com",
    password:"123456",
    name:"sheik"
},
{
    email:"ameeen@gmail.com",
    password:"987654",
    name:"ameen"
}
]
localStorage.setItem("user",JSON.stringify(userDetails))
function loger(){
    alert("Success")
}
function loginCheck(){
    let login_email=document.getElementById("email").value;
    let login_password=document.getElementById("password").value;
    var details=JSON.parse(localStorage.getItem("user"))
    for (var i=0;i<userDetails.length;i++)
    {
    console.log(userDetails[i].email,userDetails[i].password,userDetails[i].name)
    if (userDetails[i].email==login_email && userDetails[i].password==login_password)
    alert("Success")
    }
}
