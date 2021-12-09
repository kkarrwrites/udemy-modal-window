'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonShowModal = document.querySelectorAll('.show-modal');

// Open Modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < buttonShowModal.length; i++)
  buttonShowModal[i].addEventListener('click', openModal); // Clicking on Modal Buttons opens Modal

// Close Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

buttonCloseModal.addEventListener('click', closeModal); // Pressing X Button closes Modal
overlay.addEventListener('click', closeModal); // CliCking outside Modal closes Modal
document.addEventListener('keydown', function (k) {
  if (k.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}); // Pressing Esc closes Modal
