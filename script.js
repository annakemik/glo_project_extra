const arr = ["3584938", "8292", "492857", "4833", "920", "232", "58292"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == "2" || arr[i][0] == "4") console.log(arr[i]);
}

const isSimple = function (number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

for (let i = 1; i < 101; i++) {
  if (isSimple(i)) {
    console.log(i, "Делители этого числа: 1 и " + i);
  }
}
