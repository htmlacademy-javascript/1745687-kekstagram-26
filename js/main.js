import {createPost} from './data.js';
import {renderPictures} from './render-photo.js';
import {renderPictures2} from './render-photo.js';

const SIMILAR_POST_COUNT = 25;
const similarPosts = new Array(SIMILAR_POST_COUNT).fill(null).map(createPost);

renderPictures(similarPosts);

/* renderPictures2(
    document.querySelector('.pictures'),
    document.querySelector('#picture').content.querySelector('.picture'),
    similarPosts
  ); */