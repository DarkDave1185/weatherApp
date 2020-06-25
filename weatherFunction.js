/*WEATHER HTML CONVERSION*/
let button=document.querySelector(".submit");
let input=document.querySelector(".input_text");
let main=document.querySelector("#name");
let temp=document.querySelector(".temp");
let desc=document.querySelector(".desc");
let clouds=document.querySelector("#clouds");
let minMax=document.querySelector(".minMax");
/*UV INDEX CONVERSION*/
let latLon=document.querySelector(".latLon");
let uvIndex=document.querySelector("#uvIndex");
/*FORECAST HTML CONVERSION--DAY1*/
let tempA=document.querySelector(".tempA");
let minMaxA=document.querySelector(".minMaxA");
let dateA=document.querySelector(".dateA");
let windA=document.querySelector(".windA");
let descA=document.querySelector(".descA");
let feelsA=document.querySelector(".feelsA");
/*FORECAST HTML CONVERSION--DAY2*/
let tempB=document.querySelector(".tempB");
let minMaxB=document.querySelector(".minMaxB");
let dateB=document.querySelector(".dateB");
let windB=document.querySelector(".windB");
let descB=document.querySelector(".descB");
let feelsB=document.querySelector(".feelsB");
/*FORECAST HTML CONVERSION--DAY3*/
let tempC=document.querySelector(".tempC");
let minMaxC=document.querySelector(".minMaxC");
let dateC=document.querySelector(".dateC");
let windC=document.querySelector(".windC");
let descC=document.querySelector(".descC");
let feelsC=document.querySelector(".feelsC");
/*FORECAST HTML CONVERSION--DAY4*/
let tempD=document.querySelector(".tempD");
let minMaxD=document.querySelector(".minMaxD");
let dateD=document.querySelector(".dateD");
let windD=document.querySelector(".windD");
let descD=document.querySelector(".descD");
let feelsD=document.querySelector(".feelsD");
/*FORECAST HTML CONVERSION--DAY5*/
let tempE=document.querySelector(".tempE");
let minMaxE=document.querySelector(".minMaxE");
let dateE=document.querySelector(".dateE");
let windE=document.querySelector(".windE");
let descE=document.querySelector(".descE");
let feelsE=document.querySelector(".feelsE");
/*PULL FOR UV INDEX*/
function setLonLat (latValue, lonValue) {
    fetch("http://api.openweathermap.org/data/2.5/uvi?appid=b06ca37a6a6f13ebeaf5ae4e7ea80dd0&lat="+latValue+"&lon="+lonValue)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        /*UV INDEX VARIABLES*/
        let uvValue = data["value"]
        var uvIndex = document.getElementById("uvIndex");
        if (uvValue < 5){
            uvIndex.classList.add("good");
        }else if(uvValue> 4 && uvValue < 10){
            uvIndex.classList.add("ok");
        }else{
            uvIndex.classList.add("bad");
        }
    
        /*UV INDEX CONVERSION*/
        uvIndex.innerHTML = "UV Value: "+uvValue;

    })
    /*.catch(err => console.log(err))*/
}
/*pull from WEATHER API*/ /*FORECAST*/
button.addEventListener("click", function fiveDay (){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="
    +input.value+
    "&units=imperial&appid=b06ca37a6a6f13ebeaf5ae4e7ea80dd0")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        /*FORECAST VARIABLES -- DAY1*/ 
        let dateAValue = data["list"][4]["dt_txt"];
        let tempAValue = data["list"][4]["main"]["temp"];
        let maxAValue = data["list"][4]["main"]["temp_max"];
        let minAValue = data["list"][4]["main"]["temp_min"];
        let feelsAValue = data["list"][4]["main"]["feels_like"];
        let descAValue = data["list"][4]["weather"][0]["description"];
        let windAValue = data["list"][4]["wind"]["speed"];
        let nameValue = data["city"]["name"];
        /*VARIABLE CONVERSION -- DAY1*/
        input.value ="";
        main.innerHTML = nameValue;
        dateA.innerHTML = "Date - "+dateAValue;
        descA.innerHTML = "Conditions - "+descAValue;
        windA.innerHTML = "Wind - "+windAValue;
        tempA.innerHTML = "Temperature - "+tempAValue+"°F";
        minMaxA.innerHTML = minAValue+"/"+maxAValue+"°F";
        feelsA.innerHTML = "...but feels like "+feelsAValue+"°F";
        /*FORECAST VARIABLES -- DAY2*/ 
        let dateBValue = data["list"][12]["dt_txt"];
        let tempBValue = data["list"][12]["main"]["temp"];
        let maxBValue = data["list"][12]["main"]["temp_max"];
        let minBValue = data["list"][12]["main"]["temp_min"];
        let feelsBValue = data["list"][12]["main"]["feels_like"];
        let descBValue = data["list"][12]["weather"][0]["description"];
        let windBValue = data["list"][12]["wind"]["speed"];
        /*VARIABLE CONVERSION -- DAY2*/
        input.value ="";
        main.innerHTML = nameValue;
        dateB.innerHTML = "Date - "+dateBValue;
        descB.innerHTML = "Conditions - "+descBValue;
        windB.innerHTML = "Wind - "+windBValue;
        tempB.innerHTML = "Temperature - "+tempBValue+"°F";
        minMaxB.innerHTML = minBValue+"°F min/"+maxBValue+"°F max";
        feelsB.innerHTML = "...but feels like "+feelsBValue+"°F";
        /*FORECAST VARIABLES -- DAY3*/ 
        let dateCValue = data["list"][20]["dt_txt"];
        let tempCValue = data["list"][20]["main"]["temp"];
        let maxCValue = data["list"][20]["main"]["temp_max"];
        let minCValue = data["list"][20]["main"]["temp_min"];
        let feelsCValue = data["list"][20]["main"]["feels_like"];
        let descCValue = data["list"][20]["weather"][0]["description"];
        let windCValue = data["list"][20]["wind"]["speed"];
        /*VARIABLE CONVERSION -- DAY3*/
        input.value ="";
        main.innerHTML = nameValue;
        dateC.innerHTML = "Date - "+dateCValue;
        descC.innerHTML = "Conditions - "+descCValue;
        windC.innerHTML = "Wind - "+windCValue;
        tempC.innerHTML = "Temperature - "+tempCValue+"°F";
        minMaxC.innerHTML = minCValue+"°F min/"+maxCValue+"°F max";
        feelsC.innerHTML = "...but feels like "+feelsCValue+"°F";
        /*FORECAST VARIABLES -- DAY4*/ 
        let dateDValue = data["list"][28]["dt_txt"];
        let tempDValue = data["list"][28]["main"]["temp"];
        let maxDValue = data["list"][28]["main"]["temp_max"];
        let minDValue = data["list"][28]["main"]["temp_min"];
        let feelsDValue = data["list"][28]["main"]["feels_like"];
        let descDValue = data["list"][28]["weather"][0]["description"];
        let windDValue = data["list"][28]["wind"]["speed"];
        /*VARIABLE CONVERSION -- DAY4*/
        input.value ="";
        main.innerHTML = nameValue;
        dateD.innerHTML = "Date - "+dateDValue;
        descD.innerHTML = "Conditions - "+descDValue;
        windD.innerHTML = "Wind - "+windDValue;
        tempD.innerHTML = "Temperature - "+tempDValue+"°F";
        minMaxD.innerHTML = minDValue+"°F min/"+maxDValue+"°F max";
        feelsD.innerHTML = "...but feels like "+feelsDValue+"°F";
        /*FORECAST VARIABLES -- DAY5*/ 
        let dateEValue = data["list"][36]["dt_txt"];
        let tempEValue = data["list"][36]["main"]["temp"];
        let maxEValue = data["list"][36]["main"]["temp_max"];
        let minEValue = data["list"][36]["main"]["temp_min"];
        let feelsEValue = data["list"][36]["main"]["feels_like"];
        let descEValue = data["list"][36]["weather"][0]["description"];
        let windEValue = data["list"][36]["wind"]["speed"];
        /*VARIABLE CONVERSION -- DAY5*/
        input.value ="";
        main.innerHTML = nameValue;
        dateE.innerHTML = "Date - "+dateEValue;
        descE.innerHTML = "Conditions - "+descEValue;
        windE.innerHTML = "Wind - "+windEValue;
        tempE.innerHTML = "Temperature - "+tempEValue+"°F";
        minMaxE.innerHTML = minEValue+"°F min/"+maxEValue+"°F max";
        feelsE.innerHTML = "...but feels like "+feelsEValue+"°F";

    })
})

/* pull from WEATHER API*/ /*WEATHER*/
button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    +input.value+
    "&units=imperial&appid=b06ca37a6a6f13ebeaf5ae4e7ea80dd0")
    .then(response => response.json()
    .then(data => {
        console.log(data)
        /*WEATHER VARIABLES*/
        let tempValue = data["main"]["temp"];
        let nameValue = data["name"];
        let descValue = data["weather"][0]["description"];
        let maxValue = data["main"]["temp_max"];
        let minValue = data["main"]["temp_min"];
        let latValue = data["coord"]["lat"];
        let lonValue = data["coord"]["lon"];
        let cloudValue = data["weather"][0]["icon"];
        /*VARIABLE CONVERSION*/
        main.innerHTML = nameValue;
        desc.innerHTML = "Conditions - "+descValue;
        temp.innerHTML = "Temperature - "+tempValue+"°F";
        minMax.innerHTML = minValue+"°F min/"+maxValue+"°F max";
        latLon.innerHTML = "Lat/Lon: "+latValue+" / "+lonValue;
        input.value ="";
        clouds.setAttribute("src", "http://openweathermap.org/img/wn/"+cloudValue+".png")
        setLonLat(data["coord"]["lat"], data["coord"]["lon"]);    
    })    

.catch(err => console.log(err)))
})

/*PRESET BUTTONS REQUESTS*/
button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=honolulu&units=imperial&appid=b06ca37a6a6f13ebeaf5ae4e7ea80dd0")
    .then(response => response.json()
    .then(data => {