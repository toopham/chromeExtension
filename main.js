
const couchify = function (string){

    //search for is and get the index after

    const nouns = ['my', 'a', 'an', 'the', 'in', 'their', 'your', 'our', 'those'];

    const splitString = string.split(' ');

    for (let i = 0; i < splitString.length; i += 1){
        if (nouns.includes(splitString[i].toLowerCase())){
            if(splitString[i]==='an') splitString[i]='a';
            splitString[i + 1] = '<a style="color: red" class="couchy">couch</a>';
        }
        else if(splitString[i].slice(-3)==='ing'){
            splitString[i]='buying';
        }
    }

    let newString = splitString.join(' ');

    return newString;
}



const imgArr = document.querySelectorAll("img");

for (let i = 0; i < imgArr.length - 1; i += 1){
  imgArr[i].src = 'https://github.com/matthewhuang24/chromeExtension/blob/master/images/couch.png?raw=trueimages/couch.png';
}

const elArr= ['h1', 'h2', 'p', 'a', 'div'];

for(const el of elArr){
    const elNouns = document.querySelectorAll(el);

    for (let i = 0; i < elNouns.length - 1; i += 1){
        if(!elNouns[i].innerHTML.includes('<') && !elNouns[i].innerHTML.includes('>')){
            elNouns[i].innerHTML = couchify(elNouns[i].innerText);
        }
    }
}


const couchy = document.getElementsByClassName("couchy");

//add click when create new flyingCouch
const addClick = function(){
    const flyingCouches = document.getElementsByClassName("flyCouch");
    for(let couch of flyingCouches){
        couch.addEventListener('click', function(e) {
            const imgDollar = document.createElement('img');
            this.innerHTML= '<img width="10%" src="https://bestanimations.com/media/dollars/1429847945dollar-sign-symbol-22-green.gif">';
            this.style.display = "none";
        });
    }
}


for(let couch of couchy){
    couch.addEventListener('click',(e)=>{
        const flyCouch = document.createElement('div');
        flyCouch.style.position = 'absolute';
        flyCouch.setAttribute('class','flyCouch');
        const randTop = Math.floor(Math.random()*100);
        const randLeft= Math.floor(Math.random()*100);
        flyCouch.style.top = `${randTop}`+'%';
        flyCouch.style.left = `${randLeft}`+'%';
        flyCouch.style.border = '1px red solid';
        const imgCouch = document.createElement('img');
        imgCouch.src = 'https://raw.githubusercontent.com/matthewhuang24/chromeExtension/master/images/couch-48.png';
        flyCouch.appendChild(imgCouch);
        document.body.appendChild(flyCouch);

        addClick();
    })
}





const move = function(){
    const flyingCouches = document.getElementsByClassName("flyCouch");
    for(let flyCouch of flyingCouches){
        const randTop = Math.random()+Number(flyCouch.style.top.replace('%',''));
        const randLeft= Math.random()+Number(flyCouch.style.left.replace('%',''));;
        flyCouch.style.top = `${randTop}`+'%';
        flyCouch.style.left = `${randLeft}`+'%';

        if(randTop > 100 || randLeft > 100){
            flyCouch.style.display = 'none';
        }
    }

    setTimeout(move.bind(this), 250);

}

setTimeout(move.bind(this), 250);
