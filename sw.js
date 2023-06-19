const STATIC_CACHE = "static";
//Se declara un vector con la ubicacion y el nombre de los archivos que forman parte del proyecto necesarios para su ejecución
const APP_SHELL =[
"/",
"index.html",
"css/styles.css",
"css/tabs2",
"js/main.js",
"js/arriba.js",
"js/autoslider.js",
"js/modal.js",
"js/slide.js",
"js/tooltip.js",
"img/logo_osfags.png",
"Contacto/index.html",
"Bienvenida/index.html",
"Comités-y-Órganos/index.html",
"Informe-Auditorías/index.html",
"Programas-y-Servicios/index.html",
"Quiénes-Somos/index.html",
"Denuncia/index.html",
"Sobre-el-OSFAGS/index.html",
"Temas-Interés/index.html",
"assets/casa-corazón.mp4",
"assets/hogar-de-la-niña-web.mp4",
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
"https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/css/uikit.min.css",
"cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js",
"https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit-icons.min.js"

];
//Se agrega links de bootstrap, css y js

//En el evento install se agregan los archivos a la caché, se ejecuta cuando se abre la app automático
self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});
//En el evento fetch se envian los archivos a la pagina web o páginas, se ejecutan cuando lo solicita la página
self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
});