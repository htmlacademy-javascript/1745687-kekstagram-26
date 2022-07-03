import {getIntRandomNumber, checkStringLength} from './utils.js';
import {createSmilarPosts} from './data.js';

const SIMILAR_POST_COUNT = 25;
const similarPosts = new Array(SIMILAR_POST_COUNT).fill(null).map(() => createSmilarPosts());

Window.console.log(similarPosts);

checkStringLength('строка', 15);
getIntRandomNumber(12,1);
