// ! Bağlantı Kontrolü console.log("Selam");

var sayı = 1234.9876;

// ! typeof verilen ifadenin veri tipini sorgular.
document.write(`Sayı değişkeninin tipi: ${typeof sayı} <br/> `);

document.write(`Sayı değişkeni: ${sayı} <br/> `);

// ? Math.round() ==> Verilen sayıyı en yakın tamsayıya yuvarlar.
document.write(
  `Sayıyı en yakın tam sayıya yuvarla: ${Math.round(sayı)} <br/> `
);
// ?  Math.floor() ==> Verilen sayıyı en yakın bir alt tamsayıya yuvarlar yuvarlar.
document.write(
  `Sayıyı en yakın bir alt tam sayıya yuvarla: ${Math.floor(sayı)} <br/> `
);
// ?  Math.ceil() ==> Verilen sayıyı en yakın bir üst tamsayıya yuvarlar yuvarlar.
document.write(
  `Sayıyı en yakın bir  üst sayıya yuvarla: ${Math.ceil(sayı)} <br/> `
);
// ? toFixed ==> Ondalıklı bir sayının . dan sonra kaç basamaktan oluşmasını istiyorsak bunu belirtme imkanı sunar.
document.write(`Noktadan sonra 2 basamaklı sayı: ${sayı.toFixed(2)} <br/> `);

// ? toString ==> Verilen number verisini string veri tipine çevirir
document.write(`Sayı değişkeninin tipi: ${typeof sayı.toString()} <br/> `);

var sayı1 = "12";
// ? parseInt ==> Verilen string ifadeyi number veri tipine çevirir
document.write(`Sayı1 değişkeninin tipi: ${typeof parseInt(sayı1)} <br/> `);

// ? Sayılardan en büyüğünü bulur.
document.write(
  `Verilen sayılardan en büyüğü: ${Math.max(1, 23, 5, 8987, 98762, 356)} <br/> `
);

// ? Sayılardan en küçüğünü bulur.
document.write(
  `Verilen sayılardan en küçüğü: ${Math.min(1, 23, 5, 8987, 98762, 356)} <br/> `
);

// 0 ile 1 arasında rastgele sayı oluşturur.
document.write(`Rastgele Sayı: ${Math.round(Math.random() * 100)} <br/>`);

// var number1 = 1;
// var number2 = 2;
// var number3 = 3;
// var number4 = 4;
// var number5 = 5;

// var kişi1 = "Yusuf YAMAN";
// var kişi2 = "Zeynep Suna Özçelik";
// var kişi3 = "Hüseyin Ziya Özçelik";

// * JAVASCRİPT DİZİLER (ARRAY):

// * Javascript dizileri hem verileri daha kolay bir şekilde bir arada tutmamızı hemde bu verileri dizilerin sahip olduğu metotlar sayesinde daha kolay yöntememizi sağlar.

var sayılar = [1, 2, 3, 4, 5];

// ? Dizinin tüm elemanlarına erişmek
document.write(`Sayı Dizisi: ${sayılar}  <br/>`);

// ? Dizinin istenilen elemanına erişmek
document.write(`Sayı Dizisi 1. Eleman: ${sayılar[0]}  <br/>`);

/*

* Dizilerin içerisinde istenilen sayıda eleman tutulabilir.Bu elemanlara direkt olrak erişebiliriz.Fakat ben istediğim bir elemana erişmek istersem bunu yaparken bir tık hatalı bir durum ile karşılaşıyorum.Bunun sebebi javascript in dizinin elemanlarını 0 dan başlayark saymasıdır.Yani ben 1.elemanı getir dediğimde bu bana 2. elemanı getirir. 

* Bu duruma çözüm olarak istenilen sırdaki elemanı elde etmek için dizilerin içerisinde bu elemanın sırasının bir eksiğini getir demeliyiz.


*/

var kişiler = ["Yusuf YAMAN", "Zeynep Suna Özçelik", "Hüseyin Ziya Özçelik"];
document.write(`Kişiler Dizisi: ${kişiler}  <br/>`);
var kişiBilgileri = [
  "Yusuf YAMAN",
  22,
  "Zeynep Suna Özçelik",
  16,
  "Hüseyin Ziya Özçelik",
  16,
];
document.write(`Kişiler Dizisi: ${kişiBilgileri}  <br/>`);

// * Dizilerin Sahip Olduğu Metotlar
document.write(`---------------------------------------------- <br/>`);

var arabalar = ["Mercedes", "Tesla", "Audi", "Bmw", "Ford"];

document.write(`Arabalar Dizisi: ${arabalar}  <br/>`);

// ! push ==> Diziye sondan eleman ekler.Bu metot içerisinde verilen elemanı diziye ekler.
arabalar.push("Renault");
arabalar.push("Opel");
document.write(`Arabalar Dizisi-1: ${arabalar}  <br/>`);
// ! pop ==> Dizinin sonundan eleman çıkarır.
arabalar.pop();
document.write(`Arabalar Dizisi-2: ${arabalar}  <br/>`);

// ! unshift  ==> Dizinin başına eleman ekler.
arabalar.unshift("Honda");
document.write(`Arabalar Dizisi-3: ${arabalar}  <br/>`);

// ! shift ==> Dizinin başlangıcından eleman çıkarmak için kullanılır.
arabalar.shift();
document.write(`Arabalar Dizisi-4: ${arabalar}  <br/>`);
document.write(`---------------------------------------------- <br/>`);

// * Javascript Fonksiyonları

// * Bir işi yapmak için kullanılan kod parçacığıdır.Bir işi yapmaktan kastımız ör: ekrana bir çıktı yazdırmak,iki sayıyı toplamak,iki sayının modunu almak

// ? Javascript Fonksiyonu nasıl oluşturulur ?

// Burada fonksiyon tanımlandı
function uyarıVer() {
  console.log(
    "Udemig Akademi  Javascript dersinden Selam !!! Javascript biliyormusun ?"
  );
}
// Fonksiyon çağırıldı yani çalıştırıldı
uyarıVer();

// todo: İki sayıyı çarpan fonksiyonu yazınız

function çarpma() {
  var number1 = 12;
  var number2 = 44;
  var sonuç = number1 * number2;
  document.write(`ÇARPMA SONUCU: ${sonuç}  <br/>`);
}
çarpma();

// ? Bu fonksiyon hep aynı sonucu bulacaktır.Peki nasıl dinamik fonksiyonlar oluştururuz ?

// * Bu özelliği fonksiyona parametre vererek sağlarız.Bir fonksiyona parametre geçmek için fonksiyon adının yanında yer alan () kullanılır.

function parametreliÇarpma(s1, s2) {
  var sonuç = s1 * s2;
  document.write(`ÇARPMA SONUCU-1: ${sonuç}  <br/>`);
}
parametreliÇarpma(); // Çıktı olarak Nan verdi.(Bu bir sayı değildir.)
parametreliÇarpma(12, 44);

// ? Bir fonksiyonun dışarıya değer vermesi nasıl sağlanır ?

// * Bu özellik ise fonksiyonlarda 'return' satırı kullanılarak yapılır.return satırı bu satırda kullanılan yapıyı dışarı aktarır.

function toplamaİşlemi(a, b) {
  var sonuç = a + b;
  return sonuç;
}
var toplamaSonuç = toplamaİşlemi(12, 89);
document.write(`TOPLAM SONUCU: ${toplamaSonuç}  <br/>`);
