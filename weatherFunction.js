let button=document.querySelector(".submit");
let input=document.querySelector(".input_text");
let main=document.querySelector("#name");
let temp=document.querySelector(".temp");
let desc=document.querySelector(".desc");
let clouds=document.querySelector(".clouds");


/* pull from WEATHER API*/
button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    +input.value+
    "&units=imperial&appid=b06ca37a6a6f13ebeaf5ae4e7ea80dd0")
    .then(response => response.json())
    .then(data => {
        
        let tempValue = data["main"]["temp"];
        let nameValue = data["name"];
        let descValue = data["weather"][0]["description"];
        
        main.innerHTML = nameValue;
        desc.innerHTML = "Description - "+descValue;
        temp.innerHTML = "Temperature - "+tempValue;
        input.value ="";
})

.catch(err => alert("Wrong city info!"))
    })