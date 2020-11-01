import images from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.lightbox'),
  closeBtn: document.querySelector('button[data-action="close-lightbox"]'),
  modalImg: document.querySelector('.lightbox__image'),
  overLay: document.querySelector('.lightbox__overlay'),
}

function createGallery(image) {
  const createLi = document.createElement('li');
  createLi.classList.add('gallery__item');
  createLi.innerHTML = `<a class="gallery__link"
      href="${image.original}"
    >
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>`
  return createLi;
}

function closeImage() {
  refs.modal.classList.remove("is-open");
  refs.modalImg.src = "";
  refs.modalImg.alt = "";
}

const liRef = images.map(el => createGallery(el));
refs.gallery.append(...liRef);

refs.gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if(event.target.nodeName === "IMG") {
    refs.modal.classList.add('is-open');
    refs.modalImg.src = event.target.dataset.source;
    refs.modalImg.alt = event.target.alt;
  }
  return;
});

refs.closeBtn.addEventListener("click", closeImage);
refs.overLay.addEventListener('click', closeImage);

