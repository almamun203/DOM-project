function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const index = Math.round(Math.random()*25);
    const alphabet = alphabets[index];
    return alphabet;
}
function setBGColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
 