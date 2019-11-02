let s = prompt();

let isFound = false;
for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j < s.length; j++) {
    if (s[i] == s[j]) {
      isFound = true;
      console.log("YES: ", s[i]);
      //break;
    }
  }

  if (isFound) {
    //break;
  }
}

if (!isFound) {
  console.log("NO");
}
