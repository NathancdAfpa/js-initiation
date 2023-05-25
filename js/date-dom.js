// Récupérer les éléments du DOM
var buttonChoice = document.querySelector("#button-choice");
var textChoice = document.querySelector("#text-choice");
var dateInput = document.querySelector("[name=dateInput]");
var radioChoices = document.querySelectorAll("[name=radioChoice]");

// Fonction pour afficher le jour en toutes lettres
function afficherJour(date) {
  var joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  var jour = date.getDay();
  var jourEnLettres = joursSemaine[jour];
  textChoice.value = jourEnLettres;
}

// Fonction pour afficher le mois en toutes lettres
function afficherMois(date) {
  var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  var moisNum = date.getMonth();
  var moisEnLettres = mois[moisNum];
  textChoice.value = moisEnLettres;
}

// Fonction pour afficher les jours restants avant la fin de l'année
function afficherJoursRestants(date) {
  var finAnnee = new Date(date.getFullYear(), 11, 31);
  var difference = finAnnee - date;
  var joursRestants = Math.ceil(difference / (1000 * 60 * 60 * 24));
  textChoice.value = joursRestants.toString();
}

// Fonction pour gérer le clic sur le bouton "Afficher"
function handleClick() {
  var selectedOption;
  for (var i = 0; i < radioChoices.length; i++) {
    if (radioChoices[i].checked) {
      selectedOption = radioChoices[i].value;
      break;
    }
  }

  var selectedDate = new Date(dateInput.value);

  if (selectedOption === "day") {
    afficherJour(selectedDate);
  } else if (selectedOption === "month") {
    afficherMois(selectedDate);
  } else if (selectedOption === "remainingDay") {
    afficherJoursRestants(selectedDate);
  }
}

// Ajouter l'événement de clic sur le bouton "Afficher"
buttonChoice.addEventListener("click", handleClick);
