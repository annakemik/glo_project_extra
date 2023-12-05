const time = document.querySelector(".time");
const time2 = document.querySelector(".time2");

const dayOfWeek = function (day) {
  switch (day) {
    case 0:
      return "Воскресенье";
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Птяница";
    case 6:
      return "Суббота";
  }
};

const monthWord = function (month) {
  switch (month) {
    case 0:
      return "января";
    case 1:
      return "февраля";
    case 2:
      return "марта";
    case 3:
      return "апреля";
    case 4:
      return "мая";
    case 5:
      return "июня";
    case 6:
      return "июля";
    case 7:
      return "августа";
    case 8:
      return "сентября";
    case 9:
      return "октября";
    case 10:
      return "ноября";
    case 11:
      return "декабря";
  }
};

const hourWord = function (hours) {
  const digit = hours % 10;
  switch (digit) {
    case 1:
      return "час";
    case 2:
    case 3:
    case 4:
      return "часа";
    default:
      return "часов";
  }
};

const minuteWord = function (minutes) {
  const digit = minutes % 10;
  switch (digit) {
    case 1:
      return "минута";
    case 2:
    case 3:
    case 4:
      return "минуты";
    default:
      return "минут";
  }
};

const secondWord = function (seconds) {
  const digit = seconds % 10;
  switch (digit) {
    case 1:
      return "секунда";
    case 2:
    case 3:
    case 4:
      return "секунды";
    default:
      return "секунд";
  }
};

const getCurrentTime = function () {
  const currentTime = new Date();
  time.textContent =
    "Сегодня " +
    dayOfWeek(currentTime.getDay()) +
    ", " +
    currentTime.getDate() +
    " " +
    monthWord(currentTime.getMonth()) +
    " " +
    currentTime.getFullYear() +
    " года, " +
    currentTime.getHours() +
    " " +
    hourWord(currentTime.getHours()) +
    " " +
    currentTime.getMinutes() +
    " " +
    minuteWord(currentTime.getMinutes()) +
    " " +
    currentTime.getSeconds() +
    " " +
    secondWord(currentTime.getSeconds());
};

const checkZero = function (number) {
  let newNumber = "";
  if (number < 10) {
    newNumber = "0" + number;
    return newNumber;
  }
  return number;
};

const getCurrentTime2 = function () {
  const currentTime = new Date();

  const date =
    checkZero(currentTime.getDate()) +
    "." +
    checkZero(currentTime.getMonth() + 1) +
    "." +
    currentTime.getFullYear();

  const timeNow =
    checkZero(currentTime.getHours()) +
    ":" +
    checkZero(currentTime.getMinutes()) +
    ":" +
    checkZero(currentTime.getSeconds());

  time2.textContent = date + " - " + timeNow;
};

setInterval(getCurrentTime, 1000);
setInterval(getCurrentTime2, 1000);
