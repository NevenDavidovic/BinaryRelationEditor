function generateMatrix() {
  const setElements = document.getElementById("set-elements").value;
  const matrixContainer = document.getElementById("matrix-container");

  const uniqueElements = [...new Set(setElements)];
  if (setElements.length !== uniqueElements.length) {
    alert("Error: Set contains duplicate elements.");
    return;
  }

  // Create matrix
  const matrix = [];
  for (let i = 0; i < setElements.length; i++) {
    const row = [];
    for (let j = 0; j < setElements.length; j++) {
      row.push(false);
    }
    matrix.push(row);
  }

  // Create table element
  const table = document.createElement("table");

  // Create header row
  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerRow.appendChild(headerCell);

  for (let i = 0; i < setElements.length; i++) {
    const headerCell = document.createElement("th");
    headerCell.textContent = setElements[i];
    headerRow.appendChild(headerCell);
  }

  table.appendChild(headerRow);

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
    }

    table.appendChild(row);
  }

  // Add table to container
  matrixContainer.innerHTML = "";
  matrixContainer.appendChild(table);

  // Create button element
  const button = document.createElement("button");
  button.textContent = "Calculate Binary Relation";
  button.style.backgroundColor = "#007bff";
  button.style.color = "white";

  button.style.padding = "10px 20px";

  button.style.transition = "all 0.3s ease";
  button.style.backgroundColor = "#007bff"; // set background color to blue
  button.style.color = "white"; // set text color to white
  button.style.fontSize = "16px"; // set font size to 16 pixels

  button.style.border = "none"; // remove border
  button.style.borderRadius = "4px"; // add border radius of 4 pixels
  button.style.margin = "20px 0"; // add margin of 20 pixels on top/bottom and 0 on left/right
  button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // add box shadow

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#0056b3";
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#007bff";
  });

  button.addEventListener("click", () => {
    const reflexiveResult = document.getElementById("reflexive-result");
    const antireflexiveResult = document.getElementById("antireflexive-result");
    const symmetricResult = document.getElementById("symmetric-result");
    const antisymmetricResult = document.getElementById("antisymmetric-result");
    const transitiveResult = document.getElementById("transitive-result");
    const asymetricResult = document.getElementById("asymetric-result");
    const checkboxes = document.querySelectorAll(".matrix-checkbox");
    const checkedValues = [];

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedValues.push(checkboxes[i].value);
      }
    }
    const lengthSkupA = checkedValues.length;

    reflexiveResult.textContent = refleksivnost(lengthSkupA, checkedValues)
      ? "Yes"
      : "No";
    antireflexiveResult.textContent = antirefleksivnost(
      lengthSkupA,
      checkedValues
    )
      ? "Yes"
      : "No";
    symmetricResult.textContent = simetricnost(lengthSkupA, checkedValues)
      ? "Yes"
      : "No";
    antisymmetricResult.textContent = antisimetricnost(
      lengthSkupA,
      checkedValues
    )
      ? "Yes"
      : "No";
    transitiveResult.textContent = tranzitivnost(lengthSkupA, checkedValues)
      ? "Yes"
      : "No";
  });

  // Add button to container
  matrixContainer.appendChild(button);
}

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

// funkcija tranzitivnosti

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
