import { szamarLISTA } from "./adat.js";
import {  kartyaosszeallit,megjelenit} from "./fugveny.js";

init(szamarLISTA);

function init(lista){
    megjelenit(kartyaosszeallit(lista))
}