# Portafolio de Proyectos

# Proyecto de Portafolio y Currículum

¡Bienvenido a mi proyecto de portafolio y currículum! Este proyecto no solo es una representación de mis habilidades y experiencia en el campo de la informática y la ciberseguridad, sino que también es un portafolio personal diseñado para mostrar mis proyectos y logros de manera visual y accesible.

## Objetivos

Este proyecto tiene múltiples objetivos:

1. **Currículum Interactivo:** Funciona como mi currículum interactivo, donde puedo resaltar mis habilidades, experiencia y logros de una manera dinámica y atractiva.

2. **Portafolio Profesional:** Sirve como mi portafolio personal, donde presento los proyectos en los que he trabajado. Cada proyecto tiene su propio espacio donde puedo detallar su descripción, tecnologías utilizadas y enlaces relevantes.

3. **Inclusividad Visual:** Como persona sorda, me esfuerzo por hacer que este proyecto sea inclusivo visualmente, asegurándome de que tanto las personas oyentes como las sordas puedan acceder a la información de manera efectiva.

4. **Potencial para Futuras Oportunidades:** Además de ser una representación de mi trabajo pasado, este proyecto también está diseñado para atraer la atención de posibles empleadores y colaboradores. Es un lugar donde puedo mostrar mi pasión por la programación y la tecnología.

5. **Aprendizaje Continuo:** A medida que continuamente agrego nuevos proyectos y aprendo nuevas tecnologías, este portafolio se actualiza para reflejar mi crecimiento y desarrollo profesional.

Espero que disfrutes explorando mi portafolio y currículum en línea. Si eres una empresa en busca de talento o un profesional interesado en colaborar en futuros proyectos, ¡no dudes en ponerte en contacto conmigo!

Gracias por visitar y explorar mi proyecto. ¡Espero que encuentres la información que estás buscando y te animes a conocer más sobre mis logros y habilidades!


## Introducción

Este repositorio contiene un portafolio de proyectos desarrollado con React para el frontend y Java Spring Boot para el backend. La aplicación permite a los usuarios crear, editar y eliminar proyectos, así como ver una lista de proyectos existentes. También estamos en proceso de solucionar problemas relacionados con la carga de imágenes de proyectos.

## Proceso

Este proyecto ha involucrado varias etapas, desde la configuración inicial hasta la implementación de características clave:

1. **Configuración de entorno:**
   - Configuramos Node.js y npm para el desarrollo de la aplicación React en el frontend.
   - Utilizamos Create React App para crear la estructura inicial del proyecto React.
   - Configuramos Java y Spring Boot para desarrollar la aplicación backend.

2. **Implementación de la interfaz de usuario:**
   - Diseñamos y desarrollamos la interfaz de usuario utilizando React.
   - Implementamos rutas de navegación utilizando React Router para las páginas principales: Inicio, Curriculum Vitae, Proyectos y Nuevo Proyecto.
   - Desarrollamos componentes de React reutilizables, como Navbar y ProjectForm.

3. **Desarrollo del backend:**
   - Configuramos una base de datos MySQL para almacenar proyectos.
   - Desarrollamos una API RESTful utilizando Java Spring Boot para gestionar proyectos.
   - Implementamos CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde el frontend.

4. **Conexión frontend-backend:**
   - Utilizamos Axios para realizar solicitudes HTTP desde el frontend al backend.
   - Configuramos las rutas y controladores en el backend para manejar las solicitudes del frontend.

## Instalación

A continuación, se detallan las principales herramientas y dependencias que hemos instalado para desarrollar y ejecutar este proyecto:

### Frontend (React)

- **Node.js:** Utilizamos Node.js como entorno de ejecución para JavaScript.
- **Create React App:** Creamos la aplicación React con Create React App, que proporciona una estructura de proyecto preconfigurada.
- **React Router:** Implementamos React Router para la gestión de rutas y navegación en la aplicación.
- **Axios:** Utilizamos Axios para realizar solicitudes HTTP al backend.
- **CSS:** Estilizamos la aplicación utilizando hojas de estilo CSS personalizadas.

### Backend (Java Spring Boot)

- **Java:** Desarrollamos el backend utilizando Java como lenguaje de programación.
- **Spring Boot:** Configuramos y desarrollamos la aplicación backend con Spring Boot, que simplifica el desarrollo de aplicaciones Java.
- **PostgreSQL:** Utilizamos PostgreSQL como sistema de gestión de bases de datos para almacenar proyectos.
- **CORS:** Configuramos CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde el frontend.

Es importante tener en cuenta que las herramientas y dependencias pueden variar según las necesidades específicas de tu proyecto y las tecnologías que elijas utilizar. Asegúrate de seguir las instrucciones de instalación y configuración proporcionadas en la sección anterior del README.

## Errores que hemos tenido

Durante el desarrollo de este proyecto, enfrentamos varios desafíos y errores. Aquí se describen algunos de los problemas más destacados y cómo los resolvimos:

- **Error 404 al editar proyectos:** En un momento dado, al intentar editar proyectos, recibimos un error 404, "No se encuentra la página". Esto se debió a un problema en las rutas de React Router. Corregimos las rutas en el componente `Projects` para que redirijan correctamente a la página de edición.

- **Problemas con la carga de imágenes:** Experimentamos dificultades al cargar imágenes de previsualización de proyectos. Estamos en el proceso de solucionar este problema y considerando opciones como el uso de Cloudinary para administrar imágenes de manera más efectiva.

- **Errores de CORS:** Al principio, enfrentamos problemas de acceso cruzado (CORS) al intentar realizar solicitudes desde el frontend al backend. Configuramos CORS en el backend para permitir solicitudes desde el origen del frontend.

## Pruebas con Postman

Para probar las funcionalidades de la API RESTful desarrollada en el backend, utilizamos Postman, una herramienta de prueba de API. A continuación, se proporcionan detalles sobre cómo configurar Postman para realizar pruebas en el proyecto:

- **URL del Backend:** El backend de la aplicación se encuentra en [http://localhost:8082](http://localhost:8082). Puedes utilizar esta URL como punto de conexión para tus solicitudes en Postman.

- **URL del Frontend:** El frontend de la aplicación se encuentra en [http://localhost:5173](http://localhost:5173). Puedes acceder al frontend para interactuar con la interfaz de usuario y realizar solicitudes al backend a través de la aplicación web.

- **Documentación de la API:** Para obtener detalles sobre las rutas y endpoints de la API, puedes acceder a la documentación generada por Swagger en [http://localhost:8082/swagger-ui.html](http://localhost:8082/swagger-ui.html). Esto facilitará la comprensión de cómo realizar solicitudes correctamente.

- **Pruebas de CRUD:** Utilizamos Postman para realizar pruebas de CRUD (Crear, Leer, Actualizar y Eliminar) en proyectos. Puedes configurar solicitudes POST, GET, PUT y DELETE en Postman para interactuar con la API y verificar su funcionalidad.

Siéntete libre de utilizar Postman para realizar tus propias pruebas en el proyecto y explorar todas las funcionalidades disponibles.

Recuerda que estas URL y detalles pueden variar según tu configuración y entorno de desarrollo, así que asegúrate de ajustarlos según corresponda.


## Actualizaciones

Este proyecto está en constante desarrollo y se están realizando actualizaciones periódicas para mejorar su funcionalidad y corregir errores. Algunas de las actualizaciones previstas incluyen:

- **Gestión de imágenes:** Implementar una solución efectiva para la carga y visualización de imágenes de proyectos.

- **Mejora de la interfaz de usuario:** Continuar mejorando la apariencia y usabilidad de la aplicación frontend mediante estilización y diseño responsivo.

- **Autenticación de usuarios:** Agregar autenticación de usuarios para permitir que los creadores de proyectos accedan y administren sus proyectos.

- **Más características:** Explorar la posibilidad de agregar más características, como la categorización de proyectos o la búsqueda.

- **Subir todo el proyecto en github**

