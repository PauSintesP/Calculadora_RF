function calculateFTP() {
    // Obtén el valor introducido por el usuario
    const power = document.getElementById("power").value;

    // Asegúrate de que el usuario introdujo un número válido
    if (!power || power <= 0) {
      document.getElementById("result").textContent = "Por favor, introduce una potencia válida.";
      document.getElementById("result").style.color = "red";
      return;
    } else {
      // Si el valor es válido, elimina el mensaje de error
      document.getElementById("result").textContent = "Vamos a ver tus zonas de potencia!";
      document.getElementById("result").style.color = "green";
    }

    // Calcula el FTP (95% de la potencia media)
    const ftp = (power * 0.95).toFixed(1);

    // Calcula las zonas de potencia basadas en el FTP
    const zones = {
      z1: `< ${(ftp * 0.55).toFixed(1)}`,
      z2: `${(ftp * 0.56).toFixed()} - ${(ftp * 0.75).toFixed(1)}`,
      z3: `${(ftp * 0.76).toFixed(1)} - ${(ftp * 0.90).toFixed(1)}`,
      z4: `${(ftp * 0.91).toFixed(1)} - ${(ftp * 1.05).toFixed(1)}`,
      z5: `${(ftp * 1.06).toFixed(1)} - ${(ftp * 1.10).toFixed(1)}`,
      z6: `${(ftp * 1.11).toFixed(1)} - ${(ftp * 1.50).toFixed(1)}`,
      z7: `> ${(ftp * 1.50).toFixed(1)}`,
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
  function calculateFC() {
    // Obtén el valor introducido por el usuario
    const power = document.getElementById("power").value;

    // Asegúrate de que el usuario introdujo un número válido
    if (!power || power <= 0) {
      document.getElementById("result").textContent = "Por favor, introduce una potencia válida.";
      document.getElementById("result").style.color = "red";
      return;
    } else {
      // Si el valor es válido, elimina el mensaje de error
      document.getElementById("result").textContent = "Vamos a ver tus zonas de potencia!";
      document.getElementById("result").style.color = "green";
    }

    // Calcula el FTP (95% de la potencia media)
    const ftp = (power * 0.95).toFixed(1);

    // Calcula las zonas de potencia basadas en el FTP
    const zones = {
      z1: `< ${(ftp * 0.55).toFixed(1)}`,
      z2: `${(ftp * 0.56).toFixed()} - ${(ftp * 0.75).toFixed(1)}`,
      z3: `${(ftp * 0.76).toFixed(1)} - ${(ftp * 0.90).toFixed(1)}`,
      z4: `${(ftp * 0.91).toFixed(1)} - ${(ftp * 1.05).toFixed(1)}`,
      z5: `${(ftp * 1.06).toFixed(1)} - ${(ftp * 1.10).toFixed(1)}`,
      z6: `${(ftp * 1.11).toFixed(1)} - ${(ftp * 1.50).toFixed(1)}`,
      z7: `> ${(ftp * 1.50).toFixed(1)}`,
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
  function calculateCR() {
    // Obtén el valor introducido por el usuario
    const power = document.getElementById("power").value;

    // Asegúrate de que el usuario introdujo un número válido
    if (!power || power <= 0) {
      document.getElementById("result").textContent = "Por favor, introduce una potencia válida.";
      document.getElementById("result").style.color = "red";
      return;
    } else {
      // Si el valor es válido, elimina el mensaje de error
      document.getElementById("result").textContent = "Vamos a ver tus zonas de potencia!";
      document.getElementById("result").style.color = "green";
    }

    // Calcula el FTP (95% de la potencia media)
    const ftp = (power * 0.95).toFixed(1);

    // Calcula las zonas de potencia basadas en el FTP
    const zones = {
      z1: `< ${(ftp * 0.55).toFixed(1)}`,
      z2: `${(ftp * 0.56).toFixed()} - ${(ftp * 0.75).toFixed(1)}`,
      z3: `${(ftp * 0.76).toFixed(1)} - ${(ftp * 0.90).toFixed(1)}`,
      z4: `${(ftp * 0.91).toFixed(1)} - ${(ftp * 1.05).toFixed(1)}`,
      z5: `${(ftp * 1.06).toFixed(1)} - ${(ftp * 1.10).toFixed(1)}`,
      z6: `${(ftp * 1.11).toFixed(1)} - ${(ftp * 1.50).toFixed(1)}`,
      z7: `> ${(ftp * 1.50).toFixed(1)}`,
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