let numero= Number (prompt("digite um numero:"));
// ! simbolo de negação
// is NaN: is not number(verifica se NÃO é um numero)
if (!isNaN(numero))
    if (numero % 2 === 0) {
            alert ("O número é par");
    } else {
        alert("O número é ímpar");
    }