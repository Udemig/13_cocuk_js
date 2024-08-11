// Html'deki 'body' nin Javascript deki karşılığı 'document' dir. Bizler bu document alanına document.write metodu ile yazdırma işlemi gerçekleştirdik. Document kısımında yapabildiklerimiz sadece ekrana birşeyler yazdırmak değildir.Ör: Ekrandaki bir butona javascript de erişebiliriz.

// Bu değişiklikleri nasıl yaptığımıza birlikte bakalım:

// ! DOM(DOCUMENT OBJECT MODAL): Html'deki body yani javascript deki document kısımına müdahale etmek için öncelikle bu elemanlara erişmemiz gerekir. Tıpkı css dosyalarında tag (etiket) adına göre,class adına göre,id ye göre elamanlara eriştiğimiz gibi javascriptde de bu elemanlara erişebiliriz.

// ? 1-) Tag adına göre elamana erişme: Elemanlara tag adına göre erişmek için:
var h1Elemanı = document.getElementsByTagName("h1");
// console.log(h1Elemanı);

// ? 2-) Class adına göre elamana erişme:
var pElamanı = document.getElementsByClassName("desc");
// console.log(pElamanı);

// ? 3-) İd ye göre elamana erişme:
var student = document.getElementById("student");
// console.log(student);
// ? 4-) İstenilen özelliğe göre erişme: Şimdiye kadar class,tag veya id adına göre elemanlara eriştik.Bu erişimi sağlarken tag adına göre erişmek istersek  'getElementsByTagName' metodunu; class adına göre erişmek istersek 'getElementsByClassName' metodunu;  id ye göre erişmek istersek 'getElementById' metodunu kullandık.Şimdi ise tek bir metot ile hangi özelliğe göre elemanlara erişeceksek bu özelliği(class adı,id,tag adı) belirtip erişebiliriz.Bu noktada querySelector metodu kullanılır.

var title = document.querySelector("#title");
var title1 = document.querySelector(".student1");
// console.log(title);
// console.log(title1);

// ! document.querySelector metodunun kullanımını gördük.Önemli nokta daha öncesinde elemana document.getElementsByClassName ile class adıyla erişeceksek bunu direkt class adını yazarak yaptık.Fakat  document.querySelector ile erişeceksek class adından önce bunun class olduğunu belirtmek için . ve class adı yazılır.

// ! id ile erişeceksek de id adından önce # işareti koyulur.

// Html'den erişilen elamanlara stil özelliği kazandırma
// ! Html de erişilen elamanlara still özelliği verirken '(eleman adı).(style).(verilmek istenen özellik) = ' özelliğin değeri'
// title1.style.backgroundColor = "red";
// title1.style.fontSize = "45px";
// title1.style.color = "#ffff";
// title1.style.padding = "32px";
// title1.style.fontWeight = "bold";
// title1.style.borderRadius = "20px";

// Bu kullanım yazım açısından zahmetlidir.Bunlar bir class adı altında toplayıp bunu bu elemana ekleyelim.

// Bir elamana verilmek istenen tüm stil özellikleri bir class adı altında toplanır.Ve bu class elemana classList.add('class adı') ile aktarılır. Eğer bu class adını kaldırmak istersek ise classList.remove('class adı')

title1.classList.add("title");

student.classList.add("student");
// student.classList.remove("student");

// ! Bir elemana olay izleyicisi ekleme

// Html den erişilen elamanlara bir olay ekleyebiliriz.Ör: tıklanınca uyarı ver, butona tıklanınca sayfa temasını değiştir.

function selamla() {
  console.log("Selamlar !!!");
}

title1.addEventListener("click", selamla);

var button = document.querySelector("#button");
// console.log(button);

function uyarıVer() {
  console.log("Bizler Udemig Akademide Js dersi işliyoruz !");
}

button.addEventListener("click", uyarıVer);
// Bir elemanın içeriğini değiştirme: Bir elemanın  içeriğini değiştirmek için  (eleman adı).innerHTML=' yeni değer'
// title1.innerHTML = "Yusuf YAMAN";
var changeBtn = document.querySelector("#change");
// console.log(changeBtn);
function changeText() {
  title1.innerHTML = "Yusuf YAMAN";
}

changeBtn.addEventListener("click", changeText);

student.innerText = "Udemig Öğrencisi";

// student.innerHTML = '<a href="#">Udemig e git</a>';

/*  Htmldeki elemanların içeriğini 2 farklı yöntem ile değiştirebiliriz. 


! 1-) elemanAdı.innerHTML  Bu yöntem Html deki elemanın içeriğini günceller.Bu güncellemeyi gerek içeriğinde yapıyı farklı bir eleman olarak da güncelleyebilir gerekse sadece içeriğindeki yazıyı günceller.
! 2-) elemanAdı.innerText Bu yöntem sadece içeriğindeki yazıyı günceller.
*/

// Bir butona tıklanınca bir div içerisinde yeni bir div oluşturan yapıyı kodlayalım

// ! 1-)Elamanlara Eriş:

var container = document.querySelector(".container");
// console.log(container);
var addBtn = document.querySelector("#add");
// console.log(addBtn);

// ! 2-) Butona Tıklanınca Eleman Ekleyen Bir Fonksiyon Yaz

function addDiv() {
  var newDiv = document.createElement("div");
  newDiv.textContent = "Selam";
  container.appendChild(newDiv);
}

// ! 3-) Bu fonksiyonu butona tıklanınca çalıştır.

addBtn.addEventListener("click", addDiv);

// Yukarıda örnekte gördüğümüz üzre:

// * document içerisinde bir eleman yaratmak için ==>  document.createElement metodu kullanılır.Bu metodu çalıştırıken () içerisinde '' arasında hangi elemanı oluşturacağımız belirtilir.

// * document içerisinde oluşturulan bir elemanın içeriği  ! ! 'textContent'  ile ile güncellenir.

// * document içerisinde bir elemana elaman eklemek için document.appendChild metodu kullanılır.
