//https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length);
  if (sub === tail) {
    return true;
  }
  return false;
}

//https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
  let total = salary;
  const symbol = '\u00A3';
  if (bonus === true) {
    total = salary * 10;
  }
  return symbol + total;
}

//https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n) {
  const sq = n ** 2 + '';
  if (sq.endsWith(n) === true) return 'Automorphic';
  return 'Not!!';
}
