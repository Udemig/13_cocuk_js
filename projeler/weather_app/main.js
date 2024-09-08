// Apı Key:
let api_key = "f3677a225817fd1affb9bfb32b2c4636";
let city = "Malatya";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
);
