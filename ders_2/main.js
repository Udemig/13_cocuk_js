document.write("Merhaba JS" + "<br/>");

var havaSıcaklığı = 20;
document.write(
  "Malatyada hava sıcaklığı ",
  havaSıcaklığı,
  " derecedir." + "<br/>"
);

// Bu şekilde değişken ve metin ifadeleri kullanabiliriz.Fakat bunun daha kolay bir yolu mevcuttur.

// * Literal Template(backtick) ``: Backtickler bizlere direkt değişken kullanımı noktasında yardımcı olur.

document.write(
  `Malatyada hava sıcaklığı ${havaSıcaklığı} derecedir.` + "<br/>"
);

// ! Metin şeklindeki ifadeler 'string' denir.

// ! Sayı şeklindeki ifadelere ise 'number' denir.

var selam = "Udemig Akademiden Selamlar 🔔";

var sayı = 1234532;

// typeof bir verinin  tipini kontrol eder.
document.write(typeof selam + "<br/>");
document.write(typeof sayı + "<br/>");

var kurum = "Udemig";
var ders = "Javascript";

var metin = ` Merhaba yazılım eğitiminin en iyi akademisi olan ${kurum}  den selamlar. ${ders} dersine hoşgeldiniz. `;

document.write(metin + "<br/>");

// ! String Metotları

// length ==> Bir string ifadenin  uzunluğunu ölçer.

document.write("Metinin  Uzunluğu :", metin.length + "<br/>");
// indexOf ==> Metin içerisinde bulunan bir kelimenin sırasını bulmak için kullanılır.
document.write(
  "Metin içerisinde yazılımın sırası :",
  metin.indexOf("yazılım") + "<br/>"
);
// slice ==> Metin içerisinden belirli bir aralığı almamıza olanak tanır.
document.write(
  "Metinin 18 ve 71 . karakterler arası :",
  metin.slice(18, 71) + "<br/>"
);
// replace ==> metin içerisindeki bir kelimeyi başka bir kelime ile değiştirir.
document.write(
  "Metin içerisindeki yazılımı software ile değiştirme :",
  metin.replace("yazılım", "software") + "<br/>" + "<br/>"
);
// toLocaleUpperCase ==> Tüm ifadeyi büyük harf olarak günceller.
document.write(
  "Metinin tüm harfleri büyük harf :",
  metin.toLocaleUpperCase() + "<br/>" + "<br/>"
);

// toLocaleLowerCase ==> Tüm ifadeyi küçük harf olarak günceller.
document.write(
  "Metinin tüm harfleri küçük harf :",
  metin.toLocaleLowerCase() + "<br/>"
);

// concat ==> İki ifadeyi birleştirir.
document.write(
  "Birleştirilmiş ifade :",
  metin.concat(metin, "Zeynep Suna Özçelik") + "<br/>"
);
document.write("----------------------------------------" + "<br/>");

var number = 12.345665432;
document.write("Sayı :", number + "<br/>");
document.write("Sayının tipi :", typeof number + "<br/>");
// toString() ==> ile ifadeleri stringe çevirir.
document.write(
  "Sayının tipini stringe çevir :",
  typeof number.toString() + "<br/>"
);
//  toFixed ==> Ondalıklı sayılar için . dan sonra kaç basamak olacağını belirler.
document.write("Sayı :", number.toFixed(5) + "<br/>");
// Math.round ==> Sayıyı  en yakın tamsayıya yuvarlar.
document.write(
  "Sayının en yakın tam sayıya yuvarlanmış hali :",
  Math.round(number) + "<br/>"
);
// Math.ceil ==> Sayıyı  bir üst tamsayıya yuvarlar.
document.write(
  "Sayının bir üst tamsayıya yuvarlanmış hali :",
  Math.ceil(number) + "<br/>"
);

// Math.floor ==> Sayıyı  bir alt tamsayıya yuvarlar.
document.write(
  "Sayının bir alt tamsayıya yuvarlanmış hali :",
  Math.floor(number) + "<br/>"
);

var sayı1 = "12";
// parseInt ==> Veriyi number tipine çevirir.
document.write("Sayı 1 in tipi :", typeof parseInt(sayı1) + "<br/>");
document.write("----------------------------------------" + "<br/>");
// Math.max ==> Sayılardan en büyüğünü bulur.
document.write(
  "Sayılardan en büyüğü :",
  Math.max(1, 2, 4, 56, 98765) + "<br/>"
);
// Math.min ==> Sayılardan en küçüğünü bulur.
document.write(
  "Sayılardan en küçüğü :",
  Math.min(1, 2, 4, 56, 98765) + "<br/>"
);

// Math.random ==> 0 ile 1 arasında rastgele sayılar oluşturur.
document.write("Rastegele Sayı :", Math.random() + "<br/>");
document.write("Rastegele Sayı-1 :", Math.round(Math.random() * 10) + "<br/>");
document.write("----------------------------------------" + "<br/>");
// ! Javascript Diziler: Verileri daha kolay yönetmek ve dizilerim sahip olduğu metotlardan faydalanmak için diziler kullanılır.

// var number1 = 1;
// var number2 = 2;
// var number3 = 3;
// var number4 = 4;
// var number5 = 5;

var numbers = [1, 2, 3, 4, 5];
document.write("Sayılar :", numbers + "<br/>");

var dizi = ["ZEYNEP", "HÜSEYİN", "MUHLİS", 12, 43, 17, 12332];
document.write("Dizi :", dizi + "<br/>");
document.write("Dizinin 1. Elemanı :", dizi[0] + "<br/>");
document.write("Dizinin 2. Elemanı :", dizi[1] + "<br/>");
document.write("Dizinin 7. Elemanı :", dizi[6] + "<br/>");
/*
 Dizilerin verileri bir arada tuttuğundan bahsettik.
 Dizilerde dizinin tüm elemanlarına erişebildiğimiz gibi tek tek de elemanlara erişebiliriz.
 Bunun için dizinin adı yazılır [] içerisinde dizinin hangi elemanına erişmek istiyorsak bu belirtilir.
 ! FAKAT dizilerde elemanlara 'index' numarası ile erişilir.Ve bu index 1. eleman için sıfır ,2. eleman için 1 dir.Yani her eleman için index bu elemanın 1 eksiğidir. Bunu diziler saymaya sıfırdan başlıyor şeklinde akılda tutabiliriz.

*/
