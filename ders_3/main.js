// console.log("Merhaba Js");

// Array (Diziler):

var arabalar = ["BMW", "MERCEDES", "AUDİ", "ALFA ROMRO", "HONDA"];

document.write(`Arabalar Dizisi: ${arabalar} ` + "<br/>");
document.write(`Arabalar Dizisinin 3. elemanı: ${arabalar[2]} ` + "<br/>");
document.write(`--------------------------------- ` + "<br/>");

// ! Dizilerin Sahip Olduğu Metotlar:
//* push ==> Diziye Sondan  Eleman Ekler
arabalar.push("RENAULT");
arabalar.push("OPEL");
document.write(`Arabalar Dizisi-1: ${arabalar} ` + "<br/>");
// * unshift ==> Diziye Başlangıç Kısımından Eleman Ekler
arabalar.unshift("TESLA");
document.write(`Arabalar Dizisi-2: ${arabalar} ` + "<br/>");
// * pop ==> Dizinin Sonundan Eleman Çıkarır
arabalar.pop();
document.write(`Arabalar Dizisi-3: ${arabalar} ` + "<br/>");
// * shift ==> Dizinin Başlangıçından Eleman Çıkarır
arabalar.shift();
document.write(`Arabalar Dizisi-4: ${arabalar} ` + "<br/>");
document.write(`--------------------------------- ` + "<br/>");
// ! Javascript Fonksiyonlar(Functions)

// Fonksiyonlar bir işi gerçekleştirmek için özelleştirilmiş kod parçacığıdır.

// * Javascript Fonksiyon Tanımlama: function anahtar kelimesi kullanılır devamında ise bu fonksiyona bir ad verilir.Bu adın yanında () açılır bununda yanında ise {} açılır.Bu {} ler arasında fonksiyonun ne işlem yapacağı belirtilir.
// ! Fonksiyonu Tanımladık
function selamla() {
  document.write(
    `Udemig Akademiden Selamlar.Biz Zeynep ve Hüseyin ile Javascript öğreniyoruz. ` +
      "<br/>"
  );
}
// ! Fonksiyonu Çağırdık
selamla();

function toplama() {
  var number1 = 12;
  var number2 = 44;
  var sonuç = number1 + number2;
  document.write(`Toplama Sonuç: ${sonuç} ` + "<br/>");
}
toplama();
toplama();

// ! Fonksiyonlarda Parametre Kavramı

// Fonksiyonların statik işlemler yapmasını istemeyebiliriz.Fonksiyonların dinamik değerlere göre işlemler yapmasını istersek bu noktada 'Parametre' kavramını kullanılır.Fonksiyonlar () içerisinde parametre alırlar.Ve bu parametreler ile işlemler yapabilirler.

function toplamaİşlemi(sayı1, sayı2) {
  var sonuç = sayı1 + sayı2;
  document.write(`Toplama Sonuç-1: ${sonuç} ` + "<br/>");
}

toplamaİşlemi(32, 45);
toplamaİşlemi(925, 1051);
toplamaİşlemi(14, 65);

var öğrenci = "Hüseyin Ziya Özçelik";
function öğrenciTanıtım(öğrenciAdı) {
  document.write(
    `Udemig Akademinin 13. Sezon Çocuk grubunun başarılı öğrencisi ${öğrenciAdı} gerçekten iyi çalışmaktadır. ` +
      "<br/>"
  );
}
öğrenciTanıtım("Hüseyin Ziya Özçelik");
öğrenciTanıtım("Zeynep Sude Özçelik");

//! Fonksiyonlarda return kavramı

// return fonksiyonların bir değeri yada ifadeyi  çağırıldığı noktada geri döndürmesini sağlar.

function çarpma(x, y) {
  var sonuç = x * y;
  return sonuç;
}
var çarpmaSonuç = çarpma(3, 4);

document.write(`Sonuç ==> ${çarpmaSonuç} ` + "<br/>");

console.log(çarpmaSonuç);
document.write(`--------------------------------- ` + "<br/>");
var sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(`Sayılar Dizisi: ${sayılar} ` + "<br/>");
// document.write(`Sayılar Dizisi: ${sayılar[0]} ` + "<br/>");
// document.write(`Sayılar Dizisi: ${sayılar[1]} ` + "<br/>");
// document.write(`Sayılar Dizisi: ${sayılar[2]} ` + "<br/>");
// document.write(`Sayılar Dizisi: ${sayılar[3]} ` + "<br/>");
// document.write(`Sayılar Dizisi: ${sayılar[4]} ` + "<br/>");
// document.write(`Sayılar Dizisi: ${sayılar[5]} ` + "<br/>");
function sayılarıEkranaYaz(sayı) {
  document.write(`Sayı: ${sayı} ` + "<br/>");
}

// sayılarıEkranaYaz(sayılar[0]);
// sayılarıEkranaYaz(sayılar[1]);

sayılar.forEach(sayılarıEkranaYaz);

// ! Javascript Objeler(Object)
// Objeler içerisinde değişken,dizi,fonksiyon,vs. özellikleri tutmaya yarayan bir javascript özelliğidir.

// * Objeler tıpkı değiken tanımlar gibi var anahtar kelimesi kullanıldıktan sonra bu objeye uygun bir isimlendirme seçilir ve = koyulduktan sonra {} açılır.Bu {} ler içerisinde ise objede bulundurulması istenen özellikler belirtilir.Bu elemanlar anahtar kilit şeklinde tanımlanır.Yani bir değere bir ifade karşılığı atanır.

// Birlikte bir öğrenci objesi oluşturalım

var öğrenci = {
  ad: "Hüseyin Ziya",
  soyad: "Özçelik",
  yaş: 16,
  numara: 12345,
  eMail: "hüseyinziya@gmail.com",
  hobiler: ["Yazılım", "Spor", "Müzik"],
  tanıtım() {
    console.log(`${this.ad} Bilgilerinden Selamlar`);
    // Bir obje içerisindeki elemanlara erişmek için this denilir ve sonrasında . koyulup bu özellik belirtilir.
  },
};

console.log(öğrenci);
console.log(öğrenci.ad);
console.log(öğrenci.soyad);
console.log(öğrenci.yaş);
console.log(öğrenci.numara);
console.log(öğrenci.eMail);
console.log(öğrenci.hobiler);
öğrenci.tanıtım();
// Objelerin içerisindeki elemanlara erişmek için obje adından sonra . konulur ve erişilmek istenilen özellik belirtlir.
