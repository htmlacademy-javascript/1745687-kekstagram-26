const renderPictures = (posts) => {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const pictureListElement = document.querySelector('.pictures');
  const listFragment = document.createDocumentFragment();

  posts.map((post) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.id = post.id;
    pictureElement.querySelector('.picture__img').src = post.url;
    pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = post.likes;
    listFragment.appendChild(pictureElement);
  });

  pictureListElement.appendChild(listFragment);
};

const createPhotoFactory = (pictureTemplate) => (post) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.dataset.id = post.id;
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  return pictureElement;
};

export {renderPictures};

export const renderPictures2 = (pictureListElement,pictureTemplate,photos) => {
  // для добавления воспользуемся методом append. Он получает "сколько хочешь" параметров
  pictureListElement.append(...photos.map(createPhotoFactory(pictureTemplate)));
};