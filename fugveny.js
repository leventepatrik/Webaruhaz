import {szamarLISTA  } from "./adat.js";


export function kartyaosszeallit(szamarLISTA){
    let kartyaTxt=`<div class="kartyaTarolo">`;
    
    szamarLISTA.forEach((szamar) => {
        kartyaTxt+=`
        <div class="col-md-6" style="padding-top:30px; margin: auto">
                <div class="card mb-3" style="width: 400px;  background-color: #BB5528;">
                <h2 style="color:white; padding:20px;">${szamar.nev}</h2>
                <img class="card-img-top" src="${szamar.kep}" alt="Kártya kép" style="width:100%; padding:10px; ">
                <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-text" style="color:white;">${szamar.termekleiras}</p>
                    <a href="#" class="btn btn-primary" style="background-color: #F66513; border-color: #F66513">${szamar.ar}</a>
                    <a href="#" class="btn btn-primary" style="background-color: #F66513; border-color: #F66513" class=".kosarbaGomb">Kosárba</a>
                </div>
            </div>
        </div>`;   
        
    });

    kartyaTxt+=`</div>`;
    return kartyaTxt

    
}
export function megjelenit(txt){
    const kartyaTarolo=$(".kartyaTarolo");
    kartyaTarolo.html(txt)

}
