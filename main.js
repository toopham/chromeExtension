const header = document.createElement('h1');
header.innerHTML = 'TESTING';
document.body.appendChild(header);



const imgArr = document.querySelectorAll("img");

for (let i = 0; i < imgArr.length - 1; i += 1){
  imgArr[i].src = 'https://github.com/matthewhuang24/chromeExtension/blob/master/images/couch.png?raw=trueimages/couch.png';
}


const divNouns = document.querySelectorAll("div")

let str='my phone is the best';

const couchify = function (string){

    //search for is and get the index after

    const nouns = ['my', 'a', 'the', 'their', 'your', 'our', 'those'];

    const splitString = string.split(' ');

    for (let i = 0; i < splitString.length; i += 1){
        if (nouns.contains(splitString[i])){
        splitString[i + 1] = 'couch';
        }
    }

    let newString = splitString.join(' ');

    return newString;
}

console.log(couchify(str));