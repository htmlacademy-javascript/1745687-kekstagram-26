/* import {renderFullsize, openFullsize} from './full-size.js';

import {similarPosts} from './main.js';

const picturesContainer = document.querySelector('.pictures');

picturesContainer.addEventListener('click', (evt) => {
    console.log(1);
  if (evt.target.closest('.picture')) {
    const targetId = parseInt(evt.target.closest('.picture').dataset.id, 10);

    const currentPhoto = similarPosts.find((targetPhoto) => targetPhoto.id === targetId);
    
    renderFullsize(currentPhoto);

    openFullsize();
  }
}); */
