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

// --- INSTANCIAS DE LAS VISTAS ---
const splashView = new SplashScreen();
const mainView = new MainScreen();

// Contenedor raíz donde se inyectará todo el HTML (definido en el index.html)
const appContainer = document.getElementById('app');

/**
 * Función principal de arranque (punto de entrada).
 */
function iniciarApp() {
    // 1. Muestra la Splash Screen llamando al método render() de su módulo
    appContainer.innerHTML = splashView.render();

    // 2. Tras 3 segundos, salta a la Pantalla Principal (Main Screen)
    setTimeout(() => {
        // Dato que se va a pasar a la vista MainScreen
        const datoVariable = 124;
        
        // Renderizamos usando el módulo de la pantalla principal y le pasamos el dato directo
        appContainer.innerHTML = mainView.render(datoVariable);
    }, 3000);
}

// Ejecución automática al arrancar la aplicación
iniciarApp();