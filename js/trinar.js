let name = prompt("Name:");
/*let gender;
if (name == "Nastya") {
  gender = "female";
} else {
  gender = "male";
}*/

let gender = (name == "Nastya") ? "female" : (name == "Petr" ? "male" : "-");

//let verdict = (n % 2 == 0) ? "odd" : "even";

console.log(gender);
