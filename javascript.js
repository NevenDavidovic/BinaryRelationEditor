const skupA = ["a", "b", "c", "d", "e"];
const lengthSkupA = parseInt(skupA.length);

// funkcija refleksivnost
function refleksivnost(lengthSkupA, checkedValues) {
  const lengthPairs = checkedValues.length;
  let boolRefleksivnost = true;
  let counter = 0;
  for (let i = 0; i < lengthPairs; i++) {
    let j = 0;
    if (checkedValues[i][j] == checkedValues[i][j + 1]) {
      counter++;
    }
  }

  if (counter == lengthSkupA && boolRefleksivnost) return boolRefleksivnost;
  else return false;
}

// funkcija antirefleksivnosti

function antirefleksivnost(lengthSkupA, checkedValues) {
  const lengthPairs = checkedValues.length;
  if (lengthPairs == 1 && checkedValues[0] != checkedValues[1]) return true;
  for (let i = 0; i < lengthPairs; i++) {
    if (checkedValues[i][0] == checkedValues[i][1]) return false;
    j = 0;
    for (let it = 0; it < lengthPairs; it++) {
      if (checkedValues[i][j] == checkedValues[it][j + 1]) {
        return true;
      }
    }
  }
  return false;
}

// funkcija antisimetričnosti

function antisimetricnost(lengthSkupA, checkedValues) {
  const lengthPairs = checkedValues.length;
  for (let i = 0; i < lengthPairs; i++) {
    if (checkedValues[i][0] == checkedValues[i][1]) {
      continue;
    }
    for (let j = 0; j < lengthPairs; j++) {
      // increment j here
      if (
        checkedValues[i][0] == checkedValues[j][1] &&
        checkedValues[i][1] == checkedValues[j][0]
      ) {
        return false;
      }
    }
  }
  return true;
}

// funkcija simetričnosti

function simetricnost(lengthSkupA, checkedValues) {
  const lenghtPairs = checkedValues.length;
  let counter = 0;
  for (let i = 0; i < lenghtPairs; i++) {
    if (checkedValues[i][0] == checkedValues[i][1]) {
      counter++;
      continue;
    } else {
      for (let j = 0; j < lenghtPairs; j++) {
        if (
          checkedValues[i][0] == checkedValues[j][1] &&
          checkedValues[i][1] == checkedValues[j][0]
        ) {
          counter++;
        }
      }
    }
  }
  if (counter == lenghtPairs) return true;
  else return false;
}

// funkcija transitivnosti

function tranzitivnost(lengthSkupA, checkedValues) {
  const lenghtPairs = checkedValues.length;
  if (lenghtPairs == 1) return true;
  for (let i = 0; i < lenghtPairs; i++) {
    for (let j = 0; j < lenghtPairs; j++) {
      if (checkedValues[i][1] == checkedValues[j][0]) {
        for (let k = 0; k < lenghtPairs; k++) {
          if (
            checkedValues[i][0] == checkedValues[k][0] &&
            checkedValues[j][1] == checkedValues[k][1]
          ) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

const buttonCalculate = document.querySelector(".Calculate");

buttonCalculate.addEventListener("click", function getCheckedValues() {
  const checkboxes = document.querySelectorAll(".checkbox");
  const checkedValues = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedValues.push(checkboxes[i].value);
    }
  }
  const lenghtPairs = parseInt(checkedValues.length);
  console.log(lenghtPairs);

  console.log(checkedValues);
  // Funkcija koja određuje refleksivnost
  console.log("Reflesivnost");
  const boolRefleksivnostt = refleksivnost(lengthSkupA, checkedValues);
  console.log(boolRefleksivnostt);
  //Funkcija koja određuje antirefleksivnost
  console.log("Antirefleksivnost");
  const boolAntirefleksivnost = antirefleksivnost(lengthSkupA, checkedValues);
  console.log(boolAntirefleksivnost);
  // Funkcija koja određuje antisimetričnost
  console.log("Antisimetričnost");
  const boolAntisimetricnost = antisimetricnost(lengthSkupA, checkedValues);
  console.log(boolAntisimetricnost);
  // Funkcija koja određuje simetričnost
  console.log("Simetričnost");
  const boolSimetricnost = simetricnost(lengthSkupA, checkedValues);
  console.log(boolSimetricnost);
  //Funkcija koja određuje tranzitivnost
  console.log("Tranzitivnost");
  const boolTranzitivnost = tranzitivnost(lengthSkupA, checkedValues);
  console.log(boolTranzitivnost);

  // Displaying at the frontend
  let resRefleksivna = document.querySelector(".refleksivna");
  let resAntirefleksivna = document.querySelector(".antirefleksivna");
  let resSimetricna = document.querySelector(".simetricna");
  let resAntisimetricna = document.querySelector(".antisimetricna");
  let resTranzitivna = document.querySelector(".tranzitivna");
  let resAsimetricna = document.querySelector(".asimetricna");

  let refleksivnaExp = document.querySelector(".refleksivnaExp");
  let antirefleksivnaExp = document.querySelector(".antirefleksivnaExp");
  let simetricnaExp = document.querySelector(".simetricnaExp");
  let antisimetricnaExp = document.querySelector(".antisimetricnaExp");
  let tranzitivnaExp = document.querySelector(".tranzitivnaExp");
  let asimetricnaExp = document.querySelector(".asimetricnaExp");
  let zakljucakExp = document.querySelector(".zakljucakExp");

  const messageDiv = document.getElementById("message");
  const messageExp = document.querySelector(".Explanation");
  if (checkedValues.length < 1) {
    messageExp.style.display = "none";
    messageDiv.innerHTML = "No pairs are being inserted.";
    messageDiv.style.display = "block";
    const results = document.querySelectorAll(".res");
    results.forEach((result) => (result.innerHTML = ""));
  } else if (checkedValues.length > 0) {
    // Hide message when condition is not satisfied
    messageDiv.style.display = "none";
    messageExp.style.display = "block";
    // Ispitivanje refleksivnosti
    if (boolRefleksivnostt) {
      resRefleksivna.innerHTML = "TRUE";
      refleksivnaExp.innerHTML =
        "Relacija je refleksivna jer za ∀ x ∈ A vrijedi da je (xRx).Ovo znači da je relacija refleksivna jer je svaki element skupa u odnosu sam sa sobom.";
    } else {
      resRefleksivna.innerHTML = "FALSE ";
      refleksivnaExp.innerHTML =
        "Relacija nije refleksivna jer za ∀ x ∈ A ne vrijedi da je (xRx)";
    }
    // ispitivanje antirefleksivnosti
    if (boolAntirefleksivnost) {
      resAntirefleksivna.innerHTML = "TRUE";
      antirefleksivnaExp.innerHTML =
        "Binarna je relacija antirefleksivna jer za ∀ x ∈ A vrijedi da ~(xRx). To znači da niti jedan element nekog zajedničkog skupa nije u u odnosu sam sa sobom.";
    } else {
      resAntirefleksivna.innerHTML = "FALSE";
      antirefleksivnaExp.innerHTML =
        "Binarna nije relacija antirefleksivna jer za postoji par(xRx), tj par koji je u odnosu sam sa sobom.";
    }
    // ispitivanje antisimetričnosti
    if (boolAntisimetricnost) {
      resAntisimetricna.innerHTML = "TRUE";
      antisimetricnaExp.innerHTML =
        "Binarna je relacija antisimetrična jer za svaki (x,y) ∈ A × A, (x,y) ∈ ρ ∧ (y,x) ∈ ρ ⇒ x = y. To znači da ako za svaki uređeni par relacije (x,y) postoji i (y,x), tada mora vrijediti x = y.";
    } else {
      resAntisimetricna.innerHTML = "FALSE";
      antisimetricnaExp.innerHTML =
        "Binarna relacija antisimetrična jer za svaki (x,y) ∈ A × A, (x,y) ∈ ρ ∧ (y,x) ∈ ρ ⇒ x = y.";
    }
    // ispitivanje tranzitivnosti
    if (boolTranzitivnost) {
      resTranzitivna.innerHTML = "TRUE";
      tranzitivnaExp.innerHTML =
        "Binarna relacija je tranzitivna ako za sve (x,y) ∈ ρ ∧ (y,z) ∈ ρ ⇒ (x,z) ∈ ρ.";
    } else {
      resTranzitivna = "FALSE";
      tranzitivnaExp.innerHTML = "Binarna relacija nije tranzitivna";
    }

    // ispitivanje simetričnosti
    if (boolSimetricnost) {
      resSimetricna.innerHTML = "TRUE";
      simetricnaExp.innerHTML =
        "Neka je ρ binarna relacija na skupu A. Binarna relacija je simetrična ako za svaki (x,y) ∈ A × A vrijedi (x,y) ∈ ρ ⇒ (y,x) ∈ ρ. To znači za svaki uređeni par (x,y) mora postojati i (y,x) kako bi bio zadovoljen uvjet simetričnosti.";
    } else resSimetricna.innerHTML = "FALSE";
    // Testiranje ASIMETRIČNOSTI
    if (boolSimetricnost) {
      resAsimetricna.innerHTML = "FALSE";
      asimetricnaExp.innerHTML =
        "Binarna relacija nije ASIMETRIČNA jer je SIMETRIČNA.";
    } else if (boolAntisimetricnost && boolAntirefleksivnost) {
      resAsimetricna.innerHTML = "TRUE";
      asimetricnaExp.innerHTML =
        "Binarna relacija je ASIMETRIČNA jer je ANTISIMETRIČNA i ANTIREFLEKSIVNA.";
    } else if (boolAntisimetricnost && !boolAntirefleksivnost) {
      resAsimetricna.innerHTML = "FALSE";
      asimetricnaExp.innerHTML =
        "Binarna relacija nije ASIMETRIČNA jer ne zadovoljava uvjet ANTIREFLEKSIVNOSTI";
    } else if (!boolAntisimetricnost && !boolAntirefleksivnost) {
      resAsimetricna.innerHTML = "FALSE";
      asimetricnaExp.innerHTML =
        "Binarna relacija nije ASIMETRIČNA jer nije ni ANTIREFLEKSIVNA, ni ANTISIMETRIČNA";
    } else if (!boolAntisimetricnost && boolAntirefleksivnost) {
      resAsimetricna.innerHTML = "FALSE";
      asimetricnaExp.innerHTML =
        "Binarna relacija nije ASIMETRIČNA jer nije ANTISIMETRIČNA";
    }

    // Zakljucak
    if (boolSimetricnost && boolTranzitivnost && boolRefleksivnostt)
      zakljucakExp.innerHTML =
        "RELACIJA EKVIVALENCIJE: Relacija je i simetrična i tranzitivna i refleksivna.";
    if (boolTranzitivnost && boolRefleksivnostt && boolAntisimetricnost)
      zakljucakExp.innerHTML =
        "Refleksivna relacija parcijalnog uređaja: Relacija je i simetrična i tranzitivna i antirefleksivna.";
    if (boolAntirefleksivnost && boolTranzitivnost)
      zakljucakExp.innerHTML =
        " Relacija strogog parcijalnog uređaja: Relacija je i simetrična i tranzitivna i antirefleksivna.";
  }
});
