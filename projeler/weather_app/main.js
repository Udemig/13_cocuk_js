// Js Bağlantı Kontrolü: console.log(`Merhaba Js`);

// Apı key:
let api_key = "f3677a225817fd1affb9bfb32b2c4636";

// ! Html 'den elemanları alma
const eleman = {
  date: document.querySelector(".date"),
  city: document.querySelector(".city"),
  status: document.querySelector(".status"),
  img: document.querySelector(".icon img"),
  degree: document.querySelector(".degree"),
  feel: document.querySelector(".feel"),
  hum: document.querySelector(".hum"),
  wind: document.querySelector(".wind"),
  form: document.querySelector("form"),
  locations: document.querySelector(".locations"),
  locBtn: document.querySelector("#locBtn"),
  rise: document.querySelector("#rise"),
  set: document.querySelector("#set"),
  max: document.querySelector("#max"),
  min: document.querySelector("#min"),
  input: document.querySelector("#input"),
};

// Sayfa Yüklendiğinde Konuma göre veri alma
document.addEventListener("DOMContentLoaded", function () {
  getWeatherData("Malatya");
});

// ! İnputa girilen değeri alan ve Havadurumu fonk. çalıştıran olay
eleman.form.addEventListener("submit", (event) => {
  // Sayfa yenilemeyi iptal et
  event.preventDefault();

  // Şehir adını al
  let city = event.target[0].value;

  //   console.log(city);
  getWeatherData(city);
  // Form gönderildikten sonra inputu içeriğini sıfırladı
  eleman.input.value = " ";
});

// ! Parametre olarak şehir adını alan havadurumu fonksiyonu
async function getWeatherData(city) {
  // Apı a istek at
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
  );
  // Apı dan gelen veriyi json a çevir
  const data = await response.json();
  // veriyi console a yaz
  console.log(data);
  renderUi(data);
}
// getWeatherData("İstanbul");

// Card yapısında güncelleme yapan fonksiyon

// Apı dan  gelen veriye bağlı olarak cardı günceller.
function renderUi(data) {
  // Ülke kısımını güncelle
  var text = data.sys.country ? "," + data.sys.country : "";
  // Şehir Kısımını güncelle
  eleman.city.innerText = data.name;
  // Durumu güncelle
  eleman.status.innerText = data.weather[0].main;
  // Sıcaklığı Güncelle
  eleman.degree.innerText = data.main.temp.toFixed(1) + "°";
  // Resim Güncelleme
  eleman.img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  // Hissedilen Sıcaklık
  eleman.feel.innerText = data.main.feels_like + "°";
  eleman.hum.innerText = data.main.humidity + "%";
  eleman.wind.innerText = data.wind.speed + "km/h";
  // Güneşin Doğuş Zamanı
  eleman.rise.innerText = new Date(
    data.sys.sunrise * 1000
  ).toLocaleTimeString();
  // Güneşin Batış Zamanı
  eleman.set.innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  // En yüksek ve en düşük sıcaklıklar
  eleman.max.innerText = data.main.temp_max + "°";
  eleman.min.innerText = data.main.temp_min + "°";
}

// Lokasyon Butonlarına tıklanınca bu lokasyonun hava durumunu yansıtan fonk.

eleman.locations.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let city = event.target.innerText;
    getWeatherData(city);
  }
});
