function somar(a, b) {
    return (a+b);
}

//Criando objeto

let Calculadora = {
    ano_de_lancamento: 1979,
    marca: "Sony",
    soma: somar(1, 2)
};

console.log(Calculadora.soma);

let Computador = {
    cpu: "R5-5600G",
    dram: "16 GB"
};


document.querySelector("p").innerHTML = "CPU: " + Computador.cpu;