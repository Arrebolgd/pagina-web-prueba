/* 
================================================================================
  PROYECTO: PWA DAM2B - Arquitectura MVC Modular (Curso 26/27)
  AUTOR/A: Profesora Ramos
  ARCHIVO: js/Controlador/AppController.js
  
  DESCRIPCIÓN Y PROPÓSITO (EL CONTROLADOR / DIRECTOR DE ORQUESTA):
  Este archivo funciona como el CONTROLADOR de la arquitectura. Su misión es 
  coordinar el flujo de la aplicación: arranca mostrando la Splash Screen y, 
  tras unos segundos, la sustituye por la Pantalla Principal (MainScreen) 
  pasándole un dato dinámico para personalizar su contenido.
================================================================================
*/

// --- IMPORTACIÓN DE LOS MÓDULOS DE VISTAS ---
import { SplashScreen } from '../Vista/SplashScreen.js';
import { MainScreen } from '../Vista/MainScreen.js';
import { NuevaPantalla } from '../Vista/NuevaPantalla.js';

// --- INSTANCIAS DE LAS VISTAS ---
const splashView = new SplashScreen();
const mainView = new MainScreen();
const newScreen = new NuevaPantalla();


// Contenedor raíz donde se inyectará todo el HTML (definido en el index.html)
const appContainer = document.getElementById('app');
const daysLeftValue = daysLeft();
/**
 * Función principal de arranque (punto de entrada).
 */
function iniciarApp() {
    // 1. Muestra la Splash Screen llamando al método render() de su módulo
    appContainer.innerHTML = splashView.render();

    // 2. Tras 3 segundos, salta a la Pantalla Principal (Main Screen)
    setTimeout(() => {

        // Renderizamos usando el módulo de la pantalla principal y le pasamos el dato directo
        appContainer.innerHTML = mainView.render(daysLeftValue);

        window.addEventListener('click', () => {
            appContainer.innerHTML = newScreen.render();
        }, { once: true });

    }, 3000);
}

// Ejecución automática al arrancar la aplicación
iniciarApp();

function daysLeft(){
    
    const objectiveDate = new Date(2027, 1, 28);
    const today = Date.now();
    let difDays = Math.ceil((objectiveDate - today) / (1000 * 60 * 60 * 24));

    return difDays;
} 