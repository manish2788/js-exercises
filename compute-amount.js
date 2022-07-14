const computeAmount = () => {
  let amount = 0;
  let calcFns = {
    crores: (val) => {
      amount = amount + val * 10000000;
      return calcFns;
    },
    lacs: (val) => {
      amount = amount + val * 100000;
      return calcFns;
    },
    thousands: (val) => {
      amount = amount + val * 1000;
      return calcFns;
    },
    hundreds: (val) => {
      amount = amount + val * 100;
      return calcFns;
    },
    value: () => {
      return amount;
    }
  };
  return calcFns;
}

let amount = computeAmount().lacs(2).crores(1).thousands(3).hundreds(1).value();
console.log(amount);

let amount2 = computeAmount().lacs(2).value();
console.log(amount2);