let soma = 0;
let quantidade = 0;
let entrada;

do {
     entrada =  Number(prompt('Digite um número'));
   
    if(!isNaN (entrada) && entrada !== 0) {
        soma += entrada;
        quantidade += 1;
 
        }
    } while (entrada !== 0);

    let media = soma / quantidade;
    
    alert (`quantidade de números digitados: ${quantidade};Soma dos números: ${soma};Média dos números: ${media}`);



