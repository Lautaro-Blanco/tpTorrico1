let nota = prompt("Ingrese la nota (del 1 al 10): ");
nota = parseInt(nota);

if (nota >= 0 && nota <= 10){

    if (nota <= 3){
        alert("Muy deficiente.");
    }

    else if (nota <= 5){
        alert("Insuficiente.");
    }

    else if (nota == 6){
        alert("Suficiente.");
    }

    else if (nota == 7){
        alert("Bien.");
    }

    else if (nota < 9){
        alert("Notable.");
    }

    else if (nota <= 10){
        alert("Sobresaliente.");
    }
}

else{
    alert("Ingrese un número entre el 0 y el 10.");
}
