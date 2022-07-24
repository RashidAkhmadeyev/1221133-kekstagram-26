import {getPhoto} from './date.js';

const picture = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureData = getPhoto();
const pictureFragment = document.createDocumentFragment();

pictureData.forEach(({url, likes, comments}) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.append(pictureElement);
});

picture.appendChild(pictureFragment);
export {pictureFragment};
