'use strict';

// modal elements
const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal button
const btnCloseModal = document.querySelector('.close-modal');


console.log('Open buttons: ', btnsOpenModalEl.length);

const openModal = function () {
    // remove hidden classname in modal
    modalEl.classList.remove('hidden');

    // remove hidden classname in overlay
    overlayEl.classList.remove('hidden');
};


const closeModal = function () {
    modalEl.classList.add('hidden');

    overlayEl.classList.add('hidden');
};


btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
