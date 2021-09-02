var angle1 = document.querySelector("#angle1")
var angle2 = document.querySelector("#angle2")
var angle3 = document.querySelector("#angle3")
var thirdAngleBtn = document.querySelector("#third-angle");
var outputDiv = document.querySelector("#outputDiv");


thirdAngleBtn.addEventListener("click", clickHandler);


function clickHandler(){
    
    if(Number(angle1.value)<=0 || (Number(angle2.value)<=0 || Number(angle3.value)<=0)){
        outputDiv.innerText = "Looks like you enterd invalid value of Angles. "
        return;
    }
   
    
    if((Number(angle1.value) + Number(angle2.value) + Number(angle3.value)) === 180){
        outputDiv.innerText ="Yeah! These Angles form a Triangle."
        return;
    }
   else{
    outputDiv.innerText =" Oops! Looks like these Angles don not form a Triangle."
   }
}