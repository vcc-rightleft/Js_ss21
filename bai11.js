let ngay = Number(prompt("Moi nhap ngay sinh"));
let thang = Number(prompt("Moi nhap thang sinh"));
let cung = "";
if (Number.isInteger(ngay || thang) && ngay > 0 && thang > 0) {
    if ((thang == 3 && ngay >= 21) || (thang == 4 && ngay <= 19)) {
        cung = "Bạch Dương (Aries)";
    } else if ((thang == 4 && ngay >= 20) || (thang == 5 && ngay <= 20)) {
        cung = "Kim Ngưu (Taurus)";
    } else if ((thang == 5 && ngay >= 21) || (thang == 6 && ngay <= 20)) {
        cung = "Song Tử (Gemini)";
    } else if ((thang == 6 && ngay >= 21) || (thang == 7 && ngay <= 22)) {
        cung = "Cự Giải (Cancer)";
    } else if ((thang == 7 && ngay >= 23) || (thang == 8 && ngay <= 22)) {
        cung = "Sư Tử (Leo)";
    } else if ((thang == 8 && ngay >= 23) || (thang == 9 && ngay <= 22)) {
        cung = "Xử Nữ (Virgo)";
    } else if ((thang == 9 && ngay >= 23) || (thang == 10 && ngay <= 22)) {
        cung = "Thiên Bình (Libra)";
    } else if ((thang == 10 && ngay >= 23) || (thang == 11 && ngay <= 21)) {
        cung = "Bọ Cạp (Scorpio)";
    } else if ((thang == 11 && ngay >= 22) || (thang == 12 && ngay <= 21)) {
        cung = "Nhân Mã (Sagittarius)";
    } else if ((thang == 12 && ngay >= 22) || (thang == 1 && ngay <= 19)) {
        cung = "Ma Kết (Capricorn)";
    } else if ((thang == 1 && ngay >= 20) || (thang == 2 && ngay <= 18)) {
        cung = "Bảo Bình (Aquarius)";
    } else if ((thang == 2 && ngay >= 19) || (thang == 3 && ngay <= 20)) {
        cung = "Song Ngư (Pisces)";
    } else {
        cung = "Ngày sinh không hợp lệ!";
    }
} else { alert("Chon ngay hop le"); }
alert(cung);
