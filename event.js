var box = document.querySelector(".box");
var x = document.querySelector(".x");
var y = document.querySelector(".y");

box.addEventListener("mousemove",function(e){
    x.innerText = e.clientX;
    y.innerText = e.clientY;
});