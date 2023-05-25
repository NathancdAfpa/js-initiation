// Fichier à compléter

// écriture d'une fonction "isBissextile"
// Demande de la valeur d'une année avec prompt
// Affichage du résultat en console 

function isBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
      return true; // L'année est bissextile
    } else {
      return false; // L'année n'est pas bissextile
    }
  }

console.log(isBissextile(2020));
console.log(isBissextile(2021));
console.log(isBissextile(2000));
console.log(isBissextile(1900));