/* eslint linebreak-style: ["error", "windows"] */

const dropBtn = document.getElementById('drop-btn');
const hamMenu = document.getElementById('hamburger-menu');
const content = document.querySelector('.content');
const crossBtn = document.querySelector('.cross-bar');

dropBtn.addEventListener('click', () => {
  dropBtn.style.display = 'none';
  hamMenu.style.display = 'block';
  content.style.filter = 'blur(4px)';

  crossBtn.addEventListener('click', () => {
    dropBtn.style.display = 'block';
    hamMenu.style.display = 'none';
    content.style.filter = 'none';
  });
});