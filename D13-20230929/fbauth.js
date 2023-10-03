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
        console.log('database',db)
  var dataRef = db.ref("registeredUsers");
  var auth=firebase.auth()
  console.log("auth",auth)
function registerpage(){
    window.location='fbauth_reg.html'
}
 console.log('hi')

                   
 function submitForm(){
   var user_name=document.getElementById('name').value;
   var user_email=document.getElementById('email').value;
   var user_password=document.getElementById('password').value;
   auth.createUserWithEmailAndPassword(user_name,user_email,user_password).then((result)=>{
    alert("register sucess")
    console.log(result)
   })
   .catch((error)=>{
    console.log(error.code)
   })
 }
//   }

function loginForm(){
  let user_email=document.getElementById('email').value;
  let user_password=document.getElementById('password').value;
  auth.signInWithEmailAndPassword(user_email,user_password).then((result) =>{
    alert("login successfully")
    })
    .catch((error)=> {
      console.log(error);
    });
}
