let n = parseInt(prompt());

let isFound = false;
let m = n;
while (m > 0) {
  let x = m % 10;
  m = (m - x) / 10;
  let q = m;
  while (q > 0) {
    let y = q % 10;
    if (x == y) {
      isFound = true;
      console.log("YES: ", x);
    }

    q = (q - y) / 10;
  }
}

if (!isFound) {
  console.log("NO");
}
