const firebaseConfig = {
    apiKey: "AIzaSyDcxRheDy1LJCMrC_TPt5QTdomVBnRIRVU",
    authDomain: "musiverse-e89c0.firebaseapp.com",
    projectId: "musiverse-e89c0",
    storageBucket: "musiverse-e89c0.appspot.com",
    messagingSenderId: "750244530290",
    appId: "1:750244530290:web:4c19979dd17d232eb39aeb"
}

  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

let currentUser
document.addEventListener("DOMContentLoaded", function () {
  //? Obeserva se há um usuário e mudanças na autenticação (login, logout)
  firebase.auth().onAuthStateChanged((usuario) => {
      if(usuario) {
          currentUser = usuario
          console.log(currentUser);
      }
    })
})

// Função para gerar um UID único
function generateUniqueUid() {
  return db.collection('MusicasPostadas').doc().id
}