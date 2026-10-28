/* 
================================================================================
  PROYECTO: PWA DAM2B - Arquitectura MVC Modular
  ARCHIVO: js/views/MainScreen.js
  
  OS REPITO EL FUNCIONAMIENTO, YA NO LO PONDREMOS MAS:
  ¿CÓMO FUNCIONAN LAS VISTAS EN NUESTRA PWA? (El molde de las pantallas)
  En nuestra arquitectura, cada pantalla de la aplicación es una Clase de JavaScript 
  estándar (sintaxis oficial de ECMAScript / ES6). Funciona como una pequeña "fábrica" 
  cuyo único trabajo es empaquetar y entregar el diseño visual en formato HTML. 
  
  IMPORTANTE: TODAS NUESTRAS PANTALLAS VAN A ESTAR DEFINIDAS EN ESTA CARPETA Y DE ESTA MISMA MANERA, 
  PARA QUE EL CONTROLADOR PRINCIPAL PUEDA CARGARLAS Y MOSTRARLAS EN EL CONTENEDOR RAÍZ 
  (<div id="app"></div>) DEL index.html. EL CÓDIGO HTML QUE INCORPOREN SERÁ INYECTADO EN EL DOM DE LA PWA, 
  PERO NO SE MOSTRARÁ HASTA QUE EL CONTROLADOR PRINCIPAL LO DECIDA.

  COMO SE LLEGA A ESTA PANTALLA MAIN SCREEN? FLUJO DE NAVEGACIÓN:
  A esta pantalla (MainScreen) se llega de forma automática a partir de la SplashScreen 
  tras transcurrir un número determinado de segundos (N segundos) gestionados por el controlador.

  Para que todas nuestras pantallas hablen el mismo idioma y funcionen igual, 
  utilizamos siempre la misma estructura básica:
  1. 'class NombrePantalla': Creamos una clase (un molde) para la pantalla.
  2. 'render()': Es el método (función de dentro) que se encarga de fabricar el HTML.
  3. 'return' y las comillas invertidas (`` ` ``): Devuelven ese bloque de HTML 
     en formato de texto plano multilínea para que el Controlador pueda recogerlo 
     y pegarlo dentro del contenedor raíz (<div id="app"></div>) del index.html.

  
  IMPORTANTE EN ESTA PANTALLA TENEMOS DATOS DINAMICOS:
  ¿CÓMO FUNCIONAN LOS DATOS DINÁMICOS (${datoCalculado})?
  Gracias a las comillas invertidas, podemos meter variables de JavaScript directamente 
  dentro del HTML usando la sintaxis ${variable}. El Controlador le pasará este valor 
  calculado a la vista para que aparezca en pantalla de forma dinámica.

PASARE A LAMARLA DASHBOARD: En el mundo del desarrollo web y de aplicaciones, se le suele llamar Dashboard (o panel de control) a la pantalla principal a la que accede el usuario una vez que ha superado el proceso de carga o de inicio de sesión (la Splash Screen o la pantalla de login).

Mientras que la Splash Screen es una pantalla temporal de bienvenida (de tránsito), el Dashboard es el "centro de operaciones" o la pantalla principal de contenido donde el usuario ya puede ver información útil, métricas (como el dato calculado) y empezar a interactuar con la aplicación.




================================================================================
*/

export class MainScreen {
    
    /**
     * El método render puede recibir opcionalmente datos (como un objeto o un número)
     * enviados por el Controlador para mostrarlos de forma dinámica en la interfaz.
     * ANALIZAD EL PASO DEL PARAMETRO Y QUE UTILIDAD PUEDEN TENER ESOS TRES GUIONES ????
     */
    render(datoCalculado = "---") {
        return `
            <div class="main-screen">
                <header class="app-header">
                    <h1>PWA DAM2B - Quedan ${datoCalculado} días</h1>
                </header>
                <main class="app-content">
                    <h2>Soy un titular: Hola, soy la Pantalla Principal</h2>
                    <p>Soy un parrafo: Aquí pon el  texto que tu quieras.</p>
                    <p>Prueba de modificación conectado a GitHub.</p>
                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjE0NHA3b3NnYndhenVyZzZlbWYxMWQ4YWJqeTVxeTNlMTZ6dDVjMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/y4PQTcLTYJwOI/giphy.gif" alt="gif" height="auto" width="auto">
                </main>
            </div>
        `;
    }
}