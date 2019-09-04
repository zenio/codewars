/**
 * This time no story, no theory. The examples below show you how to write function accum:
 *
 * Examples:
 *
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 *
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 *
 */
const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function accum(string) {
  let times = 1;
  let result = [];
  
  for (let letter of string) {
    result.push(capitalize(letter.repeat(times++)));
  }
  
  return result.join('-');
}