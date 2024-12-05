function calculateFCMax() {
  const age = parseInt(document.getElementById("age").value, 10);
  const resultElement = document.getElementById("result");

  if (isNaN(age) || age <= 0) {
    resultElement.textContent = "Por favor, introduce una edad válida.";
    resultElement.style.color = "red";
    return;
  }

  // Calcular FCmáx usando la fórmula estándar
  const fcMax = 220 - age;
  resultElement.textContent = `Tu FCmáx estimada es ${fcMax} bpm.`;
  resultElement.style.color = "green";

  // Calcular las zonas de rendimiento
  const zones = calculateZones(fcMax);

  // Actualizar la tabla con los valores calculados
  updateZones(zones);
}

function calculateZones(fcMax) {
  return {
    z1: `< ${Math.round(fcMax * 0.55)}`,
    z2: `${Math.round(fcMax * 0.56)} - ${Math.round(fcMax * 0.75)}`,
    z3: `${Math.round(fcMax * 0.76)} - ${Math.round(fcMax * 0.90)}`,
    z4: `${Math.round(fcMax * 0.91)} - ${Math.round(fcMax * 1.05)}`,
    z5: `> ${Math.round(fcMax * 1.06)}`,
    z6: `${Math.round(fcMax * 1.11)} - ${Math.round(fcMax * 1.50)}`,
    z7: `> ${Math.round(fcMax * 1.50)}`,
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
function calculateFTP() {
  // Obtener el valor del FTP ingresado por el usuario
  const ftpInput = document.getElementById("power");
  const ftpValue = parseFloat(ftpInput.value);

  if (isNaN(ftpValue) || ftpValue <= 0) {
    alert("Por favor, ingresa un valor válido de FTP (vatios).");
    return;
  }

  // Calcular valores para cada zona
  const zones = {
    z1: `< ${Math.round(ftpValue * 0.55)}`, // Menor que 55%
    z2: `${Math.round(ftpValue * 0.56)} - ${Math.round(ftpValue * 0.75)}`, // 56-75%
    z3: `${Math.round(ftpValue * 0.76)} - ${Math.round(ftpValue * 0.90)}`, // 76-90%
    z4: `${Math.round(ftpValue * 0.91)} - ${Math.round(ftpValue * 1.05)}`, // 91-105%
    z5: `${Math.round(ftpValue * 1.06)} - ${Math.round(ftpValue * 1.20)}`, // 106-120%
    z6: `${Math.round(ftpValue * 1.21)} - ${Math.round(ftpValue * 1.50)}`, // 121-150%
    z7: `> ${Math.round(ftpValue * 1.50)}` // Mayor que 150%
  };

  // Actualizar la tabla usando la función updateZones
  updateZones(zones);

  // Mostrar un mensaje de resultado
  const result = document.getElementById("result");
  result.textContent = `Tu FTP en ${ftpValue} vatios: `;
}

