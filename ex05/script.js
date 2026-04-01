let numero = Number (prompt("digite um número:"));
// ! simbolo de negação
// is NaN: is not number(verifica se NÃO é um numero)
if (!isNaN(numero)){
    if (numero % 5 === 0){
        alert ("Seu número é multiplo de 5");
    } else    
        alert ("Seu número não é multiplo de 5");
    }
    