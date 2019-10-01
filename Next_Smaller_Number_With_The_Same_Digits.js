/**
 * Write a function that takes a positive integer and returns the next 
 * smaller positive integer containing the same digits.
 * 
 * For example:
 * 
 * nextSmaller(21) == 12
 * nextSmaller(531) == 513
 * nextSmaller(2071) == 2017
 * 
 * Return -1 (for Haskell: return Nothing, for Rust: return None), when there 
 * is no smaller number that contains the same digits. Also return -1 when the
 * next smaller number with the same digits would require the leading digit to be zero.
 * 
 * nextSmaller(9) == -1
 * nextSmaller(111) == -1
 * nextSmaller(135) == -1
 * nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
 * 
 *  some tests will include very large numbers.
 *  test data only employs positive integers.
 */
function nextSmaller(n) {
  const strN = [...n.toString()];
  
  for (var i=strN.length-1; i>0; i--) {
    if (strN[i] < strN[i-1]) break;
  }
  
  if (i === 0) return -1;
  
  let biggest = i;
  let x = strN[i-1];
  
  for (var j=i+1; j<strN.length; j++) {
    if (strN[j] < x && strN[j] > strN[biggest]) {
      biggest = j;
    }
  }
  
  [strN[biggest], strN[i-1]] = [strN[i-1], strN[biggest]];
  
  const result = [...strN.slice(0, i), ...strN.slice(i).sort((a, b) => (a > b ? -1 : 1))];
  
  return (+result[0] === 0) ? -1 : +result.join("");
}