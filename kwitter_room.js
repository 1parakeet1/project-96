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

username = localStorage.getItem("user_name");
document.getElementById("userNamemdisplay").innerHTML = "Welcome "+username+" !";

function addRoom(){
  room_name = document.getElementById("input_rmn").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "roomName"
  });
  window.location="kwitter_page.html";
  localStorage.setItem("room_name", room_name);
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
output = "<div class='room_name' id="+Room_names+" onclick='rediectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML += output;
//End code
});});}
getData();

function rediectToRoomName(value){
  localStorage.setItem("room_name", value);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}