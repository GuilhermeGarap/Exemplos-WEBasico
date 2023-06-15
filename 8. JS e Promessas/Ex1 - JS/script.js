/*function enviarindividual() {
   let minha_div;
   let meu_input;
   let preview;

   minha_div = document.querySelector("div:nth-child(1)");
   meu_input = document.querySelector("input");

   minha_div.innerHTML = meu_input.value;
}*/

function enviar() {
    let minha_div;
    let meu_input;
    let preview;
 
    minha_div = document.querySelector("div:nth-child(1)");
    meu_input = document.querySelector("input");
 
    let p = document.createElement("p");
    minha_div.appendChild(p);

    p.innerHTML = ("•" + meu_input.value);
 }

function atualizar() {
    let meu_input;
    let preview;

    meu_input = document.querySelector("input");
    preview = document.querySelector("#preview");

    preview.innerHTML = ("Preview: " + meu_input.value);
}

function limpar() {
    let ps = document.querySelectorAll("div:nth-child(1)>p");

    for (let i=0; i < ps.length; ++i) {
        ps[i].remove();
    }
}