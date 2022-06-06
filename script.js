
let participants = ["André", "Beatriz", "Fabio", "Vanessa", "Marcos", "Gustavo", "Aline", "Raquel", "Jean", "Celso", "Francine", "Luiz", "Cristian", "Edgar", "Heloísa", "Teodoro"]

//Create a function for the draw
function draw() {

    let np = participants.length

    let ns = Math.floor(Math.random() * np)

    document.getElementById("winner").innerHTML = participants[ns]
} 