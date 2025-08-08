window.onload = function(){

    const cont1 = document.getElementById("gif1");
    const cont2 = document.getElementById("gif2");
    const cont3 = document.getElementById("btnopcion1");
    const cont4 = document.getElementById("btnopcion2");
    const cont5 = document.getElementById("btnopcion3");


    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let img5 = document.createElement("img");

    img1.src = "./Imagenes/icono1.gif"
    img1.width = 100
    img1.height = 100;
    

    img2.src = "./Imagenes/icono2.gif"
    img2.width = 100;
    img2.height = 100;

    img3.src = "./Imagenes/agendas.gif"
    img3.width = 50;
    img3.height = 50;
    
    img4.src = "./Imagenes/barberos.gif"
    img4.width = 50;
    img4.height = 50;

    img5.src = "./Imagenes/ubicacion.gif"
    img5.width = 50;
    img5.height = 50;
    

    /*cont1.appendChild(img1);
    cont2.appendChild(img2);*/
    cont3.appendChild(img3);
    cont4.appendChild(img4);
    cont5.appendChild(img5);

    let indice = 0;
    const images = document.querySelectorAll("#slide img");
    const total = images.length;
    console.log(total);
    
    if (total > 0) {
        function changeImage() {
            // Quita la clase active de todas las imágenes
            images.forEach((img) => img.classList.remove("active"));
            // Agrega la clase active solo a la imagen actual
            images[indice].classList.add("active");

            // Imprime el índice actual para verificar
            console.log("Mostrando imagen en índice:", indice);

            // Incrementa el índice, y si llega al final, vuelve a 0
            indice = (indice + 1) % total;
        }

        // Muestra la primera imagen
        changeImage();
        
        // Configura el intervalo para cambiar la imagen cada 6 segundos
        setInterval(changeImage, 6000);
    } else {
        console.error("No se encuentran imágenes en el contenedor #slide.");
    }
    
    let ejec=false

    document.getElementById("btnopcion1").addEventListener("mouseenter", function(){

    if(!ejec){
        const cont_agendas = document.getElementById("opcion1");
        let text_agendas = document.createElement("p");

        text_agendas.innerHTML = "Agendas";
        text_agendas.style.color = "white";
        text_agendas.style.fontSize = "30px";
        text_agendas.style.fontFamily = "'Teko', sans-serif";
        text_agendas.style.fontWeight = "bold";
        text_agendas.style.marginTop = "20px";
        text_agendas.style.marginLeft = "10px";
        text_agendas.style.textAlign = "center";

        cont_agendas.appendChild(text_agendas);
        
        ejec=true;
        
        setTimeout(function(){
            cont_agendas.removeChild(text_agendas);
            ejec = false;
        }, 6000);
    }
    

    });

    let ejec2=false

    document.getElementById("btnopcion2").addEventListener("mouseenter", function(){

    if(!ejec2){
        const cont_agendas = document.getElementById("opcion2");
        let text_agendas = document.createElement("p");

        text_agendas.innerHTML = "Barberos";
        text_agendas.style.color = "white";
        text_agendas.style.fontSize = "30px";
        text_agendas.style.fontFamily = "'Teko', sans-serif";
        text_agendas.style.fontWeight = "bold";
        text_agendas.style.marginTop = "20px";
        text_agendas.style.marginLeft = "10px";
        text_agendas.style.textAlign = "center";

        cont_agendas.appendChild(text_agendas);
        
        ejec2=true;
        
        setTimeout(function(){
            cont_agendas.removeChild(text_agendas);
            ejec2 = false;
        }, 6000);
    }
    

    });

    let ejec3=false

    document.getElementById("btnopcion3").addEventListener("mouseenter", function(){

    if(!ejec3){
        const cont_agendas = document.getElementById("opcion3");
        let text_agendas = document.createElement("p");

        text_agendas.innerHTML = "Ubicación";
        text_agendas.style.color = "white";
        text_agendas.style.fontSize = "30px";
        text_agendas.style.fontFamily = "'Teko', sans-serif";
        text_agendas.style.fontWeight = "bold";
        text_agendas.style.marginTop = "20px";
        text_agendas.style.marginLeft = "10px";
        text_agendas.style.textAlign = "center";

        cont_agendas.appendChild(text_agendas);
        
        ejec3=true;
        
        setTimeout(function(){
            cont_agendas.removeChild(text_agendas);
            ejec3 = false;
        }, 6000);
    }
    

    });

};