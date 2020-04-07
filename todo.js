
var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");

input.addEventListener("keypress",function(e){  
    if(e.which == 13){             
        // ul.innerHTML += "<li style='position: relative; left: 400px;'>"+this.value+"</li>";  
        // this.value = "";
        var li = document.createElement("li");
        li.innerText = this.value;
        ul.append(li);
        this.value = "";
    } 
});