module.exports = function getZerosCount(number, base) {
  const factors = (base) => {
    let factors = [];
    for (let i = 2; i <= base; i++) {
        while ((base % i) === 0) {
            factors.push(i);
            base /= i;
        }
    }
    return factors;
  }

  let counts = {};
    for (let i = 0; i < factors(base).length; i++) {
      let num = factors(base)[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

  let arraySum = [],
      eSum = 0,
      n = 1;
  for (let e in counts) {
    while (Math.floor(number / Number(e)**n >= 1)) {
      eSum += Math.floor(number / Number(e)**n);
      n++;
    }
    eSum /= counts[e];
    arraySum.push(Math.floor(eSum));
    n = 1;
    eSum = 0;    
  }  
return Math.min.apply(null, arraySum);
}