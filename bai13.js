let h = 5;
let h1 = 0;
let h2 = 10;
let h3 = 0;
let r = "";
let r1 = "";
let r2 = "";
let r3 = "";
for (let i = 0; i <= h; i++){
    r += "*".repeat(i)+"<br>";
} document.write(r+"<br>");
for (let j = 5; j > h1; j--){
    r1+="*".repeat(j)+"<br>"
} document.write(r1+"<br>");
for (let i1 = 0; i1 <= h2; i1++) {
    r2 += "&nbsp;".repeat(h2 - i1) + "*".repeat(i1) + "<br>";
}
document.write(r2);