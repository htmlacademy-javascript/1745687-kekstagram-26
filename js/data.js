import {getIntRandomNumber, getRandomArrayElement, getRandomUniqElement} from './utils.js';

const SIMILAR_PHOTO_COUNT = 25;
const LIKES_COUNT_MAX = 200;
const LIKES_COUNT_MIN = 15;
const MAX_PHOTO_COMMENTS = 4;

const SIMILAR_DESCRIPTIONS = [
  'Замечательное фото',
  'Удачный снимок',
  'Хочу больше фотографий!',
  'Забавно>',
  'Удачный кадр',
];

const SIMILAR_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_NAMES = [
  'Дмитрий',
  'Алексей',
  'Светлана',
  'Александра',
  'Леха',
  'Гость',
];

const PHOTO_ARRAY = Array.from({ length: SIMILAR_PHOTO_COUNT }, (_item, index) => index + 1);

const getPhoto = getRandomUniqElement(PHOTO_ARRAY);

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${  getIntRandomNumber(1, 6)  }.svg`,
  message: getRandomArrayElement(SIMILAR_MESSAGES),
  name: getRandomArrayElement(SIMILAR_NAMES),
});

const createPost = (id) => ({
  id: id,
  url: `photos/${  getPhoto()  }.jpg`,
  description: getRandomArrayElement(SIMILAR_DESCRIPTIONS),
  likes: getIntRandomNumber(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
  comments: Array.from({length: getIntRandomNumber(1, MAX_PHOTO_COMMENTS)}, (_item, index) =>  createComment(index))
});

const createSmilarPosts = (POST_COUNT) => Array.from({length: POST_COUNT}, (_item, index) => createPost(index));

export {createSmilarPosts};
