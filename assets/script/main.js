const grupoTarjetas = ["🎷", "🎺", "🥁", "🎸",];

const totalTarjetas = grupoTarjetas.concat(grupoTarjetas).concat(grupoTarjetas);

function barajarTarjetas(){
    var resultado = totalTarjetas.sort(function(){
        return 0.5 - Math.random();

    });

    return resultado;
}

function repartirTarjetas (){
    let mesa = document.querySelector("#mesa");
    let tarjetasBarajadas = barajarTarjetas();

    tarjetasBarajadas.forEach(function(elemento) {
        let tarjeta = document.createElement("div");

        tarjeta.innerHTML = 
            "<div class= 'tarjeta'> " +
            "<div class= 'contenido-tarjeta'>" +
            elemento +
            "</div>" +
            "</div>";
        
        mesa.appendChild(tarjeta); 
    });

    
}

function voltear() {
    var descubiertas;

    var cartasVolteadas = document.querySelectorAll(".descubierta");

    /*
    if (cartasVolteadas.length > 1) {
        return;
    }*/
    
    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta");

    

}

repartirTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click",voltear);
});



