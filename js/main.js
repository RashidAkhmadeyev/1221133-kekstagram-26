//Возвращает случайное число из заданного диапазона.
const getRandomNumber = (min, max) => {
  //Math.ceil => округляет число вверх.
  min = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  //Math.floor => округляет число вниз.
  max = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  //Math.abc => возвращает абсолютное значение числа.
  //Math.random => возвращает случайное число из диапозона.
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};
getRandomNumber(1, 5);


//Проверка длины строки.
const maxStringLength = 140;
const getStringLength = (date) => !((date >= maxStringLength));
getStringLength(110);
