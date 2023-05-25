// Récupérer les éléments du DOM
var emailField = document.getElementById("email-field");
var verifyButton = document.getElementById("verify-button");
var messageContainer = document.getElementById("message-container");

// Fonction pour vérifier l'e-mail
function verifyEmail() {
  var email = emailField.value;

  // Expression régulière pour vérifier si l'e-mail est valide
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    // L'e-mail est valide
    showMessage("Email valide", "success");
  } else {
    // L'e-mail n'est pas valide
    showMessage("Email non valide", "error");
  }
}

// Fonction pour afficher le message dans la zone de message
function showMessage(text, type) {
  // Supprimer les anciens messages
  messageContainer.innerHTML = "";

  // Créer un élément de message avec la classe de style appropriée
  var messageElement = document.createElement("div");
  messageElement.className = "message " + type;
  messageElement.textContent = text;

  // Ajouter le message à la zone de message
  messageContainer.appendChild(messageElement);
}

// Lier la fonction de vérification à l'événement onclick du bouton
verifyButton.onclick = verifyEmail;
