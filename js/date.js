import {getRandomNumber, getRandomArrayElement, getRandomId} from './function.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Квентин',
  'Брэд',
];

const DESCRIPTION = [
  'Пейзаж',
  'Природа',
  'Портрет',
  'Репродукция',
  'Натюрморт',
  'Жанровая (бытовая) фотография',
  'Документальная (репортажная) фотография',
  'Научно-прикладная фотография',
  'Постановочная фотография',
  'Уличная фотография',
];

const COMMENT = [
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const getRandomNoRepeatId = getRandomId(1, 25);
const getRandomNoRepeatUrl = getRandomId(1, 25);

const createPhoto = () => ({
  id: getRandomNoRepeatId(1,25),
  url: `photos/${getRandomNoRepeatUrl(1,25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(15,200),
});

const createComment = () => ({
  id: getRandomNoRepeatId(1,1000),
  avatar: `img/avatar/${getRandomNumber(1,6)}.svg`,
  message : getRandomArrayElement(COMMENT),
  name: getRandomArrayElement(NAMES),
});

const getPhoto = Array.from({length: 25}, createPhoto);

const getComment = Array.from({length: 25}, createComment);

console.log(getPhoto);
console.log(getComment);
