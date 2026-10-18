"use strict";

const form = document.querySelector("#grade-form");
const result = document.querySelector("#result");
const nameInput = document.querySelector("#student-name");
const gradeInputs = [1, 2, 3].map((number) => document.querySelector(`#grade-${number}`));

function clearErrors() {
  document.querySelectorAll(".field-error").forEach((element) => {
    element.textContent = "";
  });
  document.querySelectorAll(".has-error").forEach((element) => {
    element.classList.remove("has-error");
    element.removeAttribute("aria-invalid");
  });
}

function showError(input, message) {
  input.classList.add("has-error");
  input.setAttribute("aria-invalid", "true");
  const error = document.querySelector(`#${input.getAttribute("aria-describedby")}`);
  error.textContent = message;
}

function validateForm() {
  clearErrors();
  let isValid = true;

  if (!nameInput.value.trim()) {
    showError(nameInput, "Ingresa el nombre del estudiante.");
    isValid = false;
  }

  gradeInputs.forEach((input, index) => {
    const value = input.value.trim();
    const grade = Number(value);
    if (!value) {
      showError(input, `Ingresa la nota ${index + 1}.`);
      isValid = false;
    } else if (!Number.isFinite(grade) || grade < 0 || grade > 5) {
      showError(input, "La nota debe estar entre 0 y 5.");
      isValid = false;
    }
  });

  return isValid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.hidden = true;

  if (!validateForm()) {
    result.hidden = true;
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    firstInvalid?.focus();
    return;
  }

  const grades = gradeInputs.map((input) => Number(input.value));
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  const passed = average >= 3;

  result.className = `result ${passed ? "result-passed" : "result-failed"}`;
  result.replaceChildren();
  const title = document.createElement("h2");
  title.textContent = `Resultado de ${nameInput.value.trim()}`;
  const detail = document.createElement("p");
  detail.textContent = `Promedio: ${average.toFixed(2)} — ${passed ? "Aprobó" : "No aprobó"}.`;
  result.append(title, detail);
  result.hidden = false;
});

form.addEventListener("input", (event) => {
  if (event.target.matches("input")) {
    event.target.classList.remove("has-error");
    event.target.removeAttribute("aria-invalid");
    const error = document.querySelector(`#${event.target.getAttribute("aria-describedby")}`);
    if (error) error.textContent = "";
  }
});
