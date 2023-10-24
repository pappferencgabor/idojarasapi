function generateCard({ day, temperature, wind }) {
    return `
        <div class="idojaras">
            <h1>Nap: ${day}</h1>
            <h3>Hőfok: ${temperature}</h3>
            <h3>Szél: ${wind}</h3>
        </div>`
}
function generateCard2(temperature, wind, description) {
    return `
        <div class="idojaras">
            <h1>${description}</h1>
            <h3>Hőfok: ${temperature}</h3>
            <h3>Szél: ${wind}</h3>
        </div>`
}
function keres() {
    let loc = document.getElementById("location").value;
    const API_URL = `https://goweather.herokuapp.com/weather/${loc}`;
    let h1 = document.getElementById("title")
    let cardsDOM = document.getElementById("jovoidojaras");
    let cardToday = document.getElementById("idojaras");

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            if (data.temperature == "") {
                alert("Nem megfelelő érték")
            }
            else {
                cardsDOM.innerHTML = ""
                cardToday.innerHTML = ""
            
                h1.innerText = `${loc} - Időjárás`;

                cardToday.innerHTML += generateCard2(data.temperature, data.wind, data.description)

                data.forecast.forEach(element => {
                    cardsDOM.innerHTML += generateCard(element)
                });
            }
        })
}