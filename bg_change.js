var li = document.querySelectorAll("li");
var btn = document.querySelector("button");
console.log(li.length);
btn.addEventListener("click",function(){
    for(var i =0;i<li.length;i++){
    li[i].style.color = "red";
}
});