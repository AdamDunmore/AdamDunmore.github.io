let AND = document.getElementById("AND");
let OR = document.getElementById("OR");
let NOT = document.getElementById("NOT");

let LOB1 = document.getElementById("LogicalOpBox1")

AND.addEventListener("mouseover", () => {AND.innerHTML = "A logical operator which ensures multiple conditions are met"
LOB1.style.height = "100px"});
AND.addEventListener("mouseout", () => {AND.innerHTML = "AND"
LOB1.style.height = "80px"});

OR.addEventListener("mouseover", () => {OR.innerHTML = "A logical operator which ensures one of multiple conditions are met"
LOB1.style.height = "100px"});
OR.addEventListener("mouseout", () => {OR.innerHTML = "OR"
LOB1.style.height = "80px"});

NOT.addEventListener("mouseover", () => {NOT.innerHTML = "A logical operator which takes a proposition and returns the opposite";
LOB1.style.height = "100px"});
NOT.addEventListener("mouseout", () => {NOT.innerHTML = "NOT"
LOB1.style.height = "80px"});

