importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',

    // 'CacheFirst()' if app is offline
    // 'NetworkFirst()' if app is dependent on network connection .

    new workbox.strategies.CacheFirst()  // no semi-colon (;) needed

    

)