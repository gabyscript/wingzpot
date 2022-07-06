const grupoTarjetas = [
    {nombre: "Grand",
     src: "https://i.postimg.cc/K8J0GBnG/grand2final.png"   
    },
    {nombre: "Major",
    src: "https://i.postimg.cc/430wtGLj/major-final.png"
    },
    {nombre: "Minor",
    src: "https://i.postimg.cc/Vsn4S3jH/minorfinal.png"
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



