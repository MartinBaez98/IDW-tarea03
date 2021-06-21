function palindromo(cadena) {
    const regexp = /[^A-Za-z0-9]/g;
    const cleanedStr = cadena.replace(regexp, '').toLowerCase();
    for(let i = 0; i <= cleanedStr.length/2; i++){
        
        if(cleanedStr[i] !== cleanedStr[cleanedStr.length-(i+1)]){
            return false;
        }
    }
    return true;
}

function palabras(cadena) {
    return cadena.split(" ").length; 
}

function letras(cadena) {
    let n = cadena.length;
    return n;
}

function vocales(cadena) {
    const count = cadena.match(/[aeiou]/gi).length;
    return count;
}

function consonantes(cadena) {
  
    let c = cadena.match(/[aeiou]/gi);
   
    if(c) {
        return c.length
    } else{
        return 0
    }
}

module.exports.palindromo = palindromo;  
module.exports.palabras = palabras;
module.exports.letras = letras;
module.exports.vocales = vocales;
module.exports.consonantes = consonantes;