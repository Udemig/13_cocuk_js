/*
* Javascript Döngüler

* Javascript de tekrar gerektiren durumlar için döngüler kullanılır.

* Döngülerde sayaç kavramı önemli bir yere sahiptir.Bundan dolayı sayaç kavramını inceleyelim.

*/

var sayı = 10;
document.write(`Sayı: ${sayı} <br/> `);

// sayı = sayı + 1;
sayı++;
document.write(`Sayı: ${sayı} <br/> `);
// sayı = sayı + 1;
sayı++;
document.write(`Sayı: ${sayı} <br/> `);
// sayı = sayı - 1;
sayı--;
document.write(`Sayı: ${sayı} <br/> `);
sayı += 5;
document.write(`Sayı: ${sayı} <br/> `);
sayı -= 3;
document.write(`Sayı: ${sayı} <br/> `);
sayı *= 10;
document.write(`Sayı: ${sayı} <br/> `);

// 1'den 10 kadar olan sayıları ekrana yazdır.

// document.write(1 + "<br/>");
// document.write(2 + "<br/>");
// document.write(3 + "<br/>");
// document.write(4 + "<br/>");
// document.write(5 + "<br/>");
// document.write(6 + "<br/>");
// document.write(7 + "<br/>");
// document.write(8 + "<br/>");
// document.write(9 + "<br/>");
// document.write(10 + "<br/>");

// * For döngüsü:

// Bu döngü bizden 3 değer ister.Birincisi bir sayaç,ikincisi bu döngünün nereye kadar devam edeceğini belirten bir şart üçüncüsü ise döngünün nasıl ilerleyeceğini belirlemek için sayaç değişkeninin nasıl değişeceğini belirleyen artış şartı.

for (var sayaç = 0; sayaç <= 10; sayaç++) {
  document.write(`${sayaç} <br/>`);
}

// Bir öğrenci dizisi tutunuz.Bu dizideki her eleman için 'Udemig Akademiden Selamlar' yazdırınız.

var öğrenciler = [
  "Hüseyin Ziya",
  "Zeynep Suna",
  "Mehmet",
  "Ahmet",
  "Elif",
  "Hasan",
  "Hüseyin",
  "Akif",
  "Yusuf",
  "Ayşe",
];

// document.write(`Udemig Akademiden Selamlar <br/>`);

for (var sayı = 0; sayı < öğrenciler.length; sayı++) {
  document.write(`Udemig Akademiden Selamlar <br/>`);
}

// 0 den 50 ye kadar olan çift sayıları ekrana yazdırınız.

for (var sayı = 0; sayı <= 50; sayı += 2) {
  document.write(`${sayı} <br/>`);
}
document.write(`---------------------------- <br/>`);

// * While döngüsü

// * Bu döngü while kısımındaki şart sağlanıyorsa hep çalışır.Bu ise uygulamayı sonsuz döngüye sokar.bunu engellemek için şartı güncelleyen bir kod yazılır.

let number = 0;

while (number < 10) {
  document.write(`${number} <br/>`);
  number++;
}
document.write(`---------------------------- <br/>`);

// todo: While döngüsü kullanarak bir kişin 1 den 20 ye kadar 1. şınav 2. şınav şeklinde çıktı vermesini sağlayan code-script yazınız.

// * Do-while

var sayı1 = 200;

do {
  document.write(`${sayı1} <br/>`);
  sayı1++;
} while (sayı1 <= 20);

// * Do while döngüsü while dan farklı olarak şart sağlansın yada sağlanmasın bir defa çalışır.Sonrasında eğer şart sağlanıyorsa döngüye girer sağlanmıyorsa bir defa çalışıp durur.
document.write(`---------------------------- <br/>`);

// * Javascript DOM

var title = document.getElementById("başlık");
// console.log(title);

var desc = document.getElementsByClassName("açıklama");
// console.log(desc);

var span = document.getElementsByTagName("span");
// console.log(span);

var metin = document.querySelector(".metin");
// console.log(metin);

var metin1 = document.querySelector("#metin1");
// console.log(metin1);
// * camelCase
// title.style.backgroundColor = "#3c3c";
// title.style.padding = "20px";
// title.style.fontSize = "54px";
// title.style.fontFamily = "Arial";
// title.style.borderRadius = "30px";

// Yukarıdaki stil özelliklerini css de bir class altında toplayalım ve bunu bu elemana aktaralım.

title.classList.add("title");
