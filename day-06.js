//https://www.codewars.com/kata/maximum-multiple/train/javascript

function maxMultiple(divisor, bound) {
  let N = 0;
  for (let i = 0; i <= bound; i++) {
    if (i % divisor === 0) {
      N = i;
    }
  }
  return N;
}

//https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}

//https://www.codewars.com/kata/59441520102eaa25260000bf

function unusualFive() {
  const str = 'fives';
  return str.length;
}
