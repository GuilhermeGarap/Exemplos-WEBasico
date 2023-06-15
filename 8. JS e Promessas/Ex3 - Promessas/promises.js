function f_1() {
    let p = new Promise(
        (sucesso, falha) =>
        {
            setTimeout(sucesso.bind(null, "OK"), 4000);
        }
    );
    return p;
}


function f_2() {
    return new Promise(
        (sucesso, falha) =>
        {
            let aleatorio = Math.floor(Math.random() * 10);
            if(aleatorio % 2) {
                setTimeout(sucesso.bind(null, '42'), 2500);
            } else {
                setTimeout(falha.bind(null, "ERRO!"), 2000);
            }
        }
    );
}