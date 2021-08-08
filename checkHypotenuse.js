var base = document.querySelector("#base")
var perpendicular = document.querySelector("#perpendicular")
var calculateHypotenuseBtn = document.querySelector("#calculate-Hypotenuse-Btn")
var outputDiv = document.querySelector("#outputDiv")


calculateHypotenuseBtn.addEventListener("click",clickHandler)

function clickHandler(){
    
    if(Number(base.value) <= 0  || Number(perpendicular.value) <= 0){
        outputDiv.innerText = "Please Enter the valid value of base and perpendicular. "
    }

    else
    {outputDiv.innerText = "Length of Hypotenuse of the triangle is " + calculateHypotenus(Number(base.value),Number(perpendicular.value));
}
}

function calculateHypotenus(baseLength,perpendicularLength){
  var  squareRoot = Math.sqrt(calculateSumOfSquareOfSides(baseLength,perpendicularLength));
 return squareRoot.toFixed(2)
}

function calculateSumOfSquareOfSides(baseIs,perpendicularIs){
    var sumOfSquare = baseIs**2 + perpendicularIs**2;
    return sumOfSquare
}