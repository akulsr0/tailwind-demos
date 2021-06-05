function appendImages() {
    const images = document.getElementById('images');
  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  
    const imgUrls = new Array(20)
      .fill(0)
      .map((e) => `https://picsum.photos/id/${getRandomNumber(1, 150)}/100/100`);
  
    for (let imgUrl of imgUrls) {
      let img = document.createElement('img');
      img.src = imgUrl;
      img.classList = 'mr-1 my-1 rounded cursor-pointer';
      images.appendChild(img);
    }
  }
  
  function main() {
    appendImages();
  }
  
  main();