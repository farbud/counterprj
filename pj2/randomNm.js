


const mybtn = document.getElementById("mybtn");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max = 100;
let randomNum;


mybtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max)+ min;
    mylabel.textContent = randomNum;
}