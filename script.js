import { kutyaLista } from "./adatok.js";


const cim = "Kutyák minden mennyiségben"

const kutya1 = {
    nev: "Floki",
    kor: 2,
    nem: "Kan",
  }

let h1Elem = document.querySelector('header')
h1Elem.innerHTML = ("<p>" + cim + "</p>")

function kutyaTartalomKiiras(aktualisKutya) {
    const tartalom = document.querySelector('.tartalom')
    const divKutya = document.createElement('div')

    divKutya.classList.add("col-lg-4", "col-md-6")
    
    const nev = document.createElement('h3')
    nev.innerHTML = aktualisKutya.nev
    const kor = document.createElement('p')
    kor.innerHTML = aktualisKutya.kor
    const nem = document.createElement('p')
    nem.innerHTML = aktualisKutya.nem

    divKutya.appendChild(nev)
    divKutya.appendChild(kor)
    divKutya.appendChild(nem)
    tartalom.appendChild(divKutya)
}

function mindenKutya(kutyaLista) {
    for (let index = 0; index < kutyaLista.length; index++) {
        const element = kutyaLista[index];
        kutyaTartalomKiiras(element)
    }
}

mindenKutya(kutyaLista)