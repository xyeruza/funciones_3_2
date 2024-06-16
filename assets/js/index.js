let keyColor = 'white';
const caja = document.getElementById("key");

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
           keyColor= 'pink';
           caja.style.backgroundColor = keyColor;
        }
        else if (event.key === 's') {
            keyColor= 'orange'; 
            caja.style.backgroundColor = keyColor;
         }
        else if (event.key === 'd') {
            keyColor= 'lightblue';
            caja.style.backgroundColor = keyColor;
        }
        else if (event.key === 'q') {
            keyColor= 'purple';
            agregarElemento(keyColor)
        }
        else if (event.key === 'w') {
            keyColor= 'gray';
            agregarElemento(keyColor)
        }
        else if (event.key === 'e') {
            keyColor= 'brown';
            agregarElemento(keyColor)
        }
        })

        function agregarElemento(keyColor) {
            // Obtenemos el elemento contenedor por su ID
            contenedor = document.getElementById("contenedor");
            // Creamos un nuevo elemento <div>
            nuevoElemento = document.createElement("div");
            // Asignamos un texto al nuevo elemento
            nuevoElemento.style.backgroundColor = keyColor;
            // Agregamos el nuevo elemento al contenedor
            contenedor.appendChild(nuevoElemento);
            }

        



