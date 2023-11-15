let num = 266219;

const stringFromNumber = num.toString();

let result = 1;

for (let i = 0; i < stringFromNumber.length; i++) {
  result *= stringFromNumber[i];
}

result **= 3;

let newString = result.toString();

result = console.log(newString[0] + newString[1]);
