// Bağlantı Kontrolü
// console.log("Merhaba Js");

// * Javascript Objeler:

var kişi = {
  ad: "Zeynep Suna",
  soyad: "Özçelik",
  yaş: 16,
  meslek: "Öğrenci",
  hobiler: ["Kitap Okumak", "Müzik Dinlemek", "Yazılım"],
  kişiTanıtım: function () {
    document.write(`${this.ad} kişisinden selamlar.<br/> `);
  },
};
document.write(`Kişinin adı: ${kişi.ad}<br/> `);
document.write(`Kişinin soyadı: ${kişi.soyad}<br/>`);
document.write(`Kişinin yaş: ${kişi.yaş}<br/>`);
document.write(`Kişinin meslek: ${kişi.meslek}<br/>`);
document.write(`Kişinin hobiler: ${kişi.hobiler}<br/>`);
kişi.kişiTanıtım();

/* 
  * Javascript Date(Tarih) Objesi:

- Javascript içerisinde yer alan date objesi ile gerek genel tarih bilgisine gerekse özelleştirilmiş zaman bilgisine erişebiliriz.
 */

// Genel Tarih Bilgisine Erişmek
var tarih = new Date();
// Genel Tarih Bilgisi içerisinden günü alma
var gün = new Date().getDate();
// Genel Tarih Bilgisi içerisinden ayı alma
var ay = new Date().getMonth();
// Genel Tarih Bilgisi içerisinden yıl alma
var yıl = new Date().getFullYear();
// Genel Tarih Bilgisi içerisinden dakika alma
var dakika = new Date().getMinutes();
// Genel Tarih Bilgisi içerisinden saati alma
var saat = new Date().getHours();
document.write(`Tarih: ${tarih}<br/>`);
document.write(`Gün: ${gün}<br/>`);
document.write(`Ay: ${ay + 1}<br/>`);
document.write(`Yıl: ${yıl}<br/>`);
document.write(`Dakika: ${dakika}<br/>`);
document.write(`Saat: ${saat}<br/>`);

// * Yukarıda görüldüğü üzre Date objesi ve içerisinde bulunan metotlar sayesinde dinamik bir şekilde zaman bilgisi elde edebiliriz.

// * Javascript Diziler içersinde obje kullanımı

var kişi1 = [
  { numara: 12, ad: "Hüseyin Ziya", soyad: "Özçelik" },
  { numara: 14, ad: "Zeynep Suna", soyad: "Özçelik" },
];
// console.log(kişi1[0].soyad);

// * Javascript Koşullu İfadeler(if-else): Javascript de belirli bir koşula bağlı olarak işlemler gerçekleştirmek için if-else kullanılır.if ingilizcede 'eğer' anlamına gelir.else ise 'başka' anlamına gelir.Bu yapı if dedikten sonra () içerisinde bu koşulun şartı belirtilir.Bu koşulda olması istenenler ise () sonrasında {} açılır ve bu {} içerisine yazılır. else ise bu durum gerçekleşmeyecekse kullanılır.

// Kişinin ortalaması 50 den büyükse Geçtiniz  değilse kaldınız yazdırın.

var ortalama = 49;

if (ortalama > 50) {
  document.write(`Geçtiniz-1 !! <br/>`);
} else {
  document.write(`Kaldınız-2 !! <br/>`);
}

// İf else yapısı if in yanında yer alan () içerisinde yazan koşul geçerli ise  bu {} içerisindeki kod çalışır.Bu şart sağlanmıyorsa else in yanındaki {} çalışır.

if (ortalama > 50) {
  document.write(`Geçtiniz-2 !! <br/>`);
} else if (ortalama == 50) {
  document.write(`Ortalamanız 50'dir. !! <br/>`);
} else {
  document.write(`Kaldınız-2 !! <br/>`);
}

var sınıfMevcudu = 30;
// * Sınıf mevcudu 5  ise bir nöbetçi yeterli,10  ise 2 nöbetçi yeterlidir,15  ise 3 nöbetçi yeterlidir ve 20 ise  4 nöbetçi yeterlidir yazdırın.

// *  Switch-case yapısı

var günSayısı = 10;

switch (günSayısı) {
  case 1:
    document.write(`Pazartesi <br/>`);
    break;
  case 2:
    document.write(`Salı <br/>`);
    break;
  case 3:
    document.write(`Çarşamba <br/>`);
    break;
  case 4:
    document.write(`Perşembe <br/>`);
    break;
  case 5:
    document.write(`Cuma <br/>`);
    break;
  case 6:
    document.write(`Cumartesi <br/>`);
    break;
  case 7:
    document.write(`Pazar <br/>`);
    break;
  default:
    document.write(`Geçersiz Gün <br/>`);
}
