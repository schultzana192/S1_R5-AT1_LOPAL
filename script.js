let numero = Number(prompt("insira um número"));

if (isNaN(numero)) {
    alert("insira um número verdadeiro");
} else {
   let mensaGem = `tabuada do ${numero}`;

   for (let i = 1; i<= 10; i= i+1) {
    mensaGem += `${numero} x ${i} = ${numero * i} / `;
 }
 alert(mensaGem);
}