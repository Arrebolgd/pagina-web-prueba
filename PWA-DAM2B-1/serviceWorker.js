/* 
================================================================================
  ARCHIVO: serviceWorker.js (Service Worker)
  DESCRIPCIÓN Y PROPÓSITO:
  El Service Worker es un script especial escrito en javascript que corre en segundo plano en el navegador 
  del teléfono, de forma completamente independiente de la página web (la interfaz).
  
  ¿POR QUÉ ES NECESARIO?
  1. Actúa como un "proxy" o intermediario invisible entre tu PWA e Internet.
  2. Es un requisito obligatorio impuesto por los navegadores (Chrome/Safari) 
     para que una web pueda considerarse una PWA instalable en el móvil.
  3. Permite que la aplicación funcione incluso cuando el usuario está sin conexión.
================================================================================
*/


/**
 * ----------------------------------------------------------------------------
 * 1. EVENTO DE INSTALACIÓN (INSTALL)
 * Se ejecuta una única vez en cuanto el navegador detecta y descarga el Service Worker.
 * ----------------------------------------------------------------------------
 */
self.addEventListener('install', (evento) => {
    // 'self' hace referencia al propio Service Worker ejecutándose en segundo plano.
    console.log('[Service Worker] Instalado correctamente en el navegador.');
    
    // NOTA DIDÁCTICA: Aquí es donde los desarrolladores suelen utilizar un 
    // event.waitUntil() junto a la API de Caché para guardar los archivos 
    // principales de la app (HTML, CSS, JS) para que estén disponibles sin internet.


    /* ========================================================================
       CÓDIGO DE CACHÉ (COMENTADO - Así es como se activaría el modo offline)
       ======================================================================== */
       
       const NOMBRE_CACHE = 'pwa-dam2b-v1';
       const ARCHIVOS_A_CACHEAR = [
           './',
           './index.html',
           './css/styles.css',
           './js/Controlador/AppController.js',
           './js/Vista/SplashScreen.js',
           './js/Vista/MainScreen.js',
           './manifest.json',
           './imagenes/logotipoApp.png',
           './imagenes/iconoAppdam2b.png'
       ];

       evento.waitUntil(
           caches.open(NOMBRE_CACHE)
               .then((cache) => {
                   console.log('[Service Worker] Guardando archivos en la caché...');
                   return cache.addAll(ARCHIVOS_A_CACHEAR);
               })
       );
});


/**
 * ----------------------------------------------------------------------------
 * 2. EVENTO DE INTERCEPCIÓN DE RED (FETCH)
 * Se dispara CADA VEZ que la PWA intenta pedir un archivo o recurso (una imagen, 
 * un script, un archivo de audio, un cambio de pantalla, etc.).
 * ----------------------------------------------------------------------------
 */

self.addEventListener('fetch', (evento) => {
    
    // evento.respondWith intercepta la petición original y nos permite decidir 
    // qué respuesta enviarle a la aplicación.
    
    evento.respondWith(

         // ESTRATEGIA DE RED: "Network First, falling back to Cache"
        // 1. Intentamos ir primero a Internet a buscar el archivo fresco.


        fetch(evento.request)
            .catch(() => {

                // 2. ¿QUÉ PASA SI FALLA? (Ej: El usuario está en el metro sin cobertura o sin datos)
                // El .catch intercepta el error de conexión.


                console.log('[Service Worker] Sin conexión. Buscando en la caché:', evento.request.url);
                
                // 3. Rescatamos el archivo guardado previamente en la memoria interna del teléfono
                // para que la aplicación no se rompa y siga funcionando offline
                // Buscamos en la caché y comprobamos si encontramos el archivo:
                return caches.match(evento.request).then((respuestaEnCache) => {
                    if (respuestaEnCache) {
                        return respuestaEnCache; // ¡Lo encontramos! Lo devolvemos bien.
                    }
                    
                    // Si tampoco está en la caché, podemos devolver una respuesta genérica 
                    // o dejar que falle limpiamente para evitar el TypeError.
                    return new Response("Recurso no disponible offline", {
                        status: 404,
                        statusText: "Not Found"
                    });
                });
            })
    );
});