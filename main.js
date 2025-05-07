import {nuevaFeria as dataFeria, nuevaFeria} from "./data/data.js"

let data = JSON.parse(localStorage.getItem("guardado", JSON.stringify(dataFeria))) || nuevaFeria

const nombreEvento = document.getElementById("nombre-evento")
const lugar = document.getElementById("lugar")
const incio = document.getElementById("fecha-inicio")
const final = document.getElementById("fecha-final")
const horario = document.getElementById("horario")
const button = document.getElementById("boton-registrar")

console.log(dataFeria)
button.addEventListener("click", ()=>{
let newItem =
    {
        nombre:nombreEvento.value ,
        lugar: lugar.value,
        inicio:incio.value,
        final:final.value,
        horario:horario.value
    }
    data.push(newItem)
    localStorage.setItem("guardado", JSON.stringify(data))
})
console.log(data)