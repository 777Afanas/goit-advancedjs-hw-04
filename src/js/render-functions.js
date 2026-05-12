import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </a>
          <ul class="gallery-info">
            <li>
              <span class="info-label">Likes</span>
              <span class="info-value">${likes}</span>
            </li>
            <li>
              <span class="info-label">Views</span>
              <span class="info-value">${views}</span>
            </li>
            <li>
              <span class="info-label">Comments</span>
              <span class="info-value">${comments}</span>
            </li>
            <li>
              <span class="info-label">Downloads</span>
              <span class="info-value">${downloads}</span>
            </li>
          </ul>
        </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

export const clearGallery = () => {
  galleryEl.innerHTML = '';
};

export const showLoader = () => {
  loaderEl.classList.remove('is-hidden');
};

export const hideLoader = () => {
  loaderEl.classList.add('is-hidden');
};

export const showLoadMoreButton = () => {
  loadMoreBtnEl.classList.remove('is-hidden');
};

export const hideLoadMoreButton = () => {
  loadMoreBtnEl.classList.add('is-hidden');
};
