let  btn = document.querySelector("#btn");
let currentMode = "light";

btn.addEventListener("click",function(){
    if(currentMode === "light"){
        document.querySelector("body").style.backgroundColor = "black"
    }else{
        document.querySelector("body").style.backgroundColor = "white"

    }
})