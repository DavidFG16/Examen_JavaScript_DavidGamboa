import {nuevaFeria as dataFeria, nuevaFeria} from "./data/data.js"

let data = JSON.parse(localStorage.getItem("guardado", JSON.stringify(dataFeria))) || []

const nombreEvento = document.getElementById("nombre-evento")
const lugar = document.getElementById("lugar")
const incio = document.getElementById("fecha-inicio")
const final = document.getElementById("fecha-final")
const horario = document.getElementById("horario")
const button = document.getElementById("boton-registrar")

button.addEventListener("click", ()=>{
let newItem =
    {
        nombre:nombreEvento.value ,
        lugar: lugar.value,
        inicio:incio.value,
        final:final.value,
        horario:horario.value
    }
    localStorage.setItem("guardado", JSON.stringify(newItem))
})
console.log(data)