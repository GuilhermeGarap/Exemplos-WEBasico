let retorno = operacao_lenta();

function sucesso(valor) {
    console.log(retorno);
    let p = document.querySelector("p");
    p.style.color = "green";
    p.innerHTML = valor;
}

function error(erro) {
    console.log(retorno);
    let p = document.querySelector("p");
    p.style.color = "red";
    p.innerHTML = erro
}

retorno.then(sucesso).catch(error);