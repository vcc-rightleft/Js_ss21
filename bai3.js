
let pas = "admin";
let cout = 0;
while (cout < 3) {
    let password = prompt("Moi nhap vao mat khau");
    if (pas == password) {
        alert("Mat khau dung");
        break;
    } else {
        alert("mat khau khong dung");
        cout++
    }
    if (cout == 3) {
        alert("sai qua 3 lan");
    }
}