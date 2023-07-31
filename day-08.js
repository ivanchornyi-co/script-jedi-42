//http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n) {
  if (n === Number.MAX_VALUE) return 'Input number is Number.MAX_VALUE';
  if (n === Number.MIN_VALUE) return 'Input number is Number.MIN_VALUE';
  if (isNaN(n)) return 'Input number is Number.NaN';
  if (n > Number.MAX_VALUE) return 'Input number is Number.POSITIVE_INFINITY';
  if (n < Number.MIN_VALUE) return 'Input number is Number.NEGATIVE_INFINITY';
  return `Input number is ${n}`;
}

//https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r, g, b) {
  let red = r.toString(16);
  if (red.length === 1) {
    red = '0' + red;
  }

  let green = g.toString(16);
  if (green.length === 1) {
    green = '0' + green;
  }

  let blue = b.toString(16);
  if (blue.length === 1) {
    blue = '0' + blue;
  }

  return '#' + red + green + blue;
}

//http://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toFixed(2);
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      count++;
    }
  }

  return count;
}
