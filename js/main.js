/*
Consegna
Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Bonus
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


//recupero elementi dal DOM 
const campoMinato = document.querySelector(".campo-minato");
const difficolta = document.getElementById("difficulty");
const play = document.getElementById("play");


//funzione che ci ritornerà il valore corrente della difficoltà che è stata selezionata
function selectDifficulty(){
    const difficoltaValue = difficolta.value;
    return difficoltaValue;

}


//funzione che genererà la griglia effettivamente
function createGrid(xCol, yRow) {


    //totale caselle della grid 
    const totGrid = xCol * yRow;
  
    //imposto la dimensione basandomi su quante sono le celle sull'asse X 
    campoMinato.style.width = `calc(50px * ${xCol})`;
    campoMinato.innerHTML = "";

    // itero fino a quanto non creo tutti gli elementi della griglia
    for (let i = 1; i <= totGrid ; i++) {

      // creo la cella e poi con append la inserisco all'interno della griglia
      const cell = document.createElement("div");
      cell.classList.add("cell");
    
      //inserisco l'indice come testo del div cella
      cell.innerText = `${i}`;
    
      //inserisco la cella nel container campoMinato
      campoMinato.append(cell);

      //verifico se la cella è stata clickata e in quel caso gli aggiungo la classe attivo 
      cell.addEventListener("click" , function(){
        cell.classList.add("attivo");
        
    });
    }

}
  
//ascoltatyore di evento che richiamerà la funzione generate grid
//in base alla difficoltà che è stata ritornata dalla funzione select difficulty (easy , normal , hard)
play.addEventListener("click" , function(){
    const getDifficolta = selectDifficulty();
    if(getDifficolta === "easy")
        createGrid(10,10);
    else if(getDifficolta === "normal")
        createGrid(9,9);
    else
        createGrid(7,7);
     
    });




  
