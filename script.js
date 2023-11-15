// Урок 3
// Задание 1
// a) if-statement
let language = prompt(
  'a) Для русского введите "ru", для английского введите "en"'
);

if (language == "ru") {
  console.log("Пн, Вт, Ср, Чт, Пт, Сб, Вс");
} else if (language == "en") {
  console.log("Mon, Tue, Wed, Thu, Fri, Sat, Sun");
} else {
  console.log("Неверное введен язык");
}

// b) switch-case
let language1 = prompt(
  'b) Для русского введите "ru", для английского введите "en"'
);

switch (true) {
  case language1 == "ru":
    console.log("Пн, Вт, Ср, Чт, Пт, Сб, Вс");
    break;

  case language1 == "en":
    console.log("Mon, Tue, Wed, Thu, Fri, Sat, Sun");
    break;

  default:
    console.log("Неверное введен язык");
    break;
}

// c) array
const arrayDays = [
  ["Пн, Вт, Ср, Чт, Пт, Сб, Вс"],
  ["Mon, Tue, Wed, Thu, Fri, Sat, Sun"],
];
let language2 = prompt(
  'b) Для русского введите "ru", для английского введите "en"'
);

language2 == "ru"
  ? console.log(arrayDays[0])
  : language2 == "en"
  ? console.log(arrayDays[1])
  : console.log("Неверное введен язык");

// Задание 2

let namePerson = prompt("Ваше имя?");

namePerson == "Артем"
  ? console.log("Директор")
  : namePerson == "Александр"
  ? console.log("Преподаватель")
  : console.log("Студент");
