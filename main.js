import {nuevaFeria as dataFeria, nuevaFeria} from "./data/data.js"

let data = JSON.parse(localStorage.getItem("guardado", JSON.stringify(dataFeria))) || nuevaFeria

const nombreEvento = document.getElementById("nombre-evento")
const lugar = document.getElementById("lugar")
const incio = document.getElementById("fecha-inicio")
const final = document.getElementById("fecha-final")
const horario = document.getElementById("horario")
const button = document.getElementById("boton-registrar")
const list_ferias = document.getElementById("listado-ferias")


console.log(dataFeria)
button.addEventListener("click", (e)=>{
e.preventDefault()
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
    list_ferias.style.display ="block"
})
console.log(data)

class listaFerias extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode :"open"})
        
        
        const style = document.createElement("style")
style.textContent =`
.card{
    margin:20px 0 0 20px ;
    border: 2px solid blue;
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 700px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
`

data.forEach(element => {
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
            <p><b>Nombre del Evento: </b>${element.nombre} </p>
            <p><b>Lugar: </b>${element.lugar}  </p>
            <p><b>Fecha de inicio:</b> ${element.inicio} </p>
            <p><b>Fecha de finalización:</b> ${element.final} </p>
            <p><b>Horarios:</b> ${element.horario} </p>
    `
    shadow.appendChild(card)
});
shadow.appendChild(style)
}
}

customElements.define("lista-ferias", listaFerias)