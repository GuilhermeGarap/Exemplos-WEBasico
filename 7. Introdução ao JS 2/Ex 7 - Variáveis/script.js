let num;
let palavra;

num = prompt("Digite um número");
palavra = prompt("Digite um animal(Coelho/Lebre");
if(num<9 && palavra != "Coelho") {
    document.querySelector("p").innerHTML = "Cão";
} else if(num<9 && palavra == "Coelho") {
    document.querySelector("p").innerHTML = "Gato";
} else {
    document.querySelector("p").innerHTML = "Urso";
}