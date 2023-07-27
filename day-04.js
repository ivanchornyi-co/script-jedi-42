//http://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n) {
  let i = 0;
  let result = str;
  while (i < n) {
    if (i % 2 === 0) {
      result = '*' + result;
    } else {
      result = result + '*';
    }
    i++;
  }
  return result;
}

//http://www.codewars.com/kata/5721a78c283129e416000999

//http://www.codewars.com/kata/5721c189cdd71194c1000b9b

//http://www.codewars.com/kata/5722b3f0bd5583cf44001000
