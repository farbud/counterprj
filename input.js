// 1.Easy way = window promt
// 2.professional way = HTML textbox


// let userName;
// userName = window.prompt("what is your user name");
// console.log(userName);

let userName;


document.getElementById("mysub").onclick = function(){
    userName = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `hello ${userName}` 
}