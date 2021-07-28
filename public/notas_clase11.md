# Seteos básicos de Express

## Estructura de carpetas
Se deben crear 2 carpetas dentro del proyecto:
- public: guarda todos los archivos que se consideran estáticos, que siempre quiero tener disponibles en mi aplicación, los css, imgs, etc.
    - css: guardaremos dentro el css
    - images: para las imagenes
    - js: guardo los JavaScript que hacen algo directamente en el frontend.
- views: aquí se guardarán todas las vistas de nuestra app, es decir, los HTML.

Se debe crear un archivo app.js con la configuración del servidor listo para ser levantado

```
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Server corriendo en el puerto 3000");
});
```

## ¿Cómo le digo a Express que quiero configurar a public como archivos públicos?
Se le debe informar a mi aplicación que quiero usar archivos estáticos.
Hay una función llamada static que recibe el path de la carpeta que quiero hacer estática:
``` app.use(express.static (path)); ```

Para usar esto se necesita agregar el módulo path con ``` const path = require('path'); ```

El objetivo de este módulo es unificar las rutas dentro de los distintos Sistemas operativos.
