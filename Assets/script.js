// ef5d89285a99d3d3c7b5072a69e5faf3
// connect search button
// get value from search box
var searchBtn = document.getElementById("search-btn")

function searchWeather() {
    var city = $("#search-term").val().trim();
   
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ef5d89285a99d3d3c7b5072a69e5faf3";
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          var card = $("<div>").addClass("card");
          var cardBody = $("<div>").addClass("card-body");
          var cardTitle = $("<h3>").addClass("card-title").text(data.name);
          $("#weatherInfo").append(card.append(cardBody.append(cardTitle)));
        
        });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
searchBtn.addEventListener("click", searchWeather)
