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
document.getElementByClassName('popupForm').onsubmit = function(event) {
  const name = doacument.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert(`Thank you for the sacrifice, ${name}!`);
    popup.style.display = 'none'; //closes popup after submitting
  } else {
    alert('Your soul is mine anyways, so, please fill both out.');
  }
}

document.addEventListener('DOMContentLoaded', function() { // event ensures that the JavaScript runs after the HTML structure is loaded
  const navtoggle = document.getElementById('navtoggle');
  const siteHeader = document.getElementById('site-header');
  const siteNav = document.getElementById('site-nav');
  const siteNavLinks = siteNav.querySelectorAll('a');
  const hoverEffect = document.querySelector('.hover-effect');

  const nav = [91, 102, 196, 85, 93];
  const offset = [52, 144, 291, 428.5, 514];

  if (navtoggle && siteHeader && siteNav && hoverEffect) {
      navtoggle.addEventListener('click', function(event) {
          event.preventDefault();
          if (siteHeader.classList.contains('menu-open')) {
              siteHeader.classList.remove('menu-open');
              siteHeader.style.height = '77px';
          } else {
              siteHeader.classList.add('menu-open');
              siteHeader.style.height = '460px';
          }
      });

      function updateHoverEffect(element) {
          const index = Array.from(siteNavLinks).indexOf(element);
          if (index !== -1) {
              hoverEffect.style.width = nav[index] + 'px';
              hoverEffect.style.left = offset[index] + 'px';
          }
      }

      // Initial setup
      const activeLink = siteNav.querySelector('a.active');
      if (activeLink) {
      updateHoverEffect(activeLink);
      }

      setTimeout(function() {
      document.body.classList.add('ready');
      }, 100);

      siteNav.addEventListener('mouseenter', function() {
          siteNavLinks.forEach(function(link) {
              link.addEventListener('mouseenter', function() {
                  updateHoverEffect(this); //html element anchor
                  siteNav.classList.add('normal');
              });
          });
      });

      siteNav.addEventListener('mouseleave', function() {
          if (activeLink) {
              updateHoverEffect(activeLink);
          }
          siteNav.classList.remove('normal');
      });
  }
});






document.addEventListener('DOMContentLoaded', function() {
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselImages = document.querySelectorAll('.carousel-slide img');
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  console.log(carouselImages[0].clientWidth);
  let counter = 0;
  const size = carouselImages[0].clientWidth;
  console.log("size: ", size);

  function slideCarousel() {
      console.log("slideCarousel called. counter:", counter, "translateX:", -size * counter + "px");
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }

  nextBtn.addEventListener('click', () => {
      if (counter < carouselImages.length - 1) {
          counter++;
          slideCarousel();
      } else {
          counter = 0;
          slideCarousel();
      }
  });

  prevBtn.addEventListener('click', () => {
      if (counter > 0) {
          counter--;
          slideCarousel();
      } else {
          counter = carouselImages.length - 1;
          slideCarousel();
      }
  });
});



const sunModeToggle = document.getElementById('sun-mode-toggle');
if (sunModeToggle) {
    console.log("Sun mode toggle button found"); // Check if button is found.
    sunModeToggle.addEventListener('click', () => {
        console.log("Sun mode toggle clicked"); // Check if click event is firing.
        document.body.classList.toggle('sun-mode');
        console.log("Body classes:", document.body.classList); // Check classes on body.
    });
} else {
    console.log("Sun mode toggle button NOT found");
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











// //for the gallery
// const images = [
//   "https://i.imgur.com/2OlOBxll.jpg",
//   "https://i.imgur.com/npg1FsWl.jpg",
//   "https://i.imgur.com/A3pUb3Tl.jpg",
//   "https://i.imgur.com/aDavgXTl.jpg",
//   "https://i.imgur.com/ABL9W3gl.jpg",
//   "https://i.imgur.com/WqGEMbkl.jpg",
//   "https://i.imgur.com/AZG8lzEl.jpg",
//   "https://i.imgur.com/bZZE8GAl.jpg"
// ];
// let currentIndex = 0;
// let likeCount = 0;

// const galleryItems = document.getElementByClass('galleryItem');
// const likeButton = document.getElementById('likeButton');
// const likeCountDisplay = document.getElementById('likeCount');
// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');

// //function to update the image
// function updateImage() {
//   galleryItems.src = images[currentIndex];
// }
// //like button
// function handleLike(){
//   likeCount++;
//   likeCountDisplay.textContent = `Likes: ${likeCount}`;
// }
// //previous button
// prevButton.addEventListener('click', () => {
//   currentIndex = (currentIndex === 0) ? images.length - 1: currentIndex - 1;
//   updateImage();
// });
// //next button
// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex === images.length - 1) ? 0: currentIndex + 1;
//   updateImage();
// });
// //like button the sequel
// likeButton.addEventListener('click', handleLike);