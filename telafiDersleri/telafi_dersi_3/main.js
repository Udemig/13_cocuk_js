// console.log("Selam ");

// * Javascript Objeler (Object)

// * Javascript objeleri içerisinde verileri key-value(anahtar-değer) çifti halinde tutar.Bu sayede verileri yönetebiliriz.

// ? Obje nasıl tanımlanır ?

// * Tıpkı değişken tanımlar gibi var anahtar kelimesi yazılır.Sonrasında bu objeye bir ad verilir.Bu addan sonra = konulup {} yazılır.Bu {} içerisinde veriler key-value çiftleri halinde yazılır.

var öğrenci = {
  isim: "Hüseyin Ziya",
  soyisim: "Özçelik",
  numara: 123456543,
  meslek: "Öğrenci",
  yaş: 16,
  bilinenYazılımDilleri: ["Html", "Css", "Js"],
  öğrenciBilgileri: function () {
    document.write(
      ` Öğrenci adı: ${this.isim} // Öğrencinin soyadı ${this.soyisim} <br/>`
    );
  },
};

// console.log(`Öğrenci: ${öğrenci}`);
// console.log(`Öğrencinin adı: ${öğrenci.isim}`);
// console.log(`Öğrencinin soyadı: ${öğrenci.soyisim}`);
// console.log(`Öğrencinin yaşı: ${öğrenci.yaş}`);
// console.log(`Öğrencinin numarası: ${öğrenci.numara}`);
// console.log(`Öğrencinin yazılım dilleri: ${öğrenci.bilinenYazılımDilleri}`);
// console.log(
//   `Öğrencinin yazılım dilleri-1: ${öğrenci.bilinenYazılımDilleri[0]}`
// );
// console.log(
//   `Öğrencinin yazılım dilleri-2: ${öğrenci.bilinenYazılımDilleri[1]}`
// );
// console.log(
//   `Öğrencinin yazılım dilleri-3: ${öğrenci.bilinenYazılımDilleri[2]}`
// );

öğrenci.öğrenciBilgileri();

// * Date Objesi: Javascript içerisinde yer alan bu obje sayesinde dinamik tarih bilgisine erişilir.

var tarihVerisi = new Date();

document.write(` Tarih: ${tarihVerisi} <br/>`);

// Güncel gün verisini alma
var gün = tarihVerisi.getDate();
document.write(` Gün: ${gün} <br/>`);
// Güncel ay verisini alma
var ay = tarihVerisi.getMonth();
document.write(` Ay: ${ay + 1} <br/>`);
// Güncel yıl verisini alma
var yıl = tarihVerisi.getFullYear();
document.write(` Yıl: ${yıl} <br/>`);
// Güncel dakika verisini alma
var dakika = tarihVerisi.getMinutes();
document.write(` Dakika: ${dakika} <br/>`);
// Güncel saat verisini alma
var saat = tarihVerisi.getHours();
document.write(` Saat: ${saat} <br/>`);

// Yukarıda gördüğümüz üzere date objesi ile dinamik zaman verisine erişiriz.

// ! Bir dizi içerisinde obje kullanımı

var öğrenciler = [
  { ad: "Yusuf", soyad: "YAMAN", numara: 12345, öğrenciMi: true },
  { ad: "Hüseyin Ziya", soyad: "Özçelik", numara: 365655, öğrenciMi: true },
  { ad: "Zeynep Suna", soyad: "Özçelik", numara: 98765, öğrenciMi: false },
  { ad: "Muhlis", soyad: "Yılmaz", numara: 348875, öğrenciMi: true },
];
// Dizi içersindeki tüm objelere erişme
console.log(öğrenciler);
// Dizi içerisindeki istenilen objeye erişme
console.log(öğrenciler[0]);

// ! Javascript Koşullu Yapılar (if-else)

//* Js de koşullu yapılar if-else kullanımı ile yapılır. if yazdıktan sonra () açılır ve bu () içerisinde hangi koşula göre işlme yapılacaksa belirtilir.Sonrasında {} açılır ve () içerisinde belirtilen şart sağlanırsa gerçekleşecek işlem yazılır. Eğer bu if () koşulu sağlanmazsa {} kısımı çalışmaz.Bu durumda hangi kod çalışsın istiyorsak bunun için else {} yazılır ve bu {} içerisinde if koşulu sağlanmazsa çalışacak ko yazılır.

var yaş = 21;

if (yaş >= 18) {
  document.write(`Ehliyet alabilir <br/>`);
} else {
  document.write(`Ehliyet alamaz !! <br/>`);
}
document.write(`---------------------------------------------------- <br/>`);
// ? Peki birden fazla koşul nasıl sağlanır ?

// * Birden fazla koşul sorgusu yapılacaksa bunun için ilk if den sonra else if kullanılır.

// Ortlamaya göre 50 den küçük ise 'Kaldınız' 50 ve 50 den büyükse 'Geçtiniz' 50-64 arasındaysa 'Geçtiniz ve belge alamadınız' 65-84 arasında ise 'Geçtiniz ve Teşekkür aldınız' eğer 85 - 'Tebrikler dersi geçtiniz ve takdir belgesi aldınız'

var ortalama = 85;

if (ortalama < 50) {
  document.write(`Kaldınız !! <br/>`);
} else if (ortalama >= 50 && ortalama <= 64) {
  document.write(`Geçtiniz ve belge alamadınız !! <br/>`);
} else if (ortalama >= 65 && ortalama <= 84) {
  document.write(`Geçtiniz ve Teşekkür aldınız!! <br/>`);
} else {
  document.write(`Tebrikler dersi geçtiniz ve takdir belgesi aldınız <br/>`);
}

// ? Kişinin yaşı 18 den büyükse ve sağlık raporu varsa ehliyet alabilir değilse alamaz
document.write(`---------------------------------------------------- <br/>`);
var sağlikRaporu = false;

if (yaş < 18) {
  document.write(`Ehliye alamaz <br/>`);
} else if (yaş >= 18 && sağlikRaporu === true) {
  document.write(`Ehliye alabilir <br/>`);
} else {
  document.write(`Ehliye alamaz sağlık raporu yok <br/>`);
}

// Bir kişin yaşı 18 den büyük ve 500.000 tl parası varsa araba alabilir

// * Javascript switch-case

// * Switch-case yapısı ise if else gibi koşul sorgulaması yapmaz bir ifadenin farklı değerlerine bağlı olarak çıkıtı verir.

let day = 1;

switch (day) {
  case 1:
    document.write(`Pazatesi`);
    break;
  case 2:
    document.write(`Salı`);
    break;
  case 3:
    document.write(`Çarşamba`);
    break;
  case 4:
    document.write(`Perşembe`);
    break;
  case 5:
    document.write(`Cumar`);
    break;
  case 6:
    document.write(`Cumartesi`);
    break;
  case 7:
    document.write(`Pazar`);
    break;
  default:
    document.write(`Tanımsız Gün !!`);
}

/*
* Switch-case yapısı Switch() içerisinde hangi ifadeye göre kontrol yapacağını alır sonrasında {} içerisinde her değer için case ile kontrol yapar.Eğer ki break konulmazsa çalışan satırdan itibaren tüm satırlar çalışır.Default ise bizim beklemediğimiz bir değer gelirse bunun karşılığı olarak kullanılır.


*/
