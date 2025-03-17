// this is for the newsletter button
const popup = document.getElementById('signup-popup');
const popupButton = document.getElementById('newsletter-button');
const closeButton = document.getElementById('close-button');
popupButton.onclick = function() {
  popup.style.display = 'flex';
}
closeButton.onclick = function() {
  popup.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == popup) {
      popup.style.display = 'none';
  }
}
document.getElementById('popupForm').onsubmit = function(event) {
  const name = doacument.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert(`Thank you for the sacrifice, ${name}!`);
    popup.style.display = 'none'; //closes popup after submitting
  } else {
    alert('Your soul is mine anyways, so, please fill both out.');
  }
}



// let likeCount = 0;

// // const galleryItems = document.getElementByClass('galleryItem');
// // const likeButton = document.getElementById('likeButton');
// // const likeCountDisplay = document.getElementById('likeCount');
// // const prevButton = document.getElementById('prevButton');
// // const nextButton = document.getElementById('nextButton');
// let likeCounts = [0, 0, 0, 0];

// // Get all slideshow items
// const slideshowItems = document.querySelectorAll('.galleryItem');
// let currentIndex = 0;

// // Show the current image
// function showImage(index) {
//   // Hide all slideshow items
//   slideshowItems.forEach(item => {
//     item.querySelector('.galleryImage').classList.remove('active');
// });

// // Show the current image
//   slideshowItems[index].querySelector('.galleryImage').classList.add('active');
// }

// // Handle next button click
// document.getElementById('nextButton').addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % slideshowItems.length;
//   showImage(currentIndex);
// });

// // Handle previous button click
// document.getElementById('prevButton').addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + slideshowItems.length) % slideshowItems.length;
//   showImage(currentIndex);
// });

// // Handle like button click for each image
// function handleLike(index) {
//   likeCounts[index]++;
//   document.getElementById(`likeCount ${index}`).textContent = `Likes: ${likeCounts[index]}`;
// }

// // Initialize with the first image
// showImage(currentIndex);











//for the gallery
const images = [
  "https://i.imgur.com/2OlOBxll.jpg",
  "https://i.imgur.com/npg1FsWl.jpg",
  "https://i.imgur.com/A3pUb3Tl.jpg",
  "https://i.imgur.com/aDavgXTl.jpg",
  "https://i.imgur.com/ABL9W3gl.jpg",
  "https://i.imgur.com/WqGEMbkl.jpg",
  "https://i.imgur.com/AZG8lzEl.jpg",
  "https://i.imgur.com/bZZE8GAl.jpg"
];
let currentIndex = 0;
let likeCount = 0;

const galleryItems = document.getElementByClass('galleryItem');
const likeButton = document.getElementById('likeButton');
const likeCountDisplay = document.getElementById('likeCount');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

//function to update the image
function updateImage() {
  galleryItems.src = images[currentIndex];
}
//like button
function handleLike(){
  likeCount++;
  likeCountDisplay.textContent = `Likes: ${likeCount}`;
}
//previous button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1: currentIndex - 1;
  updateImage();
});
//next button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0: currentIndex + 1;
  updateImage();
});
//like button the sequel
likeButton.addEventListener('click', handleLike);