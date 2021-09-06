document.addEventListener("DOMContentLoaded", function () {

    async function mostrarPersonas() {  
        // OCULTAR IMAGANES PICKACHU
        document.getElementById("imagen-uno").style.visibility = 'hidden';
        document.getElementById("imagen-dos").style.visibility = 'hidden';        

        // ANIMACION LETRAS
        let tl = gsap.timeline({ repeat: 0, yoyo: false });
        const palabras = ['ESCRIBE', 'TU', 'MENSAJE', 'AQUI'];
        let divs = '';
        for (let palabra of palabras) {
            divs = '';
            console.log(palabra);
            for (let i = 0; i < palabra.length; i++) {
                divs += `<div class="letra"><h1 class="display-1 d-inline fw-bold">${palabra[i]}</h1></div>`;
            }

            console.log(divs);
            document.getElementById('palabras').innerHTML = divs;
            await tl.from('.letra', {
                duration: 2,
                y: -150, //'random(-500,500)',
                scale: 0,
                stagger: 0.8,
                //delay: 2 // it's better to use timeline
            }, '+=1');            
        }

        let tl2 = gsap.timeline({ repeat: 0, yoyo: false });
        //animacion imagenes
        document.getElementById("imagen-uno").style.visibility = 'visible';
        await tl2.to('#imagen-uno', { duration: 2.5, ease: "elastic.out(2, 0.4)", y: -90 });
        document.getElementById("imagen-dos").style.visibility = 'visible';
        await tl2.to('#imagen-dos', { duration: 2.5, ease: "elastic.out(2, 0.4)", y: -90 });
        document.getElementById('boton').textContent = "REPETIR";
    }

    const boton = document.getElementById('boton');
    boton.addEventListener('click', mostrarPersonas);

});