const VList = document.getElementById("VList");

const PC = document.getElementById("PC");
const RC = document.getElementById("RC");
const LC = document.getElementById("LC");
const RChoice = document.getElementById("RChoice");

const DefaultList = `
    <li id="PC">Presence</li>
    <li id="RC">Range</li>
    <li id="LC">Length</li>
    <li id="RChoice">Restricted Choice</li>
`

const PDef = "A check to ensure that the input containts a value";
const RDef =  "A check to ensure that a value is within two other values eg: between 1 and 100";
const LDef = "A check to ensure a value is a certain length";
const RestrictedChoiceDef = "A check which ensures a value is within a certain list";

PC.addEventListener("mouseover", () => {console.log("run")});

PC.addEventListener("mouseover", () => {PC.innerHTML = PDef})
RC.addEventListener("mouseover", () => {RC.innerHTML = RDef})
LC.addEventListener("mouseover", () => {LC.innerHTML = LDef})
RChoice.addEventListener("mouseover", () => {RChoice.innerHTML = RestrictedChoiceDef})

PC.addEventListener("mouseout", () => {PC.innerHTML = "Presence"});
RC.addEventListener("mouseout", () => {RC.innerHTML = "Range"});
LC.addEventListener("mouseout", () => {LC.innerHTML = "Length"});
RChoice.addEventListener("mouseout", () => {RChoice.innerHTML = "Restricted Choice"});

