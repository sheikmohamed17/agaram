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
  console.log("s",auth)
  const login=()=>{
    var name = document.getElementById("name").value;
    let user_detail=document.getElementById("Email").value
    let Password=document.getElementById("password").value
    auth.signInWithEmailAndPassword(user_detail,Password)
    .then((result) => {
      // Signed in
      alert("loggedin successfully")
    })
}
function logqin()
{
    alert('login sucessfull');
    window.location="fbauth_home.html";
}
function register(){
    alert('sucess')
}
function registerpage(){
    window.location='fbauth_reg.html'
}
console.log('hi')