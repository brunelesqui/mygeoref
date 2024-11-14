# My Georef

## Descripción

Este proyecto es una aplicación completa que integra tanto el frontend como el backend. 
El backend proporciona una API para manejar los de unidades territoriales nacional, 
mientras que el frontend es una interfaz de usuario para la interacción con el sistema.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express, como base de datos se utilzó archivos JSON
que fueron proporcionados por API del Servicio de Normalización de Datos Geográficos
- **Frontend**: React y Axios para las solicitudes HTTP

## Estructura del Proyecto

<mygeoref>
- <backend>
  - <json>
    - <schema>
      - departamentos.json
      - localidades.json
      - provincias.json
    - departamentos_{nombre-de-provincia}.json
    - localidades_{nombre-de-provincia}.json
    - provincias.json
  - <src>
    - <controllers>
      - department.js
      - localities.js
      - provinces.js
    - <utils>
      - config.js
    - app.js
    - index.js
  - .env
  - package.json
  - README
- <frontend>
  - <src>
    - <components>
      - TerritorialUnit.jsx
    - <services>
      - TerritorialUnit.js
    - App.jsx
    - main.jsx
  - index.html
  - package.json
  - README
  - vite.config.js
- <docs>
  - <img>
    - frontend.jpg
- README.md

## Instalación

Para ejecutar el proyecto localmente sigue estos pasos.

Requisitos previos:

Node.js (20.11.1)
Express (4.21.1)
Dotenv (16.4.5)
Cors (2.8.5)

React (18.3.1)
Axios (1.7.7)
Vite (5.4.10)

Configuración:

1. Clona el repositorio
2. Configura las variables de entorno para el backend
   En backend/.env define las variables del puerto y nombre del servidor
   En frontend/.env define la URL de la API

Instalación del backend

Navega a la carpeta del backend
  cd backend
Instala las dependencias
  npm install
Inicia el servidor de desarrollo
  npm run dev
El backend será ejecutado en http://localhost:3001 o el puerto que definas

Instalación del frontend

Navega a la carpeta del frontend
  cd ../frontend
Instala las dependencias
  npm install
Inicia la aplicación
  npm start
La aplicación estará disponible en http://localhost:5173
El frontend interactúa con la API del backend para obtener las unidades territoriales