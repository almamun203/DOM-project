document.getElementById('lime').addEventListener('click',
function(){
    document.body.style.backgroundColor='lime';
}
)

function makeCyan(){
    document.body.style.backgroundColor='cyan';
}

const makeEmerald = document.getElementById('emerald');
       makeEmerald.onclick = makeEmer;
       function makeEmer(){
        document.body.style.backgroundColor='brown';
       }
       document.getElementById('green').addEventListener('click',function(){
        document.body.style.backgroundColor='olive';
       })


// function play(){
//     const home = document.getElementById('home');
//     home.classList.add('hidden');
//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden');
// }
function play(){
    hideElement('home');
    showElement('playground');
    continuePlay();
}
function continuePlay(){
 const alphabet =  getARandomAlphabet();
 const currentAlphabetElement = document.getElementById('currentElement');
 currentAlphabetElement.innerText = alphabet;

setBGColorById(alphabet);

}
document.addEventListener('keyup' , function(event){
 const playerPressed = event.key;
 const currentAlphabet = document.getElementById('currentElement');
 const targetAlphabet = currentAlphabet.innerText;
 const expectedAlphabet = targetAlphabet.toLowerCase();
 if(playerPressed === expectedAlphabet){
   continuePlay();
   console.log('Wow');
 }
 else{
console.log('Try Again');
 }
})