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
function reg()
    {
    let parseddata=JSON.parse(localStorage.getItem('data'))
    let newname=document.getElementById('newname').value;
    let newemail=document.getElementById('newemail').value;
    let paswrd=document.getElementById('paswrds').value;
    if(localStorage.getItem('data'))
    {
        parseddata=JSON.parse(localStorage.getItem('data'))
    }
    else{
        parseddata=[]
    }
    
    parseddata.push(
        {
        name:newname,
        email:newemail,
        password:paswrd        
        }
    )
    localStorage.setItem('data',JSON.stringify(parseddata))
    alert("register sucess")
}


let getdatas=localStorage.getItem('data')
let parsegetdata=JSON.parse(getdatas)


function logincheck()
    {
    let mailid=document.getElementById('mail').value;
    let userpassword=document.getElementById('password').value;
    // localStorage.setItem("loggedin",true)
    for(let i=0;i<parsegetdata.length;i++)
        {
        
            if (mailid==parsegetdata[i].email && userpassword==parsegetdata[i].password)
                {
                    console.log('hi')
                let name=parsegetdata[i].name  
                localStorage.setItem("loggedin",true)
                localStorage.setItem('loged_user_name',name)
            document.getElementById('Welcome').innerHTML=`welcome ${name}`
                
                window.location="home.html" 
                break
            }   
        }
    }


function logout()
    {
    localStorage.removeItem('loggedin')
    window.location="login.html"
    // datatable()
    }


function checklogin()
    {
    if(localStorage.getItem('loogedin'))
        {
        document.getElementById('loginpage').style.display="none";
        document.getElementById('login').style.display="block";
        }
    }


function registerpage()
    {
    window.location="register.html"
    }


function datatable()
    {

    // document.getElementById('Welcome').innerHTML=`welcome ${}`
    let tdata=localStorage.getItem('data')
    let tparsedata=JSON.parse(tdata)
    let tablecontent='';
    for(let i=0;i<tparsedata.length;i++)
        {
        tablecontent=tablecontent+`<tr>
        <td>${tparsedata[i].name}</td>
        <td>${tparsedata[i].email}</td>
        <td><button onclick="updatedata('${tparsedata[i].email}')">update</button></td>
        <td><button onclick="deletedata('${tparsedata[i].email}')">delete</button></td>
        </tr>`
    }
    document.getElementById('tabledata').innerHTML=tablecontent;
}


function deletedata(mail)   
    {
    let dataparse=JSON.parse(localStorage.getItem('data'))
    let newdata=[]
    for(let i=0;i<dataparse.length;i++)
        {
            if(dataparse[i].email != mail)
                {
                newdata.push(dataparse[i])
            }
        }
    // alert(mail)
    let dataafterdelete=JSON.stringify(newdata)
    localStorage.setItem('data',dataafterdelete)
    
}
// datatable()
 deletedata()

function updatedata()  
    {
    get=window.mail_l
    let parseforupdate=JSON.parse(localStorage.getItem('data'))
    var newname=document.getElementById('newname')
    let newemail=document.getElementById('newemail')
    let newpaswrd=document.getElementById('newpaswrd').value
    for(let i=0;i<parseforupdate.length;i++)
    {
        if(parseforupdate[i].email==get)
        {
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
}


// function logintrue()
// {
//     let mail=document.getElementById('mail').value
//     let paswrd=document.getElementById('password').value
//     for(let i=0;i<data.length;i++)
//     {
//         if(mail!=data[i].email && paswrd!=data[i].password)
//         {
//             {
//                 if(loggedin!=true)
//                 {
//                     window.location="login.html"
//                  }
//              }
//         }   
//     }
// }
// datatable()
function secure()
{
    console.log('h')
    if(!localStorage.getItem('loggedin'))
    {
        window.location='login.html'
    }
    else{
        datatable()
    }
}