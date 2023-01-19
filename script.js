let images = [
    "https://nftstorage.link/ipfs/QmYq8ssfkoWsCTyNU5minSZ5q4GyUQHeEM1x3k1T3SssjZ",
    "https://nftstorage.link/ipfs/QmTzkq4T5Ew7K6vnP3Z8GW72cZUpatV3ejm4qFa9RD3kJe",
    "https://nftstorage.link/ipfs/Qmb4U2uqbz8NmeZUopeiXKs2tysksVdwy24a4RiUALyFZw",
    "https://nftstorage.link/ipfs/QmdEHYPaUzS9dJSg8MpcUvxHsJdosvFap8MzpX2Y7Y8Veu",
    "https://nftstorage.link/ipfs/QmYGmm3BWmmUkLcBAC1oeoZgCHbuPvfXqzBx17GhMkzU3Y"
        ];

  let generateButton = document.getElementById("generate-button");
  let randomImage = document.getElementById("random-image");

  generateButton.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomIndex];
    randomImage.style.display = "block";
  });