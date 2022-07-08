/* import {makeElement} from './utils.js';
import {ifEscEvent} from './utils.js';

const fullsize = document.querySelector('.big-picture');
const fullsizeImg = fullsize.querySelector('.big-picture__img img');
const fullsizeLikes = fullsize.querySelector('.likes-count');
const fullsizeCommentsCurrent = fullsize.querySelector('.social__comment-count');
const fullsizeCommentsTotal = fullsize.querySelector('.comments-count');
const fullsizeComments = fullsize.querySelector('.social__comments');
const fullsizeCommentsLoader = fullsize.querySelector('.comments-loader');
const fullsizeDescription = fullsize.querySelector('.social__caption');
const fullsizeCancelBtn = fullsize.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const createCommentTemplate = ({avatar, name, message}) => {
  const commentItem = makeElement('li', 'social__comment');

  const commentItemText = makeElement('p','social__text', message);

  const commentItemImg = makeElement('img', 'social__picture');
  commentItemImg.src = avatar;
  commentItemImg.alt = name;

  commentItem.appendChild(commentItemImg);
  commentItem.appendChild(commentItemText);

  return commentItem;
};

const renderFullsize = ({url, likes, comments, description}) => {
  fullsizeImg.src = url;
  fullsizeLikes.textContent = likes;
  fullsizeCommentsTotal.textContent = comments.length;
  fullsizeDescription.textContent = description;
  fullsizeComments.innerHTML = '';
  const listFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    listFragment.appendChild(createCommentTemplate(comment));
  });

  fullsizeComments.appendChild(listFragment);

  fullsizeCommentsCurrent.classList.add('hidden');
  fullsizeCommentsLoader.classList.add('hidden');
};

const closeFullsize = () => {
  fullsize.classList.add('hidden');
  body.classList.remove('modal-open');
};

const keyEscHandler = (evt) => {
  if (ifEscEvent(evt)) {
    evt.preventDefault();
    closeFullsize();
  }
};

const openFullsize = () => {
  fullsize.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', keyEscHandler);
};

fullsizeCancelBtn.addEventListener('click', () => {
  closeFullsize();
  document.removeEventListener('keydown', keyEscHandler);
});


export {fullsize, fullsizeCancelBtn, renderFullsize, closeFullsize, openFullsize};
 */