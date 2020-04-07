var i = 0; 
var a = document.getElementsByTagName("span");
var timer;
var btn = document.getElementsByTagName("button");
btn[0].addEventListener("click",function(){
    if(btn[0].innerText == "Start"){
        btn[0].innerText = "Stop";
       timer=  setInterval(() => {
            a[0].innerText=i;
            i++;
        }, 1000);       
    }else{
        btn[0].innerText = "Start";
        clearInterval(timer);
    }
});
