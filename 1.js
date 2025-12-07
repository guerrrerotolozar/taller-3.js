const prompt = require("prompt-sync")();
function adivinar() {
    let intentos = 5
    const numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;
    
    while ( intentos > 0 ){
        alo = +prompt(`pon un numero => `)
        if (alo === numeroAleatorio){
            console.log(`amen, el numero era => ${numeroAleatorio}`)
            return
        }
        else if ( alo > numeroAleatorio){
            intentos--
            console.log(`casi, es menor / ahora quedan ${intentos}`)
            
        }
        else if (alo < numeroAleatorio){
            intentos--
            console.log(`casi, es mayor  / ahora quedan ${intentos}`)
            }
        }
    if (intentos == 0){
        console.log("incompetente")
    }
    }
adivinar()