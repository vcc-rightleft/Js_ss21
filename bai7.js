let tien = Number(prompt("nhap so tien "));
let lai = Number(prompt("nhap lai"));
let thang = Number(prompt("nhap thang"));
if (Number.isInteger(tien || lai || thang) && tien || lai || thang > 0) {
    let tienlai = tien * Math.pow((1 + lai / 100), thang) - tien;
    let nhan = tien * Math.pow((1 + lai / 100), thang);
    alert(tienlai.toFixed(3));
    alert(nhan);
}