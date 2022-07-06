const grupoTarjetas = [
    {nombre: "Grand",
     src: "https://i.postimg.cc/yYZFp56C/GRAND-sin-borde.png"   
    },
    {nombre: "Major",
    src: "https://i.postimg.cc/cHznX7VJ/major-sin-borde.png"
    },
    {nombre: "Minor",
    src: "https://i.postimg.cc/bYK6v1s8/minor-sin-borde.png"
    },
    {nombre: "Sinpremio",
    src: "https://i.postimg.cc/0y2CBjhL/Seleccionar-carta-2.png"
    }];

const totalTarjetas = grupoTarjetas.concat(grupoTarjetas).concat(grupoTarjetas);
let mesa = document.querySelector("#mesa");

function barajarTarjetas(){
    var resultado = totalTarjetas.sort(function(){
        return 0.5 - Math.random();

    });

    return resultado;
}

function repartirTarjetas (){
    
    let tarjetasBarajadas = barajarTarjetas();

    for(let tarjetasind of totalTarjetas) {
        mesa.innerHTML += `
            <div class= 'tarjeta'>  
            <div class= 'contenido-tarjeta' style="background-image:url(${tarjetasind.src});"> 
            
            </div> 
            </div>

        `
    }
}

function voltear() {

    var descubiertas;
    var cartasVolteadas = document.querySelectorAll(".descubierta");    
    this.classList.add("descubierta");
    descubiertas = document.querySelectorAll(".descubierta"); 

}

repartirTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click",voltear);
});



