let escolha

do {
    escolha = Number(prompt("Escolha uma opção: 1 - insira o produto \ 2 - lista de produtos \ 3 - Sair"));
    switch (escolha) {
        case 1:
            // o menu continua aparecendo
            break;
        case 2:
            // o menu continua aparecendo
            break;
        case 3:
            alert("Sistema encerrado");
            break;
        default:
            alert("Opção inválida");
    }
} while (escolha !== 3); 
