const header = document.createElement('h1');
header.innerHTML = 'TESTING';
document.body.appendChild(header);



const imgArr = document.querySelectorAll("img");

console.log(imgArr);

for (let i = 0; i < imgArr.length - 1; i += 1){
  imgArr[i].src = 'https://github.com/matthewhuang24/chromeExtension/blob/master/images/couch.png?raw=trueimages/couch.png';
  console.log(imgArr[i].src);
}