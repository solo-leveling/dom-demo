var img = document.querySelector("img");
img.addEventListener("mouseenter",function(){
    img.setAttribute("src","/images/facebook.png");
});
img.addEventListener("mouseleave",function(){
    img.setAttribute("src","/images/apple.png");
});