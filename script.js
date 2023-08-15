const images = [
    "/images/industry1.png",
    "/images/industry2.png",
    "/images/industry3.png"
];

let currentIndex = 1;

function changeImage(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % images.length;
    }

    const firstImage = document.getElementById("firstImage");
    const secondImage = document.getElementById("secondImage");
    const thirdImage = document.getElementById("thirdImage");

    firstImage.src = images[(currentIndex + images.length - 1) % images.length];
    secondImage.src = images[currentIndex];
    thirdImage.src = images[(currentIndex + 1) % images.length];
}



const small_images = [
    "images/industry1.png",
    "images/industry2.png",
    "images/industry3.png"
];

let smallimg_currentIndex = 0;

function change_smallImage(direction) {
    if (direction === 'left') {
        smallimg_currentIndex = (smallimg_currentIndex - 1 + small_images.length) % small_images.length;
    } else if (direction === 'right') {
        smallimg_currentIndex = (smallimg_currentIndex + 1) % small_images.length;
    }

    const currentImage = document.getElementById("currentImage");
    currentImage.src = small_images[smallimg_currentIndex];
}