let n = prompt("N =");
console.log(n);

let s = "";
for (let i = n.length - 1; i >= 0; i--) {
  s += n[i];
}

console.log(s);
