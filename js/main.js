// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// метод получения случайного числа  из диапазона https://learn.javascript.ru/task/random-int-min-max

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  if (min >= max) {
    throw new Error('Число min не должно превышать max');
  }
  return Math.floor(rand);
}

alert(randomInteger(0, 10));


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// метод округления https://yandex.ru/turbo/internet-technologies.ru/s/articles/metody-okrugleniya-chisel-v-javascript.html

function randomFractional (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  let rounded = parseFloat(rand.toFixed(2));
  if (min >= max) {
    throw new Error('Число min не должно превышать max');
  }
  return rounded;
}

alert(randomFractional(0, 10));
