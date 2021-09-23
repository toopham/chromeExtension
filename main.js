
const couchify = function (string){

    //search for is and get the index after

    const nouns = ['my', 'a', 'the', 'their', 'your', 'our', 'those'];

    const splitString = string.split(' ');

    for (let i = 0; i < splitString.length; i += 1){
        if (nouns.includes(splitString[i])){
        splitString[i + 1] = '<a style="color: red">couch</a>';
        }
    }

    let newString = splitString.join(' ');

    return newString;
}


const header = document.createElement('h1');
header.innerHTML = 'TESTING';
document.body.appendChild(header);



const imgArr = document.querySelectorAll("img");

for (let i = 0; i < imgArr.length - 1; i += 1){
  imgArr[i].src = 'https://github.com/matthewhuang24/chromeExtension/blob/master/images/couch.png?raw=trueimages/couch.png';
}

const elArr= ['h1', 'p'];

for(const el of elArr){
    const elNouns = document.querySelectorAll(el);

    for (let i = 0; i < elNouns.length - 1; i += 1){
        console.log(elNouns[i]);
        elNouns[i].innerHTML = couchify(elNouns[i].innerText);
    }
}