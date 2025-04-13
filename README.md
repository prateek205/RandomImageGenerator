# 🖼️ Random Image Generator
This is simple web project which generate random images by using `onClick` method and at regular interval by using `setInterval` method.

## 🚀 Features
- Automatically Display Images every Few Second.
- Easy to use and Deploy.
- Simple and clean User-Interface

## 💻 Technology Used
- HTML,
- CSS,
- JavaScript.

## 📸 Screenshot
### 1. using `onClick` Method
![Demo_Screenshot](https://github.com/prateek205/RandomImageGenerator/blob/dd17882fb253e9de9aa615a915e1930763d56acf/asset/screenshot/asset/screenshot/randomImageGenerator_03.png)
### 2. using `setInterval` Method
![Demo_Screenshot](https://github.com/prateek205/RandomImageGenerator/blob/dd17882fb253e9de9aa615a915e1930763d56acf/asset/screenshot/randomImagesGenerator_02.png)

## 📽️ Demo
#### Live Demo: [https://github.com/user-attachments/assets/62f7d59c-22db-4c90-830b-8bbb27955f25](https://random-image-generator-six.vercel.app/)

## 🧠 How it Works
The app uses JavaScript’s `setInterval` method to change the image source (`src`) of an `img` tag every few seconds. The image URLs can be from a predefined array or an external API (like Unsplash or Picsum).

## 📂 Project Structure
```
.
├── Random Color Generator
├── assets/
│   ├── logo
│   ├── screenshot
│   └── video
├── index.html
├── index.js
└── style.css
```
## 🛠️ Example of code (JavaScript)
### 1. By using `setInterval` Method
#### `Index.html`
```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project | Random Images Generator</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="asset/favicon.ico" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <div class="loading">Loading Images...</div>
      <img class="img" id="picsumImage" />
    </div>
    <script src="index.js"></script>
  </body>
  </html>
```
#### `Index.js`
```
function getRandomImages() {
  const img = Math.random() * 1000;
  document.getElementById(
    "picsumImage"
  ).src = `https://picsum.photos/1024/500?${img}`;
}

setInterval(() => {
  getRandomImages();
}, 3000);
```
### 2. By using `onClick` Method
#### `Index.html`
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project | Random Images Generator</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="asset/favicon.ico" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <div class="heading"><button>Generate Random Images</button></div>
      <img class="img" id="picsumImage" />
    </div>
    <script src="index.js"></script>
  </body>
  </html>
```
#### `Index.js`
```
const button = document.querySelector("button");

function getRandomImages() {
  const img = Math.random() * 1000;
  document.getElementById(
    "picsumImage"
  ).src = `https://picsum.photos/1024/500?${img}`;
}

button.addEventListener('click', ()=>{
    getRandomImages()
})
```
## 🔧 Setup Instruction
#### 1. Clone Repository
```
git clone https://github.com/prateek205/RandomImageGenerator.git
cd RandomImageGenerator
```

## 📦 Deployment
#### You can easily deploy this app using:
- GitHub Pages
- Vercel
- Netlify
