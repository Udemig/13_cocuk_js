//document.write(`Javascript dersinden selamlarrr !! <br/> <br/>`);

// console.log(document);

// *  QuerySellector ile Html elemanlarına erişme
var title = document.querySelectorAll(".js-title");
// console.log(title);
// Html den aynı class adına sahip iki elemanı Javascript dosyama çekerken querySelector yerine querySelectorAll metodu kullanılır.Bu metot belirtilen class adına sahip tüm elemanları getirecektir.

var udemig = document.querySelector("#udemig");

// console.log(udemig);

// udemig elemanına class ekleme
udemig.classList.add("başlık");
// udemig elemanından class çıkarma
// udemig.classList.remove("başlık");

// todo: Html de bulunan butona Javascript de  class ekleme

// * 1-) Html den butonu çağır

var buton = document.querySelector("#btn");

// console.log(buton);

// * 2-) Css de eklenecek classı yaz

// * 3-) Bu elemana class ekle

buton.classList.add("button");

// ? Bu butona tıklanınca butonun class ını kaldırsın

// * Html Elemenalarına Olay İzleyiciler (addEventListener) Ekleme

// butona tıklanınca kullanıcıya bir alert versin

buton.addEventListener("click", function () {
  //   alert("Bu butona tıklandı !!");
  buton.classList.toggle("button");
});

// Sayfa yüklendiğinde Kullanıcıya 'Sayfa Yüklendi' şeklinde  çıktı ver.

// document.addEventListener("DOMContentLoaded", function () {
//   alert("Sayfa Yüklendi");
// });

// ! Bir elemana bir classı her tıklamada ekle-çıkart yapmak için classList.toggle yapısı kullanılır.Bu yapı belirtilen class varsa bunu kaldırır yoksa ekler.

// todo: Butona tıklanınca html kısımını dark-light tema şeklinde düzenle

var themeButton = document.querySelector(".dark-light-btn");

// console.log(themeButton);

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// console.log(document.body);

// todo: Html de bir buton ve bir div oluşturunuz.Bu div e genişlik ve yükseklik veriniz.Butona tıklanınca bu divin birkaç css özelliğini güncelleyiniz.
