import {createPost} from './data.js';
import {renderPictures} from './renderPhoto.js';

const SIMILAR_POST_COUNT = 25;
const similarPosts = new Array(SIMILAR_POST_COUNT).fill(null).map(() => createPost());

renderPictures(similarPosts);
