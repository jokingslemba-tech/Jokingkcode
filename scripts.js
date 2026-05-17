/* Reset et style global */
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    box-sizing: border-box;
}

/* Conteneur au centre de l'écran */
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 360px; /* Largeur parfaite comme sur la photo */
    margin: 0 auto;
    padding: 50px 20px 0 20px;
    box-sizing: border-box;
}

/* Le rond bleu Facebook */
.fb-logo-container {
    margin-bottom: 40px;
}

.fb-circle {
    width: 60px;
    height: 60px;
    background-color: #0866FF;
    border-radius: 50%;
    color: white;
    font-size: 70px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 18px;
    box-sizing: border-box;
}

/* Formulaire en colonne */
form {
    display: flex;
    flex-direction: column;
    width: 100%;
}

/* Cases de saisie ultra-arrondies et blanches */
.login-input {
    width: 100%;
    height: 55px;
    margin-bottom: 12px;
    padding: 0 16px;
    border: 1px solid #ced4da;
    border-radius: 16px; /* Très arrondi comme sur l'image */
    background-color: #ffffff;
    font-size: 16px;
    color: #1c1e21;
    box-sizing: border-box;
    outline: none;
}

.login-input::placeholder {
    color: #8d949e;
}

/* Conteneur de la case mot de passe */
.password-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
}

/* L'icône de l'œil placée à droite à l'intérieur */
.toggle-password {
    position: absolute;
    right: 16px;
    top: 35%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #8d949e;
    user-select: none; /* Empêche de sélectionner le texte de l'icône */
}

/* Ajustement pour que le texte tapé ne passe pas derrière l'œil */
.password-container .login-input {
    padding-right: 50px; 
    margin-bottom: 12px;
}

.login-input:focus {
    border-color: #0866FF;
}

/* Bouton bleu "Se connecter" */
.login-btn {
    width: 100%;
    height: 50px;
    background-color: #0866FF;
    color: white;
    border: none;
    border-radius: 25px; /* Totalement arrondi sur les côtés */
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 12px;
    box-sizing: border-box;
}

/* Lien "Mot de passe oublié ?" */
.forgot-password {
    text-decoration: none;
    color: #1c1e21;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 45px;
}

/* Bouton blanc "Créer un nouveau compte" */
.create-account-btn {
    width: 100%;
    height: 48px;
    background-color: #ffffff;
    color: #0866FF;
    border: 1px solid #0866FF;
    border-radius: 24px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-sizing: border-box;
}

/* Pied de page Meta */
.meta-footer {
    width: 100%;
    text-align: center;
    padding-bottom: 25px;
}

.meta-icon {
    color: #0866FF; /* Le logo infini en bleu */
    font-size: 18px;
    font-weight: bold;
    vertical-align: middle;
}

.meta-text {
    font-size: 15px;
    color: #4b4f56;
    font-weight: 600;
    vertical-align: middle;
    margin-left: 2px;
}
