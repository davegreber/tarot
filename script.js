let images = [
    {url: "https://nftstorage.link/ipfs/QmYq8ssfkoWsCTyNU5minSZ5q4GyUQHeEM1x3k1T3SssjZ", text: "1"},
    {url: "https://nftstorage.link/ipfs/QmTzkq4T5Ew7K6vnP3Z8GW72cZUpatV3ejm4qFa9RD3kJe", text: "2"},
    {url: "https://nftstorage.link/ipfs/Qmb4U2uqbz8NmeZUopeiXKs2tysksVdwy24a4RiUALyFZw", text: "3"},
    {url: "https://nftstorage.link/ipfs/QmdEHYPaUzS9dJSg8MpcUvxHsJdosvFap8MzpX2Y7Y8Veu", text: "4"},
    {url: "https://nftstorage.link/ipfs/QmYGmm3BWmmUkLcBAC1oeoZgCHbuPvfXqzBx17GhMkzU3Y", text: "5"}
        ];

        let generateButton = document.getElementById("generate-button");
        let randomImage = document.getElementById("random-image");
        let imageText = document.getElementById("image-text");
  
        generateButton.addEventListener("click", function() {
            let randomIndex = Math.floor(Math.random() * images.length);
            randomImage.src = images[randomIndex].url;
            //Remove the previous text node if any
            if(imageText.firstChild) imageText.removeChild(imageText.firstChild);
            let textNode = document.createTextNode(images[randomIndex].text);
            imageText.appendChild(textNode);
            randomImage.style.display = "block";
    
  });

