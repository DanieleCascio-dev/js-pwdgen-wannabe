//Raccolta dati

//Chiedo nome
const username = prompt("Benvenuto utente! Qual'è il tuo nome?");
console.log(username, typeof username);
//Chiedo cognome
const secondname = prompt(
  "Ottimo! ora inserisci il tuo cognome per proseguire"
);
console.log(secondname, typeof secondname);
//Chiedo colore preferito
const favColor = prompt(
  "Adesso inserisci il tuo colore preferito e otterrai una password sicurissima!"
);
console.log(favColor, typeof favColor);

//Logica del programma

const password = `${username}${secondname}${favColor}21`;
console.log(password, typeof password);

//Output
document.getElementById("password").innerHTML = password;
