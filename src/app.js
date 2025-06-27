import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let sustantivos = [
    "Mi hermano ",
    "Mi perro ",
    "Mi gato ",
    "Mi jefe ",
    "Mi madre ",
  ];
 
  let acciones =[
    "Quemó mi ordenador, ",
    "Comió mi tarea, ",
    "Robó mi coche, ",
    "Se cayó por las escaleras, ",
    "Derramó mi café, ",
  ];

  let evitar = [
    "Estaba distraído ",
    "No sabía que estaba mal ",
    "No pude evitarlo ",
    "No sabía que era ilegal ",
    "Pensé que era una broma ",
  ]

  let cuando = [
    "Ayer.",
    "La semana pasada.",
    "El mes pasado.",
    "El año pasado.",
    "Hace un rato.",
  ];

  let parte1 = Math.floor(Math.random() * sustantivos.length);
  let parte2 = Math.floor(Math.random() * acciones.length);
  let parte3 = Math.floor(Math.random() * evitar.length);
  let parte4 = Math.floor(Math.random() * cuando.length);

  document.querySelector("#excusa").innerHTML =
    sustantivos[parte1] +
    acciones[parte2] +
    evitar[parte3] +
    cuando[parte4];
};

