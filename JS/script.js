// Cominciamo
var arr = ["Hutz", "Burns", "Riviera", "Gamble", "Simpson"];

// prendo input utente
  btn.addEventListener("click" ,function() {
    document.getElementById("lista").innerHTML = "";


// inizio ciclo infinito!
while (true) {

  var lname = document.getElementById("lname").value;

// Se la stringa è vuota esco dal ciclo
  if (lname == "") {
    alert("Lname non inserito");
    break;
  }
  // Converto a Maiusc la prima lettera!
  lname = lname[0].toLocaleUpperCase() + lname.slice(1);

  var exist = false;
  for (var i = 0; i < arr.length; i++) {
    if (lname == arr[i]) {
      founded = true;
    }
  }

// Se il valore è già presente esco
  if (founded == true) {
      alert("Nome già presente! a Indice " + arr.indexOf(lname));
      break;
  }
  arr.push(lname);
  break;

  }
// Al di fuori del ciclo while stampo sempre il contenuto dell'array
  var sort = arr.sort();


  for (var i = 0; i < arr.length; i++) {
      document.getElementById("lista").innerHTML += "<li>" + arr[i] + "</li>";
}

    document.getElementById("sorted2").innerHTML = "<br>" + lname + " now in HUMAN position: " + (arr.indexOf(lname) +1);
    document.getElementById("sorted2").innerHTML += "<br>" + lname + " now in INDEX position: " + arr.indexOf(lname);


    // ALT sol
    var founded = false;
    for (var i = 0; i < arr.length; i++) {
      if (lname == arr[i]) {
        founded = true;
      }
    }

    if (founded == true) {
        console.log(lname + " now in position " + arr.indexOf(lname));
    }
    else if (founded == false) {
      console.log("No!");
    }
  });
