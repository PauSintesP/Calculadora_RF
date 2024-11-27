function calculateFTP() {
  const power = parseFloat(document.getElementById("power").value);

  if (isNaN(power) || power <= 0) {
    displayResult("Per favor, introdueix un valor vàlid per a la potència.", "red");
    return;
  }

  // FTP basat en el 95% de la potència mitjana d'un esforç màxim de 20 minuts
  const ftp = parseFloat((power * 0.95).toFixed(1));
  displayResult(`El teu FTP és ${ftp} W. Calculant zones...`, "green");

  const zones = calculateZones(ftp, 0); // Passar 0 com a modificador per defecte
  updateZones(zones);
}

function calculateCPR() {
  const time = document.getElementById("time").value; // Tiempo en formato HH:MM
  const pace = parseFloat(document.getElementById("pace").value); // Ritmo promedio en segundos

  if (!time || isNaN(pace) || pace <= 0) {
    displayResult("Por favor, introduce valores válidos para el tiempo y el ritmo.", "red");
    return;
  }

  const totalMinutes = convertTimeToMinutes(time); // Convertir tiempo a minutos
  const cpr = (totalMinutes * pace).toFixed(2); // Ejemplo de cálculo, ajusta según lógica deseada
  displayResult(`Tu CPR calculado es ${cpr}. Calculando zonas...`, "green");

  const zones = calculateZones(pace, totalMinutes);
  updateZones(zones);
}

function calculateFCMax() {
  const age = parseInt(document.getElementById("age").value, 10);
  const resultElement = document.getElementById("fcMaxResult");

  if (isNaN(age) || age <= 0) {
    resultElement.textContent = "Por favor, introduce una edad válida.";
    resultElement.style.color = "red";
    return;
  }

  const fcMax = 220 - age; // Fórmula estándar: 220 - edad
  resultElement.textContent = `Tu FCmáx estimada es ${fcMax} bpm.`;
  resultElement.style.color = "green";

  // Actualizar zonas en la tabla
  document.getElementById("z1").textContent = `< ${Math.round(fcMax * 0.55)}`;
  document.getElementById("z2").textContent = `${Math.round(fcMax * 0.56)} - ${Math.round(fcMax * 0.75)}`;
  document.getElementById("z3").textContent = `${Math.round(fcMax * 0.76)} - ${Math.round(fcMax * 0.90)}`;
  document.getElementById("z4").textContent = `${Math.round(fcMax * 0.91)} - ${Math.round(fcMax * 1.05)}`;
  document.getElementById("z5").textContent = `> ${Math.round(fcMax * 1.06)}`;
}

function calculateZones(value, modifier) {
  return {
    z1: `< ${(value * (0.55 - modifier / 100)).toFixed(1)}`,
    z2: `${(value * (0.56 - modifier / 100)).toFixed(1)} - ${(value * (0.75 - modifier / 100)).toFixed(1)}`,
    z3: `${(value * (0.76 - modifier / 100)).toFixed(1)} - ${(value * (0.90 - modifier / 100)).toFixed(1)}`,
    z4: `${(value * (0.91 - modifier / 100)).toFixed(1)} - ${(value * (1.05 - modifier / 100)).toFixed(1)}`,
    z5: `${(value * (1.06 - modifier / 100)).toFixed(1)} - ${(value * (1.10 - modifier / 100)).toFixed(1)}`,
    z6: `${(value * (1.11 - modifier / 100)).toFixed(1)} - ${(value * (1.50 - modifier / 100)).toFixed(1)}`,
    z7: `> ${(value * (1.50 - modifier / 100)).toFixed(1)}`,
  };
}

function updateZones(zones) {
  document.getElementById("z1").textContent = zones.z1;
  document.getElementById("z2").textContent = zones.z2;
  document.getElementById("z3").textContent = zones.z3;
  document.getElementById("z4").textContent = zones.z4;
  document.getElementById("z5").textContent = zones.z5;
  document.getElementById("z6").textContent = zones.z6;
  document.getElementById("z7").textContent = zones.z7;
}

// Funció per mostrar el resultat
function displayResult(message, color) {
  const resultElement = document.getElementById("result");
  resultElement.innerText = message;
  resultElement.style.color = color;
}

function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(":").map((t) => parseInt(t, 10));
  return hours * 60 + minutes; // Convertir a minutos totales
}