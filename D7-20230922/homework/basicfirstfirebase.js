
const firebaseConfig = {
    apiKey: "AIzaSyBkQ_WG5MX5SIReJkwOWGY8ntzMKYfusc8",
    authDomain: "firstproject-25f1f.firebaseapp.com",
    databaseURL: "https://firstproject-25f1f-default-rtdb.firebaseio.com",
    projectId: "firstproject-25f1f",
    storageBucket: "firstproject-25f1f.appspot.com",
    messagingSenderId: "294241839271",
    appId: "1:294241839271:web:6dcb2840264592d70a9382"
  };

//initialize database
firebase.initializeApp(firebaseConfig);

var contactformdb=firebase.database().ref('contactform');
document.getElementById('contactform').addEventListener('submit',submitform)
function submitform(e)
{
    e.preventDefault();

    var name=getelementval('name');
    var mailid=getelementval('mailid');
    var msg=getelementval('content');
    savemsg(name,mailid,msg)
}
const savemsg=(name,mailid,content) => {
    var newdata=contactformdb.push();
    newdata.set({
        name:name,
        emailid:mailid,
        msgcontent:msg
    });
};

const getelementval=(id)=>{
    return document.getElementById(id).value;
};
function logged(){
    alert('sucess')
}