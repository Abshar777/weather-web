
const apiKey = "5e0117ee0b2eef8a98beba172187942b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const icon = document.querySelector(".icon")

const inpa = document.querySelector(".serch input");
const btoon = document.querySelector(".serch img");
async function checkweatherr() {
   


      const responcee = await fetch(apiUrl + "kerala" + `&appid=${apiKey}`);

      var dataa = await responcee.json();
      console.log(dataa);
      document.querySelector(".heding img").style.opacity="1";
      document.querySelector(".city").innerHTML = dataa.name;
      document.querySelector(".temp").innerHTML = Math.round(dataa.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = dataa.main.humidity + "%";
      document.querySelector(".wind").innerHTML = dataa.wind.speed + "km/h";
      if(dataa.weather[0].main=="clear"){
         icon.src="images/clear.png";
        }
        else  if(dataa.weather[0].main=="Clouds"){
           icon.src="images/clouds.png";
          }
          else  if(dataa.weather[0].main=="Drizzle"){
           icon.src="images/drizzle.png";
          }
          else  if(dataa.weather[0].main=="Mist"){
           icon.src="images/mist.png";
          }
          else  if(dataa.weather[0].main=="Snow"){
           icon.src="images/snow.png";
          } else  if(dataa.weather[0].main=="Rain"){
           icon.src="images/rain.png";
          }
}
checkweatherr();

async function checkweather(city) {
   try {


      const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

      var data = await responce.json();
      console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      if(data.weather[0].main=="clear"){
       icon.src="images/clear.png";
      }
      else  if(data.weather[0].main=="Cloud"){
         icon.src="images/clouds.png";
        }
        else  if(data.weather[0].main=="Drizzle"){
         icon.src="images/drizzle.png";
        }
        else  if(data.weather[0].main=="Mist"){
         icon.src="images/mist.png";
        }
        else  if(data.weather[0].main=="Snow"){
         icon.src="images/snow.png";
        } else  if(data.weather[0].main=="Rain"){
         icon.src="images/rain.png";
        }
        
   } catch (error) {
      console.error("error not found");
      document.querySelector(".heding img").style.opacity="1";
      document.querySelector(".city").textContent = "note found";
      document.querySelector(".temp").innerHTML = "0" + "°c";
      document.querySelector(".humidity").innerHTML = "0" + "%";
      document.querySelector(".wind").innerHTML = "0" + "km/h";
      icon.src = "images/error2.png";
      icon.style.width = 202 + "px";
      icon.style.height = 207 + "px";
      icon.style.mixBlend = "darken";
      icon.style.marginTop = 2 + "px"



   }
}
btoon.addEventListener("click", () => {
   checkweather(inpa.value);
})

