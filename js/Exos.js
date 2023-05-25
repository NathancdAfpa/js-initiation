//////////////////////// EXERCICE 1 ///////////////////////////////////

// function formatDateHeure() {
//     const maintenant = new Date();

//     const jour = maintenant.getDate().toString().padStart(2, '0');
//     const mois = (maintenant.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0
//     const annee = maintenant.getFullYear().toString().padStart(4, '0');

//     const heure = maintenant.getHours().toString().padStart(2, '0');
//     const minute = maintenant.getMinutes().toString().padStart(2, '0');

//     const dateFormatee = `- ${jour}/${mois}/${annee} - ${heure}h${minute}`;

//     console.log(`${dateFormatee}`);
//   }

//   // Exemple d'utilisation
//   formatDateHeure();




/////////////////////////////// EXERCICE 2 /////////////////////////////////

// function puissanceRecursive(x, n) {
//     if (n === 0) {
//       return 1;
//     } else if (n < 0) {
//       return 1 / puissanceRecursive(x, -n);
//     } else if (n % 2 === 0) {
//       const temp = puissanceRecursive(x, n / 2);
//       return temp * temp;
//     } else {
//       return x * puissanceRecursive(x, n - 1);
//     }
//   }

//   const x = 2;
//   const n = 3;
//   const resultat = puissanceRecursive(x, n);

//   console.log(`${resultat}(${x} * ${x} * ${x})`);




/////////////////////////////// EXERCICE 3 /////////////////////////////////

// function isBissextile(annee) {
//     if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
//       return true; // L'année est bissextile
//     } else {
//       return false; // L'année n'est pas bissextile
//     }
//   }

// console.log(isBissextile(2020));
// console.log(isBissextile(2021));
// console.log(isBissextile(2000));
// console.log(isBissextile(1900));




/////////////////////////////// EXERCICE 4 /////////////////////////////////

// const stringTest = "salut le monde.";
// stringTest.toUpperCase(stringTest);
// console.log(stringTest.toUpperCase());




/////////////////////////////// EXERCICE 5 /////////////////////////////////

// const stringTest = "salut le monde.";
// stringTest.toUpperCase(stringTest);
// stringTest = stringTest.toUpperCase(stringTest); // Erreur a la 3e ligne rien ne s'affiche car il n'y a pas de console et parce que l'on re-déclare la variable stringTest de manière à modifier plutôt qu'à transformer notre chaîne de caractère.




/////////////////////////////// EXERCICE 6 /////////////////////////////////

// function transformString(str) {
//     var result = "";
//     for (var i = 0; i < str.length; i++) {
//         var char = str.charAt(i);
//         var repeatedChars = char.toUpperCase() + char.toLowerCase().repeat(i);
//         result += repeatedChars + "-";
//     }
//     result = result.slice(0, -1);
//     return result;
// }

// console.log(transformString("abcd"));
// console.log(transformString("RqaEzty"));
// console.log(transformString("cwAt"));




/////////////////////////////// EXERCICE 7 /////////////////////////////////

// function countCorrectCharacters(secretWord, playerGuess) {
//     var count = 0;
//     for (var i = 0; i < secretWord.length; i++) {
//         if (secretWord.charAt(i) === playerGuess.charAt(i)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countCorrectCharacters("dog", "car"));
// console.log(countCorrectCharacters("dog", "god"));
// console.log(countCorrectCharacters("dog", "cog"));
// console.log(countCorrectCharacters("dog", "cod"));
// console.log(countCorrectCharacters("dog", "bog"));
// console.log(countCorrectCharacters("dog", "dog"));





/////////////////////////////// EXERCICE 8 /////////////////////////////////

// function orderWords(str) {
//     if (str === "") {
//         return "";
//     }

//     var words = str.split(" ");
//     var result = new Array(words.length);

//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];
//         var position = parseInt(word.match(/\d+/)[0]);
//         result[position - 1] = word;
//     }

//     return result.join(" ");
// }

// console.log(orderWords("is2 Thi1s T4est 3a"));
// console.log(orderWords("ai4me l2e 5les mond3e T1out framboises6"));





/////////////////////////////// EXERCICE 9 /////////////////////////////////

// function findLongestNumber(numbers) {
//     var longestNumber = numbers[0];
  
//     for (var i = 1; i < numbers.length; i++) {
//       if (countDigits(numbers[i]) > countDigits(longestNumber)) {
//         longestNumber = numbers[i];
//       }
//     }
  
//     return longestNumber;
//   }
  
//   function countDigits(number) {
//     return number.toString().length;
//   }

// console.log(findLongestNumber([1, 10, 100]));
// console.log(findLongestNumber([9000, 8, 800]));
// console.log(findLongestNumber([8, 900, 500])); 



/////////////////////////////// EXERCICE 10 /////////////////////////////////

// function filterStrings(arr) {
//     var filteredArr = [];
  
//     for (var i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'number') {
//         filteredArr.push(arr[i]);
//       }
//     }
  
//     return filteredArr;
//   }

// console.log(filterStrings([1, 2, 'a', 'b']));
// console.log(filterStrings([1, 'a', 'b', 0, 15]));
// console.log(filterStrings([1, 2, 'aasf', '3', '124', 123]));





/////////////////////////////// EXERCICE 10 /////////////////////////////////

// function diff(a, b) {
//   var diffArray = [];

//   for (var i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1 && diffArray.indexOf(a[i]) === -1) {
//       diffArray.push(a[i]);
//     }
//   }

//   for (var j = 0; j < b.length; j++) {
//     if (a.indexOf(b[j]) === -1 && diffArray.indexOf(b[j]) === -1) {
//       diffArray.push(b[j]);
//     }
//   }

//   diffArray.sort();

//   return diffArray;
// }

// var a = ["a", "b", "z", "d", "e", "d"];
// var b = ["a", "b", "j", "j"];
// var result = diff(a, b);

// console.log(result);




/////////////////////////////// EXERCICE 11 /////////////////////////////////

// function isVampire(num1, num2) {
//   var product = Math.abs(num1 * num2);
//   var digits = (Math.abs(num1) + "" + Math.abs(num2)).split("");
//   var productDigits = ("" + product).split("");

//   if (digits.length !== productDigits.length) {
//     return false;
//   }

//   if (num1 < 0 && num2 < 0 && product > 0) {
//     return false;
//   }

//   for (var i = 0; i < digits.length; i++) {
//     var index = productDigits.indexOf(digits[i]);

//     if (index === -1) {
//       return true;
//     }

//     productDigits.splice(index, 1);
//   }

//   return productDigits.length === 0;
// }

// // Exemples d'utilisation
// console.log(isVampire(21, 6)); // true
// console.log(isVampire(204, 615)); // true
// console.log(isVampire(30, -51)); // true
// console.log(isVampire(-246, -510)); // false
// console.log(isVampire(2947050, 8469153)); // true




/////////////////////////////// EXERCICE 12 /////////////////////////////////

// Récupérer les éléments du DOM
// var buttonChoice = document.querySelector("#button-choice");
// var textChoice = document.querySelector("#text-choice");
// var dateInput = document.querySelector("[name=dateInput]");
// var radioChoices = document.querySelectorAll("[name=radioChoice]");

// // Fonction pour afficher le jour en toutes lettres
// function afficherJour(date) {
//   var joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
//   var jour = date.getDay();
//   var jourEnLettres = joursSemaine[jour];
//   textChoice.value = jourEnLettres;
// }

// // Fonction pour afficher le mois en toutes lettres
// function afficherMois(date) {
//   var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
//   var moisNum = date.getMonth();
//   var moisEnLettres = mois[moisNum];
//   textChoice.value = moisEnLettres;
// }

// // Fonction pour afficher les jours restants avant la fin de l'année
// function afficherJoursRestants(date) {
//   var finAnnee = new Date(date.getFullYear(), 11, 31);
//   var difference = finAnnee - date;
//   var joursRestants = Math.ceil(difference / (1000 * 60 * 60 * 24));
//   textChoice.value = joursRestants.toString();
// }

// // Fonction pour gérer le clic sur le bouton "Afficher"
// function handleClick() {
//   var selectedOption;
//   for (var i = 0; i < radioChoices.length; i++) {
//     if (radioChoices[i].checked) {
//       selectedOption = radioChoices[i].value;
//       break;
//     }
//   }

//   var selectedDate = new Date(dateInput.value);

//   if (selectedOption === "day") {
//     afficherJour(selectedDate);
//   } else if (selectedOption === "month") {
//     afficherMois(selectedDate);
//   } else if (selectedOption === "remainingDay") {
//     afficherJoursRestants(selectedDate);
//   }
// }

// // Ajouter l'événement de clic sur le bouton "Afficher"
// buttonChoice.addEventListener("click", handleClick);


/////////////////////////////// EXERCICE 12 /////////////////////////////////

{/* <link rel="stylesheet" href="css/check.css">
<script src="js/email-checking-form.js"></script>
email-checking-form.html */}




/////////////////////////////// EXERCICE 13 /////////////////////////////////







