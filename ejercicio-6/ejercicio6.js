let numero;

numero = parseInt(prompt("Ingrese un número."));

while (isNaN(numero) == true){
    alert("Ingresar solo números.");
    numero = parseInt(prompt("Ingrese un número."));
}

for (let i = numero; i > 0; i--){
    for (let j = i; j > 0; j--){
        document.write(i);
    }
    document.write("<br>");
}