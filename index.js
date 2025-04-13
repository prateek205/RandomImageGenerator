// console.log("object");

// const button = document.querySelector("button");

function getRandomImages() {
  const img = Math.random() * 1000;
  document.getElementById(
    "picsumImage"
  ).src = `https://picsum.photos/1024/500?${img}`;
}

// button.addEventListener('click', ()=>{
//     getRandomImages()
// })

setInterval(() => {
  getRandomImages();
}, 3000);


