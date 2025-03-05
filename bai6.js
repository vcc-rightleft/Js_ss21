let a = Number(prompt("Nhap so"));
let sum = 0;
if (Number.isInteger(a)) {
    for (let i = 1; i <= Math.abs(a); i++){
        if (a % i == 0) {
            sum+=i+" "
        }
    }
    alert(sum)
}else{alert("loi")}