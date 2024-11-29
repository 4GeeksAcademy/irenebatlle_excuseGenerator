/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suj = [
  "Un gato",
  "Un perro",
  "Un zombie",
  "Un cura",
  "Un soldado",
  "Un payaso",
  "Un turista",
  "Un testigo de Jehová",
  "Un fantasma",
  "Un asesino",
  "Un influencer",
  "Un tiktoker",
  "Un cinéfilo",
  "Un gamer"
];
let adj = [
  "borracho",
  "vagabundo",
  "despechado",
  "salvaje",
  "loco",
  "enloquecido",
  "ciego",
  "desatado",
  "drogado",
  "hambriento",
  "delirando",
  "enfermo",
  "perdido",
  "sediento",
  "problemático",
  "malévolo"
];
let accion = [
  "se me ha comido",
  "me ha mordido",
  "me ha roto",
  "me ha destrozado",
  "me ha lamido",
  "me ha robado",
  "se me ha llevado",
  "me ha saboteado",
  "me ha mojado",
  "me ha estropeado",
  "me ha perdido",
  "me ha hecho desaparecer",
  "me ha escondido"
];
let obj = [
  "los deberes",
  "el trabajo",
  "las llaves del coche",
  "las llaves de casa",
  "la mochila",
  "la mano",
  "el móvil",
  "el dedo",
  "el pie",
  "el boli",
  "el ordenador",
  "la casa",
  "el coche",
  "la cara",
  "la agenda",
  "el portátil"
];
let lugar = [
  "en la escuela",
  "en el hospital",
  "en el autobús",
  "delante de mi coche",
  "en el parking",
  "en medio del bosque",
  "en la iglesia",
  "en mi casa",
  "en la calle",
  "en mi habitación",
  "delante del instituto",
  "en la puerta de mi casa",
  "justo antes de venir",
  "en mi cama",
  "en el WC",
  "en la ducha"
];

let rdm1 = Math.floor(Math.random() * suj.length);
let rdm2 = Math.floor(Math.random() * adj.length);
let rdm3 = Math.floor(Math.random() * accion.length);
let rdm4 = Math.floor(Math.random() * obj.length);
let rdm5 = Math.floor(Math.random() * lugar.length);

let excusa =
  suj[rdm1] +
  " " +
  adj[rdm2] +
  " " +
  accion[rdm3] +
  " " +
  obj[rdm4] +
  " " +
  lugar[rdm5] +
  ".";

//busca un elemento dentro del html que tenga el id de excusa
let seleccion = document.querySelector("#excusa");
//console.log(seleccion);
//dentro del h1 se coloca el resultado de la excusa
seleccion.innerHTML = excusa;
//console.log("Hello");
