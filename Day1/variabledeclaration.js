//variable declaration+value assignment =Initialization
//var allows both reassignment and redeclaration
//ex: Var course"playwright" /Declaration

const { log } = require("console")

//var course"Selenium"/redeclaration
var course="Playwright" //declaration
var course="selenium" //redeclare the same variable
course="python"  //reassignment
course=1234 //reassgnment
console.log(typeof course)//number

//let- allows to reassign but redeclaration is not possible


let presentCity="coimbatore"
//let presentCity="coimbatore" redeclare is not possible
presentCity="banglore"// reassign is possible 

//const-final and fixed(cannot be reassigned or redeclared)

const pan="abbfrst234"
//const pan="abbfrst234"
pan="tyu1234"
console.log(pan);//type error : assignment to constant variable