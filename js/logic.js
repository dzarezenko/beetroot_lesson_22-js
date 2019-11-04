function echo() {
  console.log("!!!");

  return true;
}

let x = true;
let a = x && echo();
console.log(a);
