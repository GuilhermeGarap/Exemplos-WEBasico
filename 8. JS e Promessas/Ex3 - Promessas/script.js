let promi1 = f_1();
let promi2 = f_2();
let p1;
let p2;

function sucesso(valor) {
    p1 = document.querySelector("p:nth_child(1)")
    p1.innerHTML = promi1;
}

function falha(erro) {
    p2 = document.querySelector("p:nth_child(2)")
    p2.innerHTML = promi2;
}

