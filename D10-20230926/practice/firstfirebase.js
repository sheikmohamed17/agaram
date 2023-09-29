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
  var dataRef = db.ref("registeredUsers");
  console.log(dataRef)

function register(){
    
    alert('register function called');
    let reg_name=document.getElementById("name").value
    let reg_email=document.getElementById("Email").value
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

    let user_detail=document.getElementById("Email").value
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
    window.location='firstfirebasehome.html'
}
function displaydata(){
        let tdata=''
        for(let i=0;i<all_data.length;i++)
        {
            l_name=all_data[i].name;
            l_mail=all_data[i].email;
            tdata=tdata+`<tr><td>${l_name}</td>
            <td>${l_mail}</td>
            <td> <button onclick="updatepage()">update</button></td>
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
function update()
{

}
function updatepage()
{
    window.location='update.html'
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