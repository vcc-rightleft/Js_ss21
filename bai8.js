for (let num = 100; num <= 999; num++) {
    let x = Math.floor(num / 100);
    let y = Math.floor((num % 100) / 10);
    let z = num % 10;

    if (x ** 3 + y ** 3 + z ** 3 === num) {
        alert(num);
    }
}