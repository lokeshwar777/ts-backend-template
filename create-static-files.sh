#!/bin/bash

# GPT generated

# Create folders
mkdir -p public/{css,js,data,images,media}

# HTML
cat > public/index.html <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Static Test</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <h1>Hello Static World!</h1>

  <img src="/images/logo.png" alt="Logo" width="150" />
  <img src="/images/photo.jpg" alt="Photo" width="150" />
  <img src="/images/icon.svg" alt="SVG Icon" width="100" />

  <div id="output"></div>

  <script src="/js/app.js"></script>
</body>
</html>
EOF

# CSS
cat > public/css/style.css <<EOF
body {
  background-color: #f0f0f0;
  font-family: sans-serif;
  text-align: center;
}
img {
  margin: 10px;
}
h1 {
  color: darkblue;
}
EOF

# JS
cat > public/js/app.js <<EOF
console.log("JS loaded from static!");

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  output.innerText = "This message was inserted by app.js!";
});
EOF

# JSON
cat > public/data/data.json <<EOF
{
  "name": "Loki",
  "role": "Developer"
}
EOF

# SVG
cat > public/images/icon.svg <<EOF
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
EOF

# Download real assets
curl -o public/images/logo.png https://dummyimage.com/150x150/000/fff.png\&text=Logo
curl -o public/images/photo.jpg https://dummyimage.com/200x100/aaa/000.jpg\&text=Photo
curl -o public/media/resume.pdf https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
curl -o public/media/song.mp3 https://file-examples.com/storage/fe740ac4e1bbf0134e1fa0e/2017/11/file_example_MP3_700KB.mp3
curl -o public/media/video.mp4 https://file-examples.com/storage/fe740ac4e1bbf0134e1fa0e/2018/04/file_example_MP4_640_3MG.mp4
curl -o public/favicon.ico https://www.google.com/favicon.ico

echo "✅ All static files organized and created in ./public"
