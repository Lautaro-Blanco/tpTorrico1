let concatenacion = "", cadena, continuar;

do {
    cadena = prompt("Introduzca una cadena de texto.");

    while (cadena == null == true || cadena == "" == true || isNaN (cadena) == false) { //Los usuarios pueden ingresar primero letras y después números (y viceversa) y se lo va a tomar igual, en este caso no sabría hacer para que solo sea texto.
        alert("Debe ingresar una cadena de texto.");
        cadena = prompt("Introduzca una cadena de texto.");
    }

        if (concatenacion == "") {
            concatenacion = concatenacion + cadena;
        }
        else {
            concatenacion = concatenacion + "-" + cadena;
        }

    continuar = confirm("¿Desea continuar?");

} while (continuar == true);

document.write(concatenacion);