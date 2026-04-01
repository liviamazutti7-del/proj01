let idade= Number (prompt("digite sua idade:"));
// ! simbolo de negação
// is NaN: is not number(verifica se NÃO é um numero)
if (!isNaN(idade))
    if (idade >= 18) {
            alert ("Você é maior de idade");
    } else {
        alert("Você é menor de idade");
    }
