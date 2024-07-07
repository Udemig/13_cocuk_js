/*
* Javascript Nedir ?

- Javascript etkileşimli web siteleri geliştirmek için kullanılan bir programlama dilidir.

- Javascript başlangıçta sadece web kısımında kullanılıyor olmasına rağmen günümüzde web,mobile,masaüstü uygulamaları ve sunucu kısımında kullanılır.


* Javascript Neden Popüler Bir Programlama Dilidir ?

- Javascript yukarıda saydığımız geniş kullanım alanının dışında çok çeşitli kütüphane desteği ile günümüzde kullanılan en popüler programlama dilidir.

- Gerek piyasada yapılan projeler incelendiğinde gerekse iş ilanlarında javascript'in çok önemli bir yere sahip olduğu görülecektir.

*/

/*
* Js Çıktı Metotları

- console.log()
-- Tarayıcıda bulunan console kısımında bir şeyler yazdırmaya yarayan bu metot gerek bağlantı kontrolü gerekse verilerin incelemesi noktasında çokça kullanacağımız bir metotdur.

- document.write()
-- Html kısımında body kısımına denk gelen alan Javascript'de document'e karşılık gelir.İngilizce yaz demek 'write' kelimesine karşılık gelir.document.write demek ise document e yazı yazdır demektir.


-- alert()
-- Bir mesaj kutusu açarak kullanıcıya uyarı vermek için kullanılır.



*/

// console.log("Merhaba Js,Bağlantı Kontrolü");
// console.log(
//   "Udemig akademide Hüseyin,Muhlis ve Zeynep ile Javascript dersi işliyoruz."
// );

document.write("Udemig AKADEMİ" + "<br/>");
document.write("Javascript Ders-1" + "<br/>");

// alert("Javascript Dersinden Selamlar");

/*
* Javascript Değişkenler

-- Javascript değişkenleri bizlere verileri saklamak,geliştirilen program dahilinde bu verileri manipüle etmek ve kullanmak gibi faydalar sağlar.



* Javascript Değişken Tanımlaması
- Javascript'de değişken tanımlarken birden fazla anahtar kelime kullanılır.Biz bunlardan 'var' ile başlayalım.

- var anahtar kelimesi yazıldıktan sonra kullanılacak değişkene bir isim verilir.Bu isimlendirme tamamen  bizim insiyatifimizde olmasına rağmen değişken içeriği ile ilişkili olmasında fayda vardır.

- Son olarak ise = işareti konulup bu işaretin sağında değişkenin değeri yazılır.
- Bu tanımlanan değişken bir metinden oluşuyorsa "" içerisinde yazılır ama rakamdan oluşuyorsa direkt rakam karşılığı yazılır.
*/

var name = "Zeynep Suna";
var surname = "Özçelik";
var age = 18;
document.write("AD:", name + "<br/>");
document.write("SOYAD:", surname + "<br/>");
document.write("YAŞ:", age + "<br/>");
document.write(name, " adlı öğrenci derse geldi." + "<br/>");

var öğrenciAdı = "Hüseyin Ziya";
var öğrenciSoyadı = "Özçelik";
var öğrenciYaşı = 17;

document.write(
  "Udemig Akademiden ",
  öğrenciAdı,
  " çok çalışkan bir öğrencidir.",
  öğrenciYaşı,
  " yaşında olan bu öğrencimiz ilerleyen yıllarda çok iyi bir yazılımcı olacaktır " +
    "<br/>"
);

/*
* Javascript Operatörleri

- Javascript Operatörleri değerler arasında işlemler yapılmasını sağlar.


1. Toplama(+) [İleride göreceğiz + işareti sadece toplama işleminde değil sol ve sağında bulunan değerleri birleştirmek için de kullanılır.]

2. Çıkarma(-)

3. Çarpma(*)

4. Bölme(/)


*/
var sayı1 = 42;

var sayı2 = 17;

var sayı3 = 45;

var sayı4 = 9;

document.write("Toplam :", sayı1 + sayı2 + "<br/>");
document.write("Fark :", sayı1 - sayı2 + "<br/>");
document.write("Çarpma :", sayı1 * sayı2 + "<br/>");
document.write("Bölme :", sayı3 / sayı4 + "<br/>");

/*
* Javascript Atama ve Değer Kontrolü

Matematikte kullanılan =  in Javascript de kullanımı biraz farklıdır.
Matematikte kullanılan = şu anlama gelir bu yapının sol ve sağında yer alan değerler aynıdır.Ama Javascript bu şekilde algılamaz.

Javascriptde = işareti atama anlamına gelir ve sağındaki ifadeyi paketleyip solundaki ifadenin değeri olarak belirler.

* Peki iki yapının eşitliği nasıl ifade edilir ?

Javascript'de eşitlik sembolü == 'dir.Bu yapı solundaki ve sağındaki ifadelerin eşitliğini kontrol eder.Ve eşitse 'true' dönderir değilse 'false' dönderir.



*/

// console.log(2 == 4);

// == Sağında ve solunda aynı değer olduğunda 'true' olmadığında ise 'false' çıktısı verdi

var a = 3;

// console.log(32 == 32);

// Ör: Kendi adınızı ve soyadınızı ayrı ayrı değişkenlere atayınız.Ve bunları ister console.log ister document.write() ile yazdırınız.

/*
* Javascript Karşılaştırma Operatörleri

1.Eşittir  (==)  
2.Büyüktür (>)
3.Küçüktür (<)
4.Büyük Eşittir (>=)
5.Küçük Eşittir (<=)


*/
console.log("Sayı 1 Sayı 2 ye eşit mi ? :", 23 == 45); // Hayır ==> false
console.log("Sayı 1 Sayı 2 den  büyük mü ? :", 23 > 45); // Hayır ==> false
console.log("Sayı 1 Sayı 2 den  küçük mü ? :", 23 < 45); // Evet ==> true
console.log("Sayı 1 Sayı 2 den  Büyük Eşit  mi ? :", 23 >= 45); // Hayır ==> false
// console.log("Sayı 1 Sayı 2 den  Küçük Eşit  mi ? :", 45 <= 45); // Evet ==> true

// Ör: İki sayı değişkeni tanımlayınız.Ve bunların büyük veya küçük olma durumlarını inceleyiniz.

var number1 = 44;
var number2 = 69;

console.log("Number 1 Number 2 dan büyük mü?", number1 > number2);
console.log("Number 1 Number 2 dan küçük mü?", number1 < number2);
console.log("Number 1 Number 2 ye  eşit mi ?", number1 == number2);
