let a = Number(prompt("moi nhap vao so"));
let b = Number(prompt("moi nhap vao so"));
let c = Number(prompt("moi nhap vao so"));
let d = Number(prompt("moi nhap vao so"));
let e = Number(prompt("moi nhap vao so"));
let m = 0;
let n = 0;
if (a % 2 == 1) {
    m = m + 1;
} else {
    n = n + 1;
}
if (b % 2 == 1) {
    m = 1 + m;
} else {
    n = n + 1;
}
if (c % 2 == 1) {
    m = 1 + m;
} else {
    n = 1 + n;
}
if (d % 2 == 1) {
    m = 1 + m;
} else {
    n = 1 + n;
}
if (e % 2 == 1) {
    m = 1 + m;
} else {
    n = 1 + n;
}

alert("so chan la " + n);
alert("so le la " + m);
