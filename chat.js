const firebaseConfig = {
    apiKey: "AIzaSyDrYfsLAImtmPdoz0oqa9o84OLx04S1SsM",
    authDomain: "projeto101-hf.firebaseapp.com",
    databaseURL: "https://projeto101-hf-default-rtdb.firebaseio.com",
    projectId: "projeto101-hf",
    storageBucket: "projeto101-hf.appspot.com",
    messagingSenderId: "726318720133",
    appId: "1:726318720133:web:0bd28918278a6576edf5ec"
};

    const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
}



