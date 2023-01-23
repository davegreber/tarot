let images = [
    {url: "https://nftstorage.link/ipfs/QmYq8ssfkoWsCTyNU5minSZ5q4GyUQHeEM1x3k1T3SssjZ", text: "1"},
    {url: "https://nftstorage.link/ipfs/QmTzkq4T5Ew7K6vnP3Z8GW72cZUpatV3ejm4qFa9RD3kJe", text: "2"},
    {url: "https://nftstorage.link/ipfs/Qmb4U2uqbz8NmeZUopeiXKs2tysksVdwy24a4RiUALyFZw", text: "3"},
    {url: "https://nftstorage.link/ipfs/QmdEHYPaUzS9dJSg8MpcUvxHsJdosvFap8MzpX2Y7Y8Veu", text: "4"},
    {url: "https://nftstorage.link/ipfs/QmYGmm3BWmmUkLcBAC1oeoZgCHbuPvfXqzBx17GhMkzU3Y", text: "5"}
        ];

        var generateButton = document.getElementById("generate-button");
        var randomImage = document.getElementById("random-image");
        var imageText = document.getElementById("image-text");
  
        generateButton.addEventListener("click", function() {
            var randomIndex = Math.floor(Math.random() * images.length);
            randomImage.src = images[randomIndex].url;
            //Remove the previous text node if any
            if(imageText.firstChild) imageText.removeChild(imageText.firstChild);
            var textNode = document.createTextNode(images[randomIndex].text);
            imageText.appendChild(textNode);
            randomImage.style.display = "block";
    
  });

/*
  <!DOCTYPE html>
<html>
  <head>
    <title>Random Image Generator</title>
    <style>
        /*Added styles to center the container
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /*added style to center the image and text
        #random-image, p{
            margin: 0 auto;
            text-align: center;
        }
    </style>
  </head>
  <body>
    <button id="generate-button">Generate Random Image</button>
    <br><br>
    <div class="container">
        <img id="random-image" style="display: none;">
        <p id="image-text"></p>
    </div>
    <script>
        var images = [
            {url: "https://picsum.photos/200", text: "image1"},
            {url: "https://picsum.photos/200", text: "image2"},
            {url: "https://picsum.photos/200", text: "image3"},
            {url: "https://picsum.photos/200", text: "image4"},
            {url: "https://picsum.photos/200", text: "image5"}
        ];
        var generateButton = document.getElementById("generate-button");
        var randomImage = document.getElementById("random-image");
        var imageText = document.getElementById("image-text");

        generateButton.addEventListener("click", function() {
            var randomIndex = Math.floor(Math.random() * images.length);
            randomImage.src = images[randomIndex].url;
            var textNode = document.createTextNode(images[randomIndex].text);
            imageText.appendChild(textNode);
            randomImage.style.display = "block";
        });
    </script>
  </body>
</html>
//</body>
//

<!DOCTYPE html>
<html>
  <head>
    <title>Random Image Generator</title>
    <style>
        /*Added styles to center the container
        .container{
          display: flex;
          justify-content: center;
          align-items: center;
      }
      added style to center the image and text
      #random-image, p{
          margin: 0 auto;
          text-align: center;
      }
  </style>
</head>
<body>
  <button id="generate-button">Generate Random Image</button>
  <br><br>
  <div class="container">
      <img id="random-image" style="display: none;">
      <p id="image-text"></p>
  </div>
  <script>
      var images = [
          {url: "https://picsum.photos/200", text: "image1"},
          {url: "https://picsum.photos/200", text: "image2"},
          {url: "https://picsum.photos/200", text: "image3"},
          {url: "https://picsum.photos/200", text: "image4"},
          {url: "https://picsum.photos/200", text: "image5"}
      ];
      var generateButton = document.getElementById("generate-button");
      var randomImage = document.getElementById("random-image");
      var imageText = document.getElementById("image-text");

      generateButton.addEventListener("click", function() {
          var randomIndex = Math.floor(Math.random() * images.length);
          randomImage.src = images[randomIndex].url;
          //Remove the previous text node if any
          if(imageText.firstChild) imageText.removeChild(imageText.firstChild);
          var textNode = document.createTextNode(images[randomIndex].text);
          imageText.appendChild(textNode);
          randomImage.style.display = "block";
      });
  </script>
</body>
</html>






*/