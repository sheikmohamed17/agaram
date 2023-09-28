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

  var db = firebase.database();
        console.log(db)
  var dataRef = db.ref("registeredUsers");
  console.log(dataRef)

function register(){
    
    alert('register function called');
    let reg_name=document.getElementById("name").value
    let reg_email=document.getElementById("Email").value
    let reg_password=document.getElementById("password").value

    let reg_data = {
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
    console.log('k')

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
                        window.location='home.html';
                        break;
                    }
                    // else{
                    //     alert("Please Register First");     
                    // }
                }
            }
        })
}
function registerpage(){
    window.location='firstfirebasehome.html'
}