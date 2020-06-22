/*WEATHER HTML CONVERSION*/
let button=document.querySelector(".submit");
let input=document.querySelector(".input_text");
let main=document.querySelector("#name");
let temp=document.querySelector(".temp");
let desc=document.querySelector(".desc");
let clouds=document.querySelector(".clouds");
/*FORECAST HTML CONVERSION*/
let tempA=document.querySelector(".tempA");
let minMaxA=document.querySelector(".minMaxA");
let dateA=document.querySelector(".dateA");
let windA=document.querySelector(".windA");





/* pull from WEATHER API*/ /*WEATHER*/
button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    +input.value+
    "&units=imperial&appid=b06ca37a6a6f13ebeaf5ae4e7ea80dd0")
    ().then(response => (response.json())
    .then(data => {
        /*WEATHER VARIABLES*/
        let tempValue = data["main"]["temp"];
        let nameValue = data["name"];
        let descValue = data["weather"][0]["description"];
        /*VARIABLE CONVERSION*/
        main.innerHTML = nameValue;
        desc.innerHTML = "Description - "+descValue;
        temp.innerHTML = "Temperature - "+tempValue+"°F";
        input.value ="";
})

.catch(err => alert("Wrong city info!")))
})
/*pull from WEATHER API*/ /*FORECAST*/
button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="
    +input.value+
    "&units=imperial&appid=b06ca37a6a6f13ebeaf5ae4e7ea80dd0")
    .then(response => response.json())
    .then(data => {
        /*FORECAST VARIABLES*/
        let dateAValue = data["dt_txt"];
        let s = data["list"][0]["main"][0]["temp"];
        let tempMaxAValue = data["list"][0]["main"][0]["temp_max"];
        let tempMinAValue = data["list"][0]["main"][0]["temp_min"];
        let tempFeelAValue = data["list"][0]["main"][0]["feels_like"];
        let descAValue = data["list"][0]["weather"][0]["description"];
        let windValue = data["list"][0]["wind"]["speed"];
        /*VARIABLE CONVERSION*/
        input.value ="";
        main.innerHTML = nameValue;
        dateA.innerHTML = "Date - "+dateAValue;
        descA.innerHTML = "Description - "+descValue;
        tempA.innerHTML = "Temperature - "+tempAValue+"°F";
        minMaxA.innerHTML = tempMinAValue+"°Fmin/"+tempMaxAValue+"°Fmax";
        feelsA.innerHTML = "but feels like "+tempFeelAValue+"°F";

})

.catch(err => alert("Wrong city info!"))
})
