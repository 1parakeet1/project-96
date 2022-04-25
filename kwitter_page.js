const firebaseConfig = {
    apiKey: "AIzaSyB0W35JVAKa-WO_ZGiJ-4sSi4uFQIvJKtc",
    authDomain: "kwitterproject-140d8.firebaseapp.com",
    databaseURL: "https://kwitterproject-140d8-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-140d8",
    storageBucket: "kwitterproject-140d8.appspot.com",
    messagingSenderId: "290536992597",
    appId: "1:290536992597:web:edc776187292b7f62049dc",
    measurementId: "G-VT1FNDP7X9"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").innerHTML="";
}