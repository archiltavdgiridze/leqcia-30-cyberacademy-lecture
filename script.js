// მიმატება
let mimateba1 = 34;
let plus = "+";
let mimateba2 = 17;
let mimatebaJami = mimateba1 + mimateba2;

document.getElementById("mimateba1").innerHTML = mimateba1;
document.getElementById("plus").innerHTML = plus;
document.getElementById("mimateba2").innerHTML = mimateba2;
document.getElementById("mimatebaJami").innerHTML = mimatebaJami;

// გამოკლება
let saklebi = 67;
let minus = "-";
let maklebi = 24;
let sxvaoba = saklebi - maklebi;

document.getElementById("saklebi").innerHTML = saklebi;
document.getElementById("minus").innerHTML = minus;
document.getElementById("maklebi").innerHTML = maklebi;
document.getElementById("sxvaoba").innerHTML = sxvaoba;

// გამრავლება
let samravli = 3;
let gamravleba = "*";
let mamravli = 6;
let namravli = samravli * mamravli;

document.getElementById("samravli").innerHTML = samravli;
document.getElementById("gamravleba").innerHTML = gamravleba;
document.getElementById("mamravli").innerHTML = mamravli;
document.getElementById("namravli").innerHTML = namravli;

// გაყოფა
let gasayofi = 36;
let gayofa = "/";
let gamyofi = 6;
let ganayofi = gasayofi / gamyofi;

document.getElementById("gasayofi").innerHTML = gasayofi;
document.getElementById("gayofa").innerHTML = gayofa;
document.getElementById("gamyofi").innerHTML = gamyofi;
document.getElementById("ganayofi").innerHTML = ganayofi;

// ხარისხში აყვანა
let asayvaniRicxvi = 4;
let xarisxisNishani = "^";
let xarisxi = 6;
let pasuxi = asayvaniRicxvi ** xarisxi;

document.getElementById("asayvaniRicxvi").innerHTML = asayvaniRicxvi;
document.getElementById("xarisxisNishani").innerHTML = xarisxisNishani;
document.getElementById("xarisxi").innerHTML = xarisxi;
document.getElementById("pasuxi").innerHTML = pasuxi;

// ფესვის ამოღება
let fudze = 125;
let fesvisNishani = "?";
let fesvisXarisxi = 3;
let pasuxiFesvi = Math.cbrt(fudze);

document.getElementById("fudze").innerHTML = fudze;
document.getElementById("fesvisNishani").innerHTML = fesvisNishani;
document.getElementById("fesvisXarisxi").innerHTML = fesvisXarisxi;
document.getElementById("pasuxiFesvi").innerHTML = pasuxiFesvi;

// ? ASSIGNMENT OPERATORS - მინიჭების ოპერატორები
let i = 10;

i += 5;
// i = i + 5

i -= 3;
// i = i + 5 - 3

console.log(i);

i *= 3;

console.log(i);

i /= 12;
// i = i / 12

i **= 2;

console.log(i + 1);

let text1 = "Archil ";
text1 += "Tavdgiridze";

console.log(text1);

let e = 10 + 5;
let r = "10" + "5";
let w = "hello " + 10;

console.log("r is: " + w);

let test = 0.2 + 0.1;

console.log("test answer is: " + test);

// ? comparison operators | შედარების ოპერატორები
// boolean

let shedareba = 5 <= 10;

console.log(shedareba);

// ? logical operators | ლოგიკური ოპერატორები

let xx = 5;
let yy = 10;

console.log(xx > 0 && yy < 15);
/*
---- && "და" ოპერატორი
true true = true
true false = false
false true = false
false false = false

*/

console.log(xx < 0 || yy > 15);
/*
---- || ---- "ან" ოპერატორი
true true = true
true false = true
false false = false


*/

/* 
if

else

else if


*/

// Syntax
// if (condition) {

// }

let jemaliAge = 10;

if (jemaliAge > 18) {
  console.log("შენ შეგიძლია არჩევნებში მონაწილეობა");
} else {
  console.log("შენ არ შეგიძლია არჩევნებში მონაწილეობა");
}

let name1 = "არჩილი";
let surname1 = "თავდგირიძე";
let age1 = 21;

let name2 = "გიორგი";
let surname2 = "მალაყმაძე";
let age2 = 16;

// 1
document.getElementsByClassName("name")[0].innerHTML = name1;
document.getElementsByClassName("surname")[0].innerHTML = surname1;

if (age1 > 18) {
  document.getElementsByClassName("eligible")[0].innerHTML = "კი";
} else {
  document.getElementsByClassName("eligible")[0].innerHTML = "არა";
}

// 2
document.getElementsByClassName("name")[1].innerHTML = name2;
document.getElementsByClassName("surname")[1].innerHTML = surname2;

if (age2 > 18) {
  document.getElementsByClassName("eligible")[1].innerHTML = "კი";
} else {
  document.getElementsByClassName("eligible")[1].innerHTML = "არა";
}
