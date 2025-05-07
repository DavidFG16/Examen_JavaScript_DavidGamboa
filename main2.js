import { emprendedor as dataFeria, nuevaFeria} from "./data/data2.js"

let data = JSON.parse(localStorage.getItem("guardado", JSON.stringify(dataFeria))) || nuevaFeria

const nombreEvento = document.getElementById("nombre-evento2")
const lugar = document.getElementById("lugar2")
const incio = document.getElementById("fecha-inicio2")
const final = document.getElementById("fecha-final2")
const nombreP = document.getElementById("nombreP")
const descriP = document.getElementById("descripP")
const precio = document.getElementById("precio")


console.log(dataFeria)
button.addEventListener("click", (e)=>{
e.preventDefault()
    let newItem =
    {
        nombre:nombreEvento.value ,
        categoria: lugar.value,
        descripcion:incio.value,
        redes:final.value,
        desProducto:horario.value
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

customElements.define("lista-ferias2", listaFerias)