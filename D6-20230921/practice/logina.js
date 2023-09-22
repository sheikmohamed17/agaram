// let userDetails=[
    //     {
    //     email:"ajilj@gmail.com",
    //     password:"12345678",
    //     name:"Ajil"
    // },
    // {
    //     email:"sobith@gmail.com",
    //     password:"987654",
    //     name:"Sobith"
    // },
    // {
    //     email:"ajay@gmail.com",
    //     password:"987654",
    //     name:"ajay"
    // }
    // ]
    
    localStorage.setItem("user",JSON.stringify(userDetails))
function loger(){
    alert("Success")
}
function loginCheck(){
    let login_email=document.getElementById("emails").value;
    let login_password=document.getElementById("passwords").value;
    var details=JSON.parse(localStorage.getItem("user"))
    for (var i=0;i<details.length;i++){
        var e=details[i].email
        var p=details[i].password
        var n=details[i].name
        // console.log(details[i].email,details[i].password,details[i].name)
        if (e==login_email&&p==login_password){
            localStorage.setItem("loggedIn",true)
            document.getElementById("login").style.display="none"
            document.getElementById("top").style.display="block"
            console.log()
            document.getElementById("intro").innerHTML=Welcome `${n}`
        // alert("Success")
        }}
        // let listt=localStorage.getItem("user")
        //     console.log(listt)
        // let o_list=JSON.parse(listt) 
        //     console.log(o_list[1].email)
            // name_1=document.createElement("p")
            // name_2=document.createElement("p")
            // name_3=document.createElement("p")
            // email_1=document.createElement("p")
            // email_2=document.createElement("p")
            // email_3=document.createElement("p")
            // name_1.innerHTML=o_list[0].name
            // name_2.innerHTML=o_list[1].name
            // name_3.innerHTML=o_list[2].name
            // email_1.innerHTML=o_list[0].email
            // email_2.innerHTML=o_list[1].email
            // email_3.innerHTML=o_list[2].email
            // document.getElementById("name1").appendChild(name_1)
            // document.getElementById("name2").appendChild(name_2)
            // document.getElementById("name3").appendChild(name_3)
            // document.getElementById("email1").appendChild(email_1)
            // document.getElementById("email2").appendChild(email_2)
            // document.getElementById("email3").appendChild(email_3)

    

}

function logout(){
    localStorage.removeItem("loggedIn")
    document.getElementById("login").style.display="block"
    document.getElementById("top").style.display="none"
}
function loging(){
    if(localStorage.getItem("loggedIn",true)){
    document.getElementById("login").style.display="none"
    document.getElementById("top").style.display="block"
    // document.getElementById("intro").innerHTML=Welcome ${n}
}}
function register(){
    let name_obj= document.getElementById("name").value;
    let email_obj= document.getElementById("email").value;
    let password_obj= document.getElementById("password").value;
    // let profile={};
    // profile.names=name_obj;
    // profile.emails=email_obj;
    // profile.passwords=password_obj;
    // console.log(profile)
    // localStorage.setItem("new_list",profile)
    if(localStorage.getItem("user")){
        parselocaldata= JSON.parse(localStorage.getItem("user"))
    }
    else{
        let parselocaldata=[]
    }
    
    console.log(parselocaldata)
    parselocaldata.push({
        email: email_obj,
        password:password_obj,
        names: name_obj
    })
    localStorage.setItem("user",JSON.stringify(parselocaldata));
    alert("sucessfully register")
}

    function regpage(){
        document.getElementById("register").style.display="block"
        document.getElementById("login").style.display="none"
        
    }

// let list=["a","b","c"];
function box(){
    let listt=localStorage.getItem("user")
        console.log(listt)
let o_list=JSON.parse(listt) 
       
    let htmldata="";
    for (let i=0;i<o_list.length;i++){
        htmldata=htmldata+`<tr>
        <td>${o_list[i].name}</td>
        <td>${o_list[i].email}</td>
        <td><button onclick="update('${o_list.email}')">update</button></td>
        <td><button onclick="deletes('${o_list[i].email}')">delete</button></td>
        <tr>`
    }
    document.getElementById("list-table").innerHTML=htmldata;
}

function deletes(mail){
    let a=JSON.parse(localStorage.getItem("user"))
    console.log(a)
    let newdata=[]
    for(i=0;i<a.length;i++){
        if (a[i].email != mail){
            newdata.push(a[i])
            console.log(newdata)
        }
    }
    alert(mail)
    let newlist=JSON.stringify(newdata)
    localStorage.setItem("user",newlist)
    box()
}
function update(mail){
    let b=JSON.parse(localStorage.getItem("user"))
    console.log(b)
    newedit=[]
    // alert(mail)
    for (i=0;i<b.length;i++){
        if (b[i].email===mail){
            let pname =prompt(name,`${[i].name}`)
            let pmail =prompt(email,`${b[i].email}`)
            console.log(pname)
            if (pname != b[i].name) {
                document.getElementById(newname+'${i}').innerHTML = pname;
                console.log(pname)
                b.push(pname)
                c=JSON.stringify(b)
                document.setItem("user",c)

            }
            if(pmail != b[i].email) {
                document.getElementById(newemail+'${i}').innerHTML = pmail;
                b.push(email)
                c=JSON.stringify(b)
                document.setItem("user",c)
            }
    }
}
}
