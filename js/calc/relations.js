"use strict";

export const skupA = ["a", "b", "c", "d", "e"];
export const lengthSkupA = parseInt(skupA.length);

// funkcija refleksivnost
export function refleksivnost(lengthSkupA, checkedValues) {
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

export function antirefleksivnost(lengthSkupA, checkedValues) {
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

export function antisimetricnost(lengthSkupA, checkedValues) {
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

export function simetricnost(lengthSkupA, checkedValues) {
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

export function tranzitivnost(lengthSkupA, checkedValues) {
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
