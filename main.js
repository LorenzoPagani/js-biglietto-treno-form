
let button = document.getElementById('formBtn');
let ticketOutput = document.getElementById("ticketOutput");
let outputName = document.getElementById("outputName");
let ageOffer = document.getElementById("ageOffer");

button.addEventListener('click', function () {
  let userName = document.getElementById('passengerName').value;
  let distance = document.getElementById('distance').value;
  let ageGroup = document.getElementById('ageGroup').value;

  console.log("Nome:", userName);
  console.log("Distanza:", distance);
  console.log("Età:", ageGroup);

  outputName.innerHTML = userName;

  let priceKm = distance * 0.21;
  let finalPrice = priceKm;
  console.log("prezzo di base " + finalPrice);


  if (ageGroup == "minorenne") {
    finalPrice -= finalPrice * 0.20;
    ageOffer.innerHTML = "Biglietto Young";
  }
  else if (ageGroup == "maggiorenne") {
    finalPrice = finalPrice;
  }

  else if (ageGroup == "over_65") {
    finalPrice -= finalPrice * 0.40;
    ageOffer.innerHTML = "Biglietto Senior";
  }

  ticketOutput.innerHTML = finalPrice.toFixed(2) + "€"

  console.log("prezzo finale", finalPrice.toFixed(2));

});





