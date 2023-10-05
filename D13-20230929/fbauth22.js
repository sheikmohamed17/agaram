const firebaseConfig = {
    apiKey: "AIzaSyBkQ_WG5MX5SIReJkwOWGY8ntzMKYfusc8",
    authDomain: "firstproject-25f1f.firebaseapp.com",
    databaseURL: "https://firstproject-25f1f-default-rtdb.firebaseio.com",
    projectId: "firstproject-25f1f",
    storageBucket: "firstproject-25f1f.appspot.com",
    messagingSenderId: "294241839271",
    appId: "1:294241839271:web:6dcb2840264592d70a9382"
  };

  firebase.initializeApp(firebaseConfig);

  let all_data=[];
  var db = firebase.database();
        console.log(db)
        var auth=firebase.auth()
  console.log("auth",auth)
  var dataRef = db.ref("registeredUsers");
  console.log(dataRef)

function register(){
    
    alert('register function called');
    let reg_name=document.getElementById("name").value
    let reg_email=document.getElementById("email").value
    let reg_password=document.getElementById("password").value

        reg_data = {
            name : reg_name,
            email : reg_email,
            password : reg_password,
    }

    dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            console.log(data);
            if(data){
                data.push(reg_data);
                db.ref("registeredUsers").set(data);
            }
            else{
                db.ref(`registeredUsers/${0}`).set(reg_data);
            }
        })
}

function login(){

    let user_detail=document.getElementById("email").value
    let Password=document.getElementById("password").value
        dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            console.log(data);
            if(data){
                for(i=0;i<data.length;i++){

                    if ((data[i].email==user_detail) && (data[i].password==Password))
                    {
                        alert("login successfully")
                        localStorage.setItem("loggedin",true)
                        localStorage.setItem("logname",data[i].name)
                        window.location="home.html";
                        break;
                    }
                    // else{
                    //     alert("Please Register First");                

                }
                    
            }
        })
}
function registerpage(){
    window.location='fbauth_reg.html';
}
function displaydata(){
        let tdata=''
        for(let i=0;i<all_data.length;i++)
        {
            l_name=all_data[i].name;
            l_mail=all_data[i].email;
            tdata=tdata+`<tr><td id="newname+'${i}'">${l_name}</td>
            <td id="newemail+'${i}'">${l_mail}</td>
            <td> <button onclick="updatepage('${l_mail}')">update</button></td>
            <td> <button onclick="deleted('${l_mail}')">Delete</td></tr>`
        }
        document.getElementById('table').innerHTML=tdata;    
    }
function getdata()
{
    dataRef.once('value').then(function(alldata)
    {
        console.log('datas',alldata.val())
        all_data=alldata.val();
        console.log('all_data',all_data)
        displaydata()
    })
}
function updatepage(mailid)
{
    dataRef.once('value').then(function(alldata){
        let up=alldata.val();
        console.log(up)
        for(let i=0;i<up.length;i++){
            if(up[i].email==mailid){
                let n_name=prompt('name',`${up[i].name}`)
                let n_mail=prompt('email',`${up[i].email}`)
                console.log(n_name,n_mail)
                if(n_name!=null){
                    document.getElementById(`newname+'${i}'`).innerHTML=n_name;
                }
                if (n_mail!= null) {
                    document.getElementById(`newemail+'${i}'`).innerHTML =n_mail;
                    console.log(n_mail)
                } console.log(up[i].password)
                up[i] = ({
                    email: n_mail,
                    password: up[i].password,
                    name:n_mail
                })
            }
        }
        db.ref("registeredUsers").set(up)
        console.log(up)
    })
}
function getItem() {
    dataRef.once('value')
        .then(function (response) {
            all_data= response.val();
            displaydata()
        }
        )
}
function deleted(mail)
{
    alert(mail)
    let data=[]
    for(let i=0;i<all_data.length;i++){
        if(all_data[i].email!=mail)
        {
            data.push(all_data[i])
        }
        db.ref("registeredUsers").set(data)
        getdata()
    }
}
getdata()

function submitForm(){
    var user_name=document.getElementById('name').value;
    var user_email=document.getElementById('email').value;
    var user_password=document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(user_email,user_password).then((result)=>{
     alert("register sucess")
     register()
     console.log(result)
    })
  }


  function loginForm(){
    let user_email=document.getElementById('email').value;
    let user_password=document.getElementById('password').value;
    auth.signInWithEmailAndPassword(user_email,user_password).then((result) =>{
      alert("login successfully")
      window.location="fbauth_home.html";
      login()
      })
      .catch((error)=> {
        console.log(error);
      });
  }
  