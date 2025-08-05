let backBtn=document.querySelector(".container .scientific-btns .back-btn")
let scientificbtnBox=document.querySelector(".container .scientific-btns");
let lightModeBtn=document.querySelector(".container .input-box .toggle-btn #light-mode-btn");
let darkModeBtn=document.querySelector(".container .input-box .toggle-btn #dark-mode-btn");
let container=document.querySelector(".container");
let input=document.querySelector(".container .input-box input")
let result=document.querySelector(".container .input-box .result")
let allBtns=document.querySelectorAll(".container .btns-box .btn");

for(let item of allBtns){
    item.addEventListener("click",(e)=>{
        let btnText=e.target.innerHTML;
        if(btnText == "x"){
            btnText = '*';
        }
        input.value+=btnText;
    })
}


backBtn.addEventListener("click",()=>{
    scientificbtnBox.classList.toggle("active")
})
lightModeBtn.addEventListener("click",()=>{
    container.classList.add("light");
    lightModeBtn.style.display="none";
    darkModeBtn.style.display="block"
    
})
darkModeBtn.addEventListener("click",()=>{
    container.classList.remove("light");
    lightModeBtn.style.display="block";
    darkModeBtn.style.display="none"
})
clearinput=()=>{
    input.value="";
    result.innerHTML=0;
}
let calculate=()=>{
    result.innerHTML=eval(input.value);
}
let backspace=()=>{
    input.value=input.value.substr(0,input.value.length-1);
    if(input.value == 0){
        result.innerHTML="0";
    }
}

