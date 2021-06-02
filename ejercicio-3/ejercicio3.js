let numero, suma = 0, continuar;

do {
    
    numero = parseInt(prompt("Ingrese un número."));

    while (isNaN(numero) == true){
        alert("Ingresar solo números.");
        numero = parseInt(prompt("Ingrese un número."));
    }

    suma = suma + numero;

    continuar = confirm("¿Desea continuar?");

} while (continuar == true);

document.write(suma);