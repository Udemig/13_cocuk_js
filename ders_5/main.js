// Bağlantı Kontrolü
// Bu kod, JavaScript dosyasının çalışıp çalışmadığını test etmek için console.log ile "Merhaba Js" yazdırır.
console.log("Merhaba Js");

// Switch-Case
// Switch-case, bir değişkenin değerine göre farklı kod bloklarını çalıştırmak için kullanılır. Her bir "case" belirli bir değeri kontrol eder. "break" ifadesi ile kontrol yapısından çıkılır.
// Eğer hiçbir "case" uyuşmazsa "default" kodu çalışır.

let dayNumber = 3; // Gün numarasını belirler

// dayNumber değişkenine göre gün ismini belirler
switch (dayNumber) {
  case 1:
    document.write("Pazartesi" + "<br/>"); // 1 ise Pazartesi
    break;
  case 2:
    document.write("Salı" + "<br/>"); // 2 ise Salı
    break;
  case 3:
    document.write("Çarşamba" + "<br/>"); // 3 ise Çarşamba
    break;
  case 4:
    document.write("Perşembe" + "<br/>"); // 4 ise Perşembe
    break;
  case 5:
    document.write("Cuma" + "<br/>"); // 5 ise Cuma
    break;
  case 6:
    document.write("Cumartesi" + "<br/>"); // 6 ise Cumartesi
    break;
  case 7:
    document.write("Pazar" + "<br/>"); // 7 ise Pazar
    break;
  default:
    document.write("Tanımsız Gün" + "<br/>"); // Hiçbir case ile eşleşmezse bu yazılır
}

// Not Harfini Belirleme
// Soru:
// Bir öğrencinin aldığı puana göre not harfini belirleyen bir JavaScript kodu yazın. Puan 0 ile 100 arasında olmalıdır ve her puan aralığı
// bir not harfi ile eşleştirilmelidir.

// Öğrencinin aldığı puanı tanımlayın
let puan = 85; // Bu örnekte puan 85

// Puan aralığına göre not harfini belirleme
switch (true) {
  case puan >= 90 && puan <= 100:
    document.write("Not: A<br/>");
    break;
  case puan >= 80 && puan < 90:
    document.write("Not: B<br/>");
    break;
  case puan >= 70 && puan < 80:
    document.write("Not: C<br/>");
    break;
  case puan >= 60 && puan < 70:
    document.write("Not: D<br/>");
    break;
  case puan >= 0 && puan < 60:
    document.write("Not: F<br/>");
    break;
  default:
    document.write("Geçersiz puan<br/>");
}

/*
-- For Döngüsü:

- For döngüsü, belirli bir koşul sağlandığında tekrar eden işlemleri yapmak için kullanılır.
- Döngüde üç ana bölüm bulunur: başlatma, koşul ve güncelleme.
*/

for (let i = 0; i < 5; i++) {
  document.write("Udemig Akademiden Selamlar 🔔" + "<br/>"); // Her döngüde bu mesajı yazdırır
}

// FOR DÖNGÜSÜ İLE İLGİLİ SORULAR

//////  1'den 10'a kadar sayıları yazdır
for (let i = 1; i <= 10; i++) {
  document.write(i + "<br/>");
}

// 1'den 5'e kadar olan sayılar ve karelerini yazdır
for (let i = 1; i <= 5; i++) {
  document.write("Sayı: " + i + " - Kare: " + i * i + "<br/>");
}

// Araçlar dizisi
let cars = [
  "BMW",
  "MERCEDES",
  "AUDI",
  "PORSCHE",
  "TESLA",
  "FORD",
  "TOYOTA",
  "DODGE",
  "Lamborghini Gallardo LP550-2",
  "Valentino Balboni",
];

// Araçları listeleme
for (let a = 0; a < cars.length; a++) {
  document.write(cars[a] + "<br/>"); // Dizideki her aracı ekranda yazdırır
}

/*
for döngüsü üç parametre alır: 
1. Başlangıç değeri (i = 0)
2. Koşul (i < 5)
3. Güncelleme (i++)
*/

// if-else yapısı, belirli koşullara bağlı olarak kodun farklı bölümlerinin çalıştırılmasını sağlar. Koşul doğruysa if bloğundaki kod çalışır; koşul yanlışsa else bloğundaki kod çalışır.

// If-Else Örneği
let havaSıcaklığı = 22; // Sıcaklık değeri

if (havaSıcaklığı < 10) {
  document.write("Hava çok soğuk!<br/>");
} else if (havaSıcaklığı >= 10 && havaSıcaklığı < 20) {
  document.write("Hava serin.<br/>");
} else {
  document.write("Hava sıcak.<br/>");
}

let yağmurYağıyor = true;

if (yağmurYağıyor) {
  console.log("Şemsiye alın.");
} else {
  console.log("Şemsiye almanıza gerek yok.");
}

let yaş = 18;

if (yaş >= 18) {
  console.log("Reşitsiniz.");
} else {
  console.log("Reşit değilsiniz.");
}

let vizeNotu = 75;

if (vizeNotu >= 60) {
  console.log("Geçtiniz.");
} else {
  console.log("Kaldınız.");
}

// If-Else ile Soru
// Soru: Bir sayının pozitif, negatif veya sıfır olduğunu belirleyen bir JavaScript kodu yazın.
let sayi = -5; // Örnek sayı

if (sayi > 0) {
  document.write("Sayı pozitif.<br/>");
} else if (sayi < 0) {
  document.write("Sayı negatif.<br/>");
} else {
  document.write("Sayı sıfır.<br/>");
}

let sayi1 = 10;
let sayi2 = 20;

if (sayi1 > sayi2) {
  console.log("Birinci sayı büyüktür.");
} else if (sayi1 < sayi2) {
  console.log("İkinci sayı büyüktür.");
} else {
  console.log("İki sayı eşittir.");
}

// do-while döngüsü, önce kod bloğunu çalıştırır ve sonra koşulu kontrol eder. Bu nedenle, do-while döngüsü en az bir kez çalışır.

// While Döngüsü Örneği
let i = 0;

while (i < 5) {
  document.write("Bu while döngüsünün " + (i + 1) + ". tekrarı.<br/>");
  i++;
}

// Do-While Döngüsü Örneği
let j = 0;

do {
  document.write("Bu do-while döngüsünün " + (j + 1) + ". tekrarı.<br/>");
  j++;
} while (j < 5);

let sayac = 0;

do {
  console.log("Sayaç: " + sayac);
  sayac++;
} while (sayac < 5);

// sayi 4 olduğunda, döngü sayi değerini 1'e kadar azaltır ve her adımda faktoriyel değerini çarpar. Sonuçta 4! (4 faktöriyel) hesaplanır.
let sayii = 4;
let faktoriyel = 1;

while (sayii > 0) {
  faktoriyel *= sayii;
  sayii--;
}

console.log("Faktöriyel: " + faktoriyel);
