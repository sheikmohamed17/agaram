// let userDetails=[{
//     email:"safeeqameen@gmail.com",
//     password:"sheik",
//     name:'sheik'
// },
// {
//     name:'ameen',
//     email:"ameen@gmail.com",
//     password:"ameen"
// }
// ]
// localStorage.setItem('data',JSON.stringify(userDetails))
function register(){
    // document.getElementById('loginpage').style.display="none";
    // document.getElementById('login').style.display="none";
    // document.getElementById('registr').style.display="block"
    let newname=document.getElementById('newname').value;
    let newemail=document.getElementById('newemail').value;
    let paswrd=document.getElementById('paswrds').value;
    // console.log(paswrd)
    if(localStorage.getItem('data')){
        parseddata=JSON.parse(localStorage.getItem('data'))
    }
    else{
        let parseddata=[]
    }
    
    parseddata.push({
        name:newname,
        email:newemail,
        password:paswrd        
    })
    localStorage.setItem('data',JSON.stringify(parseddata))
    alert("register sucess")
}
let getdatas=localStorage.getItem('data')
let parsegetdata=JSON.parse(getdatas)
// console.log(parsegetdata)
function logincheck(){
   

    let mailid=document.getElementById('mail').value;
    let userpassword=document.getElementById('password').value;
    // alert(mailid);
    // alert(userpassword);
//  let b=JSON.parse(localStorage.getItem('data'))
//    console.log(b)
    for(let i=0;i<parsegetdata.length;i++){
        let name=parsegetdata[i].name
        //  console.log(name)
        // console.log(userDetails[i].email,userDetails[i].password)
        if (mailid==parsegetdata[i].email && userpassword==parsegetdata[i].password){
            
            document.getElementById('login').style.display="none"
            document.getElementById('loginpage').style.display="block"  
            document.getElementById('registr').style.display="none"

            
            localStorage.setItem("loggedin",true)
            document.getElementById('Welcome').innerHTML=`welcome ${name}`
        }
        
       
    }
    datatable()
}
function logout(){
    document.getElementById('loginpage').style.display="none";
    document.getElementById('login').style.display="block";
    document.getElementById('registr').style.display="none"
}
function checklogin(){
    if(localStorage.getItem('loogedin')){
        document.getElementById('loginpage').style.display="none";
    document.getElementById('login').style.display="block";
    // document.getElementById('registr').style.display="none"
}
}


function registerpage(){
    document.getElementById('registr').style.display="block";
    document.getElementById('login').style.display="none";
}
function datatable(){
    let tdata=localStorage.getItem('data')
// console.log(tdata)
    let tparsedata=JSON.parse(tdata)
    // console.log(tparsedata)
    let tablecontent='';
    for(let i=0;i<tparsedata.length;i++){
        tablecontent=tablecontent+`<tr>
        <td>${tparsedata[i].name}</td>
        <td>${tparsedata[i].email}</td>
        <td><button onclick="updatedata('${tparsedata[i].email}')">update</button></td>
        <td><button onclick="deletedata('${tparsedata[i].email}')">delete</button></td>
        </tr>`
    }
    document.getElementById('tabledata').innerHTML=tablecontent
}
function deletedata(mail){
    let dataparse=JSON.parse(localStorage.getItem('data'))
    // console.log(dataparse)
    let newdata=[]
    for(let i=0;i<dataparse.length;i++){
        if(dataparse[i].email != mail){
            newdata.push(dataparse[i])
        }
    }
    alert(mail)
    let dataafterdelete=JSON.stringify(newdata)
    localStorage.setItem('data',dataafterdelete)
    datatable()
    console.log('s')
}
// deletedata()
function updatedata(){
    get=window.mail_l
    let parseforupdate=JSON.parse(localStorage.getItem('data'))
    var newname=document.getElementById('newname')
    let newemail=document.getElementById('newemail')
    let newpaswrd=document.getElementById('newpaswrd').value
   for(let i=0;i<parseforupdate.length;i++){
        if(parseforupdate[i].email==get){
        name=newname;
        email=newemail;
        password=newpaswrd;
    }
}
    localStorage.setItem('data',parseforupdate)
    alert('sucess')
    document.getElementById('update').style.display="block"
    document.getElementById('login').style.display="none"
    document.getElementById('loginpage').style.display="none"
    // console.log(newname,newpaswrd,newemail)
}
