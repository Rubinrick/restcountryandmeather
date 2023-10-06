
var countryApi = fetch( "https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    data.map((element) => {
      const countryobj = {
        ...element,
        name: element.name.common,
        flag: element.flags.png,
        code: element.cioc,
        capital: element.capital,
        region: element.region,
        population: element.population,
        latitude: element.latlng[0],
        longitude: element.latlng[1]

      };
      createcountry(countryobj);
      
      
     
        // console.log(element)
    })
  })
  
  
   
function createcountry({ name, flag, code, capital, region, population,latitude,longitude }) {
   
  document.body.innerHTML += 
  ` <div class="container">
     <div class = "row">
      <div class = "col col-lg-4 col-sm-12">
       <div class="card card-header style="width : 18rem"  >
          <h1 id="title" class="card-title">${name}</h1>
          <img src="${flag}" class="card-img-top" alt="${name}'Flag image">
 
        <div class="card-body car" >
          <p><span>Population :</span>${population}</p>
          <p><span>Captial :</span> ${capital}</p>
          <p><span>Region :</span> ${region}</p>
          <p><span>Country Code :</span>${code}</p>
          <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
          <div id=${name}>  </div>
        </div>
       </div>
      </div>
     </div>
    </div>
`
}



function block(lat,lng,name){

  var weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`
   
  console.log(name)
 fetch(weatherApi)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
      In ${name.id}  
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault())
