let tempArray = [1,2,3,4,5];

let TraverseNumber = document.getElementById("TraverseNumbers");
let TraverseRun = document.getElementById("TraverseRun");
let TraverseText = document.getElementById("TraverseText");

function TraverseArray(){
  let string = "";
  let loopNum = TraverseNumber.value;

  for (let x = 0; x < loopNum; x++){
    console.log("Run");
    string += tempArray[x].toString(); 
  }
  TraverseText.innerHTML = string;

}

TraverseRun.addEventListener("click", TraverseArray);

let ValidateRun = document.getElementById("ValidateRun");
let ValidateNumber = document.getElementById("ValidateNumber");
let ValidateText = document.getElementById("ValidateText");

function InputValidate(){
  let number = ValidateNumber.value;

  if (number > 100 || number < 0){
    ValidateText.innerHTML = "Enter a number between 0 and 100";
  }
  else{
    ValidateText.innerHTML = "Congrats";
  }
}

ValidateRun.addEventListener("click", InputValidate);

let TotalRun = document.getElementById("TotalRun");
let TotalText = document.getElementById("TotalText");

let total = 0;

function increment(){
  total++;
  TotalText.innerHTML = total.toString();
  
}


TotalRun.addEventListener("click", increment);