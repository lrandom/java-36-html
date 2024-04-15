console.log(1 == '1');//true
console.log(1 === '1');//true
/*
const weather = "troi nang";
if (weather == "troi mua") {
    alert("Ở nhà");
}else if (weather == "troi nang") {
    alert("Ngu");
}else if (weather == "troi ram mat") {
    alert("Đi đá bóng")
}
*/

/*
const weather = "troi dep";
const amount = 150000;
if (weather == "troi dep") {
    if (amount >= 150000) {
        alert("Đi xem phim");
    }
}
*/
const weather = "troi nang";
switch (weather) {
    case "troi nang":
        console.log("O nha bat DH ngu");
        break;

    case "troi mua":
        console.log("O nha xem phim");
        break;

    case "troi ram mat":
        console.log("Di choi the thao");
        break;

    default:
        console.log("Khong biet lam gi");
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
