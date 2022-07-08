import {createPost} from './data.js';
import {renderPictures} from './render-photo.js';
import  './gallery.js';
/* import {renderPictures2} from './render-photo.js'; */

const SIMILAR_POST_COUNT = 25;

const similarPosts = Array.from({ length: SIMILAR_POST_COUNT }, (_item, index) => createPost(index + 1));

renderPictures(similarPosts);

/* renderPictures2(
    document.querySelector('.pictures'),
    document.querySelector('#picture').content.querySelector('.picture'),
    SIMILAR_POST_COUNT
  ); */
export {similarPosts};
