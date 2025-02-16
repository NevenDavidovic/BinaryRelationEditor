"use strict";

import {
  lengthSkupA,
  refleksivnost,
  antirefleksivnost,
  antisimetricnost,
  simetricnost,
  tranzitivnost,
} from "./calc/relations.js";

import { displayResults } from "./ui/ui.js";

document.querySelector(".Calculate").addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".checkbox");
  const checkedValues = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.split(""));

  if (checkedValues.length < 1) {
    document.getElementById("message").style.display = "block";
    document.getElementById("message").textContent = "No pairs selected.";
    return;
  }

  const results = {
    refleksivnost: refleksivnost(lengthSkupA, checkedValues),
    antirefleksivnost: antirefleksivnost(lengthSkupA, checkedValues),
    antisimetricnost: antisimetricnost(lengthSkupA, checkedValues),
    simetricnost: simetricnost(lengthSkupA, checkedValues),
    tranzitivnost: tranzitivnost(lengthSkupA, checkedValues),
  };

  displayResults(checkedValues, results);

  document.getElementById("results").style.display = "block";
});
