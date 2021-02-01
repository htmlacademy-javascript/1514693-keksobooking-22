// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function randomInteger(min, max) {
  // метод получения случайного числа  из диапазона https://learn.javascript.ru/task/random-int-min-max
  let rand = min + Math.random() * (max + 1 - min);
  if (min >= max) {
    return 'Ошибка';
  }
  return Math.floor(rand);
}

alert(randomInteger(0, 10));


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function randomFractional (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  // метод округления https://yandex.ru/turbo/internet-technologies.ru/s/articles/metody-okrugleniya-chisel-v-javascript.html
  let rounded = parseFloat(rand.toFixed(2));
  if (min >= max) {
    return 'Ошибка';
  }
  return rounded;
}

alert(randomFractional(0, 10));
