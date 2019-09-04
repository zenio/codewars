/**
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
 * Examples
 *
 * [2, 4, 0, 100, 4, 11, 2602, 36]
 * Should return: 11 (the only odd number)
 *
 * [160, 3, 1719, 19, 11, 13, -21]
 * Should return: 160 (the only even number)
 */
function isEven(x) {
  return x & 1;
}

function findOutlier(integers) {
  for (let i=1; i<integers.length-1; i++) {
    if (isEven(integers[i]) !== isEven(integers[i-1]) && isEven(integers[i]) !== isEven(integers[i+1])) {
      return integers[i];
    }
  }
  if (isEven(integers[0]) !== isEven(integers[1])) {
    return integers[0];
  }
  return integers[integers.length-1];
}