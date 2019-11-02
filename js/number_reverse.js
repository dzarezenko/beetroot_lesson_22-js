let n = parseInt(prompt("N ="));
console.log(n);

let s = "";
while (n > 0) {
  let m = n % 10;
  s = s + m;

  n = (n - m) / 10;
}

console.log(s);
