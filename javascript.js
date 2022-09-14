// test per te automatizuar pjesen e kapitalizimit te emrit dhe mbiemrit

function capitalize(a) {

  var firstLetterWord = a.slice(0,1);
  var restOfWord = a.slice(1, a.lenght); 

  var correctOutput = firstLetterWord.toUpperCase() + restOfWord.toLowerCase();
  return correctOutput;    
}


function myFunction(){

  var empty = document.getElementById("name").value;

    //emri dhe mbiemri

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    //capitalize

    correctName = capitalize(name);
    correctSurname = capitalize(surname);


    //ndryshimi i DOM

    document.getElementById("nameOutput").innerHTML = correctName;
    document.getElementById("surnameOutput").innerHTML = correctSurname;
    document.getElementById("fullNameOutput").innerHTML = correctSurname + " " + correctName;
    document.getElementById("logonNameOutput").innerHTML = name.toLocaleLowerCase() + "." + surname.toLocaleLowerCase();
    document.getElementById("emailOutput").innerHTML = name.toLocaleLowerCase() + "." + surname.toLocaleLowerCase() + "@sisal.al";
    document.getElementById("utenteExchangeOutput").innerHTML = "Utente Exchange " + correctSurname + " " + correctName;


     // IF ANPE

     if (document.getElementById("contract-type").checked){

      document.getElementById("nameOutput").innerHTML = correctName + " EXT";
      document.getElementById("fullNameOutput").innerHTML = correctSurname + " " + correctName + " EXT";
      document.getElementById("emailOutput").innerHTML = name.toLocaleLowerCase() + "." + surname.toLocaleLowerCase() + ".ext@sisal.al";
      document.getElementById("utenteExchangeOutput").innerHTML = "Utente Exchange " + correctSurname + " " + correctName + " EXT";
     }

}



//copy

function copyFunction(idToCopy) {
  var copyText = document.getElementById(idToCopy);
  navigator.clipboard.writeText(copyText.innerHTML);
}
