const images = ['bg0.jpeg', 'bg1.jpeg', 'bg2.jpeg', 'bg3.jpeg', 'bg4.jpeg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(images/${chosenImage})`;
