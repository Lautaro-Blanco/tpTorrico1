let dni, continuar, resto;
const arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

do {
    
    dni = parseInt(prompt("Ingrese un DNI (entre 0 y 99.999.999)."));

    while (isNaN(dni) == true || dni < 0 || dni > 99999999){
        if (isNaN(dni) == true){
            alert("Ingresar solo números.");
            dni = parseInt(prompt("Ingrese un DNI (entre 0  y 99.999.999)."));
        }
        if (dni < 0 || dni > 99999999){
            alert("Respete el límite de números entre 0 y 99.999.999.");
            dni = parseInt(prompt("Ingrese un DNI (entre 0  y 99.999.999)."));
        }
    }

    resto = dni % 23;

    for (let i = 0; i <= arrayLetras.length; i++){
        if (resto == i){
            document.write(dni + " / " + arrayLetras[i] + "<br>");
        }
    }

    continuar = confirm("¿Desea continuar?");

} while (continuar == true); 