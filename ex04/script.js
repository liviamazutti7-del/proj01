let ValorCompra = Number (prompt("digite o valor da compra:"));
// ! simbolo de negação
// is NaN: is not number(verifica se NÃO é um numero)
if (!isNaN(ValorCompra)){
    if (ValorCompra >= 100) {
        let desconto = ValorCompra * 0.10;
        // 10% do valor
        let total = ValorCompra - desconto ;

        alert ("Você ganhou um desconto de 10%!");
        alert ("Valor do desconto: R$" + desconto.toFixed(2));
        alert ("valor total com desconto: R$" + total.toFixed(2));
    } else {       
        alert ("compra abaixo de R$100. sem desconto");
        alert("valor total: R$" + ValorCompra.toFixed(2));
    }
} else {
        alert("Você nao digitou um número válido!");
    }