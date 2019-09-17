/**
 * Move the first letter of each word to the end of it, then add "ay" to the 
 * end of the word. Leave punctuation marks untouched.
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */
const ayAdder = word => {
    if (/^[A-Za-z]+$/.test(word)) {
      return word.substring(1) + word.charAt(0) + 'ay';
    }
    return word;
}

function pigIt(str){
   return str
    .split(" ")
    .map(ayAdder)
    .join(" ");
}