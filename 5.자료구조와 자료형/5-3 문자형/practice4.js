function extractCurrencyValue(str){
   let numberStr = '';
   for (let char of str){
     if ( isNaN(parseInt(char)) != true ){
        numberStr += char;
     }
   }
   return numberStr;
}

console.log( extractCurrencyValue('$120'));
