// Apı sunucudsa tutulan verilerin bizim pc lerimizden erişmemize olanak tanıyan bir aracıdır.Bu aracı Javascript içerisindeki 'fetch' metodu sayeasinde hangi veriyi istiyorsak bunu sunucudan alıp bize getirir.

// Apı lar iki kısımdan oluşur.                 1-) Ana kısım:Ana kısım apı nın çatısıdır.Tüm verileri burada tutar.                                        2-) Uç kısım(endpoint): İstenilen herbir veri için özelleştirlmiş kısımlardır.

// Jsonplaceholder içerisindeki user verilerini alma
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// var paragraf = document.querySelector("#paragraf");

// // Jsonplaceholder içerisindeki post verilerini alma
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// * JS TELAFİ DERSLERİ

// * Html ile iskelet yapısını oluşturduğumuz ; Css ile  stil özellikleri kattığımız elemanlara Javascript ile dinamik özellikler katarız.

// ! JS ÇIKTI METOTLARI

// * document.write * console.log * alert

// console.log("Merhaba Js Telafi dersinden Selamlar !!!");

// document.write("Merhaba Js Telafi dersinden Selamlar !!!");

// alert("Merhaba Js Telafi dersinden Selamlar !!!");

var isim = "Zeynep";
var soyisim = "Özçelik";
var yaş = 16;

// alert("Merhaba " + isim + " Selamlar ");

// console.log(isim, soyisim, yaş);

// console.log(
//   "Merhaba",
//   isim,
//   "Js dersleri nasıl gidiyor ?",
//   soyisim,
//   "i aynı başka bir öğrenci tanıyormusun?"
// );

console.log(`Merhaba ${isim} Js dersleri nasıl gidiyor ?`);

// ! JS Operatörleri

/*

* TOPLAMA (+) + işareti sayılarda toplama işlemi yaparken metin ifadeleri brleştirir.

* ÇIKARMA (-)

* ÇARPMA (*)

* BÖLME (/)

* EŞİTTİR (==)  ==> Bildiğimiz eşitlik kontrolü

* ATAMA (=) ==> Normal hayatta = işareti görünce bunun eşitlik kontrolü yaptığını anlarız.Fakat Js de bu 'ATAMA' işlemine karşılık gelir.Bu sembol sağındaki ifadeyi alır solundakinin içerisine atar.



* >
* >
* >=
* <=

*/

// console.log(isim + soyisim);  ZeynepÖzçelik
// console.log(21 + 33); 54

var sayı = 12;

// console.log(sayı);

// console.log(12 < 32); true
// console.log(12 > 32);  false
// console.log(12 > 12); false
// console.log(12 >= 12); true

// typeof ==> Bir verinin tipini kontrol eder.

// console.log(typeof "Hüseyin");

// Js de sayıların veri tipi 'NUMBER' olarak ifade edilir.
// Js de metin ifadeler ise 'STRİNG' olarak ifade edilir.

var metin =
  "Gecenin derinliğinde, şehir ışıklarının yansıdığı gökyüzü, yıldızların dansıyla hayat buluyor. Sessizliğin ortasında, sadece ikimizin paylaştığı bir dünya var; sıcak bir dokunuşun, tatlı bir fısıltının yankılandığı...";

// ! JS String Metotları
document.write(`Metin ifadesinin tipi: ${typeof metin} <br/><br/>`);

// Js de metin değerlerinin tipi 'string' olarak geçer.Stringlerin sahip olduğu metotları inceleyelim:

// ? length ==> Metinin içerisindeki bir ifadenin hangi sırada olduğunu belirler.
document.write(` Metinin Uzunluğu:  ${metin.length}`);
// ? indexOf ==> Metinin karakter uzunluğunu ölçer.
document.write(
  ` Metinin içerisinde 'tatlı' kelimesi kaçıncı sırada ?:  ${metin.indexOf(
    "tatlı"
  )} <br/><br/>`
);
// ? slice ==> Metinin içerisindeki belirli bir kısımı almak için kullanılır.
document.write(
  ` Metinin içerisinde 23 ve 44. karakterler arası:  ${metin.slice(
    23,
    44
  )} <br/><br/>`
);

// ? replace ==> Metinin içerisindeki belirli bir ifadenin değerini başka bir ifade ile güncellemek için kullanılır
document.write(
  ` Metinin içerisinde hayat kelimesini yaşam ile değiştirme:  ${metin.replace(
    "hayat",
    "yaşam"
  )} <br/><br/>`
);
