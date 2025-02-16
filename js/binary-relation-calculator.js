"use strict";

import {
  refleksivnost,
  antirefleksivnost,
  antisimetricnost,
  simetricnost,
  tranzitivnost,
} from "./calc/relations.js";

function generateMatrix() {
  const setElements = document.getElementById("set-elements").value.trim();
  const matrixContainer = document.getElementById("matrix-container");
  const messageBox = document.getElementById("message");
  document.querySelector(".result").style.display = "none";

  if (setElements.length === 0) {
    messageBox.style.display = "block";
    messageBox.textContent = "Greška: Nijedan element upisan.";
    return;
  }

  const uniqueElements = [...new Set(setElements)];
  if (setElements.length !== uniqueElements.length) {
    messageBox.style.display = "block";
    messageBox.textContent = "Greška: Skup ima elemente duplikate.";
    return;
  }

  // Create matrix
  const matrix = Array.from({ length: setElements.length }, () =>
    new Array(setElements.length).fill(false)
  );

  // Create table element
  const table = document.createElement("table");
  table.classList.add("relation-table");

  // Create header row
  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th"));

  for (const el of setElements) {
    const headerCell = document.createElement("th");
    headerCell.textContent = el;
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  let hasPairs = false; // Track if there are any checkboxes

  // Create matrix cells
  for (let i = 0; i < setElements.length; i++) {
    const row = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.textContent = setElements[i];
    row.appendChild(headerCell);

    for (let j = 0; j < setElements.length; j++) {
      const cell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("matrix-checkbox");
      checkbox.value = setElements[i] + setElements[j];
      checkbox.checked = matrix[i][j];
      checkbox.addEventListener("change", () => {
        matrix[i][j] = checkbox.checked;
        matrix[j][i] = checkbox.checked;
      });
      cell.appendChild(checkbox);
      row.appendChild(cell);
      hasPairs = true; // At least one checkbox was created
    }

    table.appendChild(row);
  }

  // Display error message if no pairs exist
  if (!hasPairs) {
    messageBox.style.display = "block";
    messageBox.textContent = "Nijedan par nije odabran";
    return;
  }

  // Clear any previous messages
  messageBox.style.display = "none";

  // Add table to container
  matrixContainer.innerHTML = "";
  matrixContainer.appendChild(table);

  // Create button element
  const button = document.createElement("button");
  button.textContent = "Calculate Binary Relation";
  button.classList.add("calculate-button");

  button.addEventListener("click", () => {
    const reflexiveResult = document.getElementById("reflexive-result");
    const antireflexiveResult = document.getElementById("antireflexive-result");
    const symmetricResult = document.getElementById("symmetric-result");
    const antisymmetricResult = document.getElementById("antisymmetric-result");
    const transitiveResult = document.getElementById("transitive-result");
    const asymetricResult = document.getElementById("asymetric-result");
    document.querySelector(".result").style.display = "block";

    const checkboxes = document.querySelectorAll(".matrix-checkbox");
    const checkedValues = [...checkboxes]
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    // Show message if no pairs are selected
    if (checkedValues.length === 0) {
      messageBox.style.display = "block";
      messageBox.textContent = "Greška: Nijedan par odabran.";
      return;
    }

    // Hide message since pairs exist
    messageBox.style.display = "none";

    // Update the results using imported functions
    reflexiveResult.textContent = refleksivnost(
      checkedValues.length,
      checkedValues
    )
      ? "Da"
      : "Ne";
    antireflexiveResult.textContent = antirefleksivnost(
      checkedValues.length,
      checkedValues
    )
      ? "Da"
      : "Ne";
    symmetricResult.textContent = simetricnost(
      checkedValues.length,
      checkedValues
    )
      ? "Da"
      : "Ne";
    antisymmetricResult.textContent = antisimetricnost(
      checkedValues.length,
      checkedValues
    )
      ? "Da"
      : "Ne";
    transitiveResult.textContent = tranzitivnost(
      checkedValues.length,
      checkedValues
    )
      ? "Da"
      : "Ne";
    asymetricResult.textContent =
      reflexiveResult.textContent === "No" &&
      antisymmetricResult.textContent === "Yes"
        ? "Da"
        : "Ne";
  });

  matrixContainer.appendChild(button);
}

window.generateMatrix = generateMatrix;
document.getElementById("matrix-container").style.display = "block";
