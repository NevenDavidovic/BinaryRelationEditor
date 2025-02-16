"use strict";

export function displayResults(checkedValues, results) {
  const elements = {
    messageDiv: document.getElementById("message"),
    messageExp: document.querySelector(".Explanation"),
    results: {
      refleksivna: document.querySelector(".refleksivna"),
      antirefleksivna: document.querySelector(".antirefleksivna"),
      simetricna: document.querySelector(".simetricna"),
      antisimetricna: document.querySelector(".antisimetricna"),
      tranzitivna: document.querySelector(".tranzitivna"),
      asimetricna: document.querySelector(".asimetricna"),
    },
    explanations: {
      refleksivna: document.querySelector(".refleksivnaExp"),
      antirefleksivna: document.querySelector(".antirefleksivnaExp"),
      simetricna: document.querySelector(".simetricnaExp"),
      antisimetricna: document.querySelector(".antisimetricnaExp"),
      tranzitivna: document.querySelector(".tranzitivnaExp"),
      asimetricna: document.querySelector(".asimetricnaExp"),
      zakljucak: document.querySelector(".zakljucakExp"),
    },
  };

  const propertyConfig = [
    {
      key: "refleksivnost",
      explanation: {
        true: "Relacija je refleksivna jer za ∀ x ∈ A vrijedi da je (xRx).",
        false:
          "Relacija nije refleksivna jer za ∀ x ∈ A ne vrijedi da je (xRx)",
      },
    },
    {
      key: "antirefleksivnost",
      explanation: {
        true: "Binarna je relacija antirefleksivna jer za ∀ x ∈ A vrijedi da ~(xRx).",
        false: "Binarna nije relacija antirefleksivna jer postoji par(xRx).",
      },
    },
    {
      key: "simetricnost",
      explanation: {
        true: "Relacija je simetrična jer (x,y) ∈ ρ ⇒ (y,x) ∈ ρ.",
        false: "Relacija nije simetrična jer ne postoji (y,x) za sve (x,y).",
      },
    },
    {
      key: "antisimetricnost",
      explanation: {
        true: "Relacija je antisimetrična jer (x,y) ∈ ρ ∧ (y,x) ∈ ρ ⇒ x = y.",
        false: "Relacija nije antisimetrična jer postoji (x,y) ≠ (y,x).",
      },
    },
    {
      key: "tranzitivnost",
      explanation: {
        true: "Relacija je tranzitivna jer (x,y) ∧ (y,z) ∈ ρ ⇒ (x,z) ∈ ρ.",
        false: "Relacija nije tranzitivna.",
      },
    },
  ];

  // Handle empty case
  if (checkedValues.length < 1) {
    elements.messageExp.style.display = "none";
    elements.messageDiv.innerHTML = "Nijedan par nije odabran.";
    elements.messageDiv.style.display = "block";
    Object.values(elements.results).forEach((el) => (el.innerHTML = ""));
    return;
  }

  // Regular case
  elements.messageDiv.style.display = "none";
  elements.messageExp.style.display = "flex";

  // Process standard properties
  propertyConfig.forEach(({ key, explanation }) => {
    const prop = key.replace(/nost$/, "na");
    const value = results[key];
    elements.results[prop].innerHTML = value ? "TRUE" : "FALSE";
    elements.explanations[prop].innerHTML = explanation[value];
  });

  // Handle asymmetric special case
  const isAsimetricna = results.antisimetricnost && results.antirefleksivnost;
  elements.results.asimetricna.innerHTML = isAsimetricna ? "TRUE" : "FALSE";
  elements.explanations.asimetricna.innerHTML = isAsimetricna
    ? "Binarna relacija je ASIMETRIČNA jer je ANTISIMETRIČNA i ANTIREFLEKSIVNA."
    : "Binarna relacija nije ASIMETRIČNA.";

  // Determine conclusion
  elements.explanations.zakljucak.innerHTML =
    results.simetricnost && results.tranzitivnost && results.refleksivnost
      ? "RELACIJA EKVIVALENCIJE: Simetrična, tranzitivna i refleksivna."
      : results.tranzitivnost &&
        results.refleksivnost &&
        results.antisimetricnost
      ? "Refleksivna relacija parcijalnog uređaja: Tranzitivna, refleksivna i antisimetrična."
      : results.antirefleksivnost && results.tranzitivnost
      ? "Relacija strogog parcijalnog uređaja: Tranzitivna i antirefleksivna."
      : "";
}
