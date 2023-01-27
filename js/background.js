const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; //js에서 html element를 생성함

document.body.appendChild(bgImage); //appendChild는 body에 html추가
