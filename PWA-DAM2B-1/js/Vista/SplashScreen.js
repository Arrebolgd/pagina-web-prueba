
/* 
================================================================================
  PROYECTO: PWA DAM2B - Arquitectura MVC Modular
  ARCHIVO: js/views/SplashScreen.js
  
  ¿CÓMO FUNCIONAN LAS VISTAS EN NUESTRA PWA? (El molde de las pantallas)
  En nuestra arquitectura, cada pantalla de la aplicación es una Clase de JavaScript 
  estándar (sintaxis oficial de ECMAScript / ES6). Funciona como una pequeña "fábrica" 
  cuyo único trabajo es empaquetar y entregar el diseño visual en formato HTML. 
  
IMPORTANTE: TODAS NUESTRAS PANTALLAS VAN A ESTAR DEFINIDAS EN ESTA CARPETA Y DE ESTA MISMA MANERA, PARA QUE EL CONTROLADOR PRINCIPAL PUEDA CARGARLAS Y MOSTRARLAS EN EL CONTENEDOR RAÍZ (<div id="app"></div>) DEL index.html. EL CODIGO HTML QUE INCOPOREN SERA INYECTADO EN EL DOM DE LA PWA, PERO NO SE MOSTRARA HASTA QUE EL CONTROLADOR PRINCIPAL LO DECIDA.



  Para que todas nuestras pantallas hablen el mismo idioma y funcionen igual, 
  utilizamos siempre la misma estructura básica:
  1. 'class NombrePantalla': Creamos una clase (un molde) para la pantalla.
  2. 'render()': Es el método (función de dentro) que se encarga de fabricar el HTML.
  3. 'return' y las comillas invertidas (`` ` ``): Devuelven ese bloque de HTML 
     en formato de texto plano multilínea para que el Controlador pueda recogerlo 
     y pegarlo dentro del contenedor raíz (<div id="app"></div>) del index.html.

  ================================================================================
*/

export class SplashScreen {
    render() {
        return `
            <div class="splash-screen">
                <img src="./imagenes/logotipoApp.png" alt="Logo Aplicacion" class="splash-logo">
                <h1>PWA DAM2B</h1>
                <p>Cargando aplicación...</p>
            </div>
        `;
    }
}