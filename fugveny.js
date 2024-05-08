import {szamarLISTA  } from "./adat.js";


export function kartyaosszeallit(lista){
    let txt = "";
    txt += `<div class="row" d-flex justify-content-start mb-1 >`;
    lista.forEach((element, i) => {
        txt += `<div class="col-sm-4" style="width: 400px; background-image: linear-gradient(to right, lightgreen ,lightgray ); border: 1px solid black;">`;
        txt += `<img class="card-img-top" src="${element.kep}" alt="Card image">`;
        txt += `<div class="card-body" >`;
        txt += `<h4 class="card-title">${element.nev}</h4>`;
        txt += `<p class="card-text">${element.ar}</p>`;
        txt += `<p class="card-text">Termékleirás: ${element.termekleiras}</p>`;
        txt += `<a href="#"  style="background-color: orange; border-color: gray;" class="btn btn-primary">Kosár</a>`;
        txt += `</div>`;
        txt += `</div>`;
    });
    txt += "</div>";
    return txt;
}

export function megjelenit(txt){
    const adatokELEM = $("#kartya");
    adatokELEM.html(txt);

}
