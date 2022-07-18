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

//Проверка длины строки.
const getStringLength = (string , stringMax) => string.length <= stringMax;

//Случайный элемент массива.
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

//Не повторяющийся ID.
const getRandomId = (min, max) => {
  const randomId = [];
  return function ()  {
    let currentValue = getRandomNumber(min, max);
    if (randomId.length >= (max - min + 1)) {
      randomId.length = 0;
    }
    while (randomId.includes(currentValue)){
      currentValue = getRandomNumber(min, max);
    }
    randomId.push(currentValue);
    return currentValue;
  };
};

export {getRandomNumber, getStringLength, getRandomArrayElement, getRandomId};
