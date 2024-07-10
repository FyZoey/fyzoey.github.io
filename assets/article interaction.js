let currentImageIndex = 0;

function openImage(img) {
  const overlay = document.querySelector('.overlay');
  const expandedImage = document.getElementById('expanded-image');
  const photogroupImages = document.querySelectorAll('.photogroup img');

  expandedImage.src = img.src;
  overlay.classList.add('active');

  currentImageIndex = Array.from(photogroupImages).indexOf(img); 

  expandedImage.addEventListener('click', closeImage);
}

function closeImage() {
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('active');
}

function navigateToPreviousImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    const photogroupImages = document.querySelectorAll('.photogroup img');
    const imageToDisplay = photogroupImages[currentImageIndex];
    openImage(imageToDisplay);
  }
}

function navigateToNextImage() {
  const photogroupImages = document.querySelectorAll('.photogroup img');
  if (currentImageIndex < photogroupImages.length - 1) {
    currentImageIndex++;
    const imageToDisplay = photogroupImages[currentImageIndex];
    openImage(imageToDisplay);
  }
}