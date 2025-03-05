
let width = Number(prompt("Nhập chiều ngang của hình chữ nhật:"));
let height = Number(prompt("Nhập chiều dọc của hình chữ nhật:"));
let result = "";
for (let i = 0; i < height; i++) {
if (i === 0 || i === height - 1) {
    result += "*".repeat(width) + "<br>";
} else {
    result += "*" + "&nbsp;".repeat((width - 2) * 2) + "*" + "<br>";
}
}document.write(result);
