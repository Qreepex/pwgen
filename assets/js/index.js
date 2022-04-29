const passwordElement = document.getElementById("pw"),
  copyButton = document.getElementById("copy"),
  lengthElement = document.getElementById("len"),
  upperEl = document.getElementById("upper"),
  lowerEl = document.getElementById("lower"),
  symbolEl = document.getElementById("symbol"),
  generateButton = document.getElementById("generate"),
  numberEl = document.getElementById("number"),
  upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ",
  lowerLetters = "abcdefghijklmnopqrstuvwxyz",
  numbers = "0123456789",
  symbols = "~!@#$%^&*()_+=|";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
  const e = lengthElement.value > 64 ? 64 : lengthElement.value;
  let t = "";
  for (let n = 0; n < e; n++) {
    t += genRandom()
  }
  passwordElement.innerText = t
}

function genRandom() {
  const e = [];
  return upperEl.checked && e.push(getUppercase()), lowerEl.checked && e.push(getLowercase()), numberEl.checked && e.push(getNumber()), symbolEl.checked && e.push(getSymbol()), 0 === e.length ? "" : e[Math.floor(Math.random() * e.length)]
}
generateButton.addEventListener("click", generatePassword), copyButton.addEventListener("click", (() => {
  const e = document.createElement("textarea"),
    t = passwordElement.innerText;
  t && (e.value = t, document.body.appendChild(e), e.select(), document.execCommand("copy"), e.remove(), alert("password copied to clipboard"))
}));