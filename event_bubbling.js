var body = document.querySelector("body");
var container = document.querySelector(".container");
var p = document.querySelector("p");
var special = document.querySelector(".special");

body.addEventListener("click",function(e){
    alert("body was clicked");
});
container.addEventListener("click",function(e){
    alert("container was clicked");
});
p.addEventListener("click",function(e){
    alert("paragraph was clicked");
});
special.addEventListener("click",function(e){
    alert("span was clicked");
    e.stopPropagation();
});