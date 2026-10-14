# Estudio Bardales & Abogados

Sitio en HTML, CSS y JavaScript puro. La web pública no necesita compilación; el panel usa Supabase Auth y Storage para proteger y publicar los cambios.

## Abrir y editar

Abre `index.html` en el navegador. Puedes editar los archivos con Visual Studio Code o cualquier editor de texto.

- `index.html`: inicio.
- `nosotros.html`: El Estudio, presentación institucional.
- `equipo.html`: El Equipo, espacio para añadir los profesionales con sus fotos y datos confirmados.
- `servicios.html`: las dos especialidades.
- `procesos-de-familia.html`: los nueve temas de familia.
- `procesos-hereditarios.html`: los nueve temas hereditarios.
- `conferencias.html`: Conferencias y eventos, espacio para actividades confirmadas.
- `contacto.html`: datos de contacto, dirección y mapa de Urb. Huanchaco Mz. 4 Lt. 3, Chepén (a tres cuadras del Poder Judicial).
- `styles.css`: colores, tipografía y diseño adaptable.
- `script.js`: menú móvil.
- `assets/`: logo e imágenes recuperados del avance que proporcionaste.

El inicio no contiene testimonios, entrevistas y clases ni últimas noticias.

## Contacto

Correo: estudiobardalesabogados@hotmail.com
WhatsApp: +51 923 324 528

Contacto incluye los datos, la dirección, el mapa y un formulario. El botón Enviar abre la aplicación de correo con el mensaje preparado; el visitante completa el envío allí. Los botones de correo abren la aplicación de correo del visitante.

## Subir a Netlify

Descomprime el ZIP y arrastra la carpeta `web-bardales` (la que contiene `index.html`) a la zona de despliegue manual de Netlify. No hace falta un comando de build. También puedes cargar los archivos a cualquier hosting estático.

## Personalizar

Edita el contenido directamente en los HTML y los colores en las variables al inicio de `styles.css`. Todos los enlaces entre páginas son relativos y funcionan también al abrir los archivos localmente.

### Cambiar imágenes sin editar código

Abre `admin.html`, inicia sesión con la única cuenta autorizada y usa **Cambiar imagen**. El cambio se publica para todos los visitantes. Consulta `PanelAdministrativo.txt` para configurar Supabase y registrar al administrador.

Las páginas conservan la identidad del avance proporcionado y usan una composición propia inspirada en la referencia. Las descripciones de servicios se redactaron nuevamente. No se incluyeron profesionales, credenciales, dirección, horarios o eventos que no hayan sido confirmados. Añade los eventos reales en `conferencias.html` cuando tengas sus datos e imágenes.
