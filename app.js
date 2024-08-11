document.addEventListener("DOMContentLoaded", function () {

    async function mostrarPersonas() {  
        // OCULTAR IMAGENES
        document.getElementById("imagen-uno").style.visibility = 'hidden';
        document.getElementById("imagen-dos").style.visibility = 'hidden';        

        // ANIMACION LETRAS
        let tl = gsap.timeline({ repeat: 0, yoyo: false });
        const palabras = ['¡HOLA ODETTE!', '¿SABES ALGO?', 'NO TODOS', 'LOS DÍAS ', 'SON BONITOS,', 'PERO TÚ SÍ ', 'ESTÁS BONITA ', 'TODOS LOS DÍAS'];
        let divs = '';
        for (let palabra of palabras) {
            divs = '';
            for (let i = 0; i < palabra.length; i++) {
                let char = palabra[i] === ' ' ? '&nbsp;' : palabra[i]; // Añadir espacio
                divs += `<div class="letra"><h1 class="display-1 d-inline fw-bold">${char}</h1></div>`;
            }

            document.getElementById('palabras').innerHTML = divs;
            await tl.from('.letra', {
                duration: 1.1,
                y: -150, //'random(-500,500)',
                scale: 0,
                stagger: 0.4,
            }, '+=1');            
        }

        let tl2 = gsap.timeline({ repeat: 0, yoyo: false });
        // Animación de imágenes
        document.getElementById("imagen-uno").style.visibility = 'visible';
        await tl2.fromTo('#imagen-uno', 
            { y: 150 }, // Posición inicial
            { duration: 2.5, ease: "elastic.out(2, 0.4)", y: 0 } // Posición final
        );
        document.getElementById("imagen-dos").style.visibility = 'visible';
        await tl2.fromTo('#imagen-dos', 
            { y: 150 }, // Posición inicial
            { duration: 2.5, ease: "elastic.out(2, 0.4)", y: 0 } // Posición final
        );
        document.getElementById('boton').textContent = "REPETIR";
    }

    const boton = document.getElementById('boton');
    boton.addEventListener('click', mostrarPersonas);

});
