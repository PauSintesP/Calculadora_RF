function calculateFTP() {
  // Obtén los valores introducidos por el usuario
  const power = document.getElementById("power").value;
  const age = document.getElementById("age").value;

  // Asegúrate de que el usuario introdujo valores válidos
  if (!power || power <= 0 || !age || age <= 0) {
    document.getElementById("result").textContent = "Por favor, introduce valores válidos para la potencia y la edad.";
    document.getElementById("result").style.color = "red";
    return;
  } else {
    // Si los valores son válidos, elimina el mensaje de error
    document.getElementById("result").textContent = "Vamos a ver tus zonas de potencia!";
    document.getElementById("result").style.color = "green";
  }

  // Calcula edefpower * 0.95).toFixed(1);

  // Calcula las zonas de potencia basadas en el FTP y la edad
  const zones = {
    z1: `< ${(ftp * (0.55 - (age / 100))).toFixed(1)}`,
    z2: `${(ftp * (0.56 - (age / 100))).toFixed()} - ${(ftp * (0.75 - (age / 100))).toFixed(1)}`,
    z3: `${(ftp * (0.76 - (age / 100))).toFixed(1)} - ${(ftp * (0.90 - (age / 100))).toFixed(1)}`,
    z4: `${(ftp * (0.91 - (age / 100))).toFixed(1)} - ${(ftp * (1.05 - (age / 100))).toFixed(1)}`,
    z5: `${(ftp * (1.06 - (age / 100))).toFixed(1)} - ${(ftp * (1.10 - (age / 100))).toFixed(1)}`,
    z6: `${(ftp * (1.11 - (age / 100))).toFixed(1)} - ${(ftp * (1.50 - (age / 100))).toFixed(1)}`,
    z7: `> ${(ftp * (1.50 - (age / 100))).toFixed(1)}`,
  };

  // Actualiza las celdas de la tabla con los valores de las zonas
  document.getElementById("z1").textContent = zones.z1;
  document.getElementById("z2").textContent = zones.z2;
  document.getElementById("z3").textContent = zones.z3;
  document.getElementById("z4").textContent = zones.z4;
  document.getElementById("z5").textContent = zones.z5;
  document.getElementById("z6").textContent = zones.z6;
  document.getElementById("z7").textContent = zones.z7;
}
function calculateCPR() {
  const time = document.getElementById("time").value;
  // Asegúrate de que el usuario introdujo un valor válido para el tiempo
  if (!time || time <= 0) {
    document.getElementById("result").textContent = "Por favor, introduce un valor válido para el tiempo.";
    document.getElementById("result").style.color = "red";
    return;
  } else {
    // Si el valor es válido, elimina el mensaje de error
    document.getElementById("result").textContent = "Vamos a calcular tu frecuencia cardíaca!";
    document.getElementById("result").style.color = "green";
  }
const zones = {
    z1: `< ${(ftp * (0.55 - (age / 100))).toFixed(1)}`,
    z2: `${(ftp * (0.56 - (age / 100))).toFixed()} - ${(ftp * (0.75 - (age / 100))).toFixed(1)}`,
    z3: `${(ftp * (0.76 - (age / 100))).toFixed(1)} - ${(ftp * (0.90 - (age / 100))).toFixed(1)}`,
    z4: `${(ftp * (0.91 - (age / 100))).toFixed(1)} - ${(ftp * (1.05 - (age / 100))).toFixed(1)}`,
    z5: `${(ftp * (1.06 - (age / 100))).toFixed(1)} - ${(ftp * (1.10 - (age / 100))).toFixed(1)}`,
    z6: `${(ftp * (1.11 - (age / 100))).toFixed(1)} - ${(ftp * (1.50 - (age / 100))).toFixed(1)}`,
    z7: `> ${(ftp * (1.50 - (age / 100))).toFixed(1)}`,
  };
}
