
# Next Backend - RedCollege

Este es un proyecto desarrollado con AdonisJS 6. A continuación se encuentran las instrucciones para configurar y ejecutar el proyecto, así como una descripción de las carpetas principales.

## Requisitos

- **Node.js**: Este proyecto requiere Node.js v22. Asegúrate de tener esta versión instalada en tu sistema. Puedes verificar tu versión de Node.js con el siguiente comando:

  ```bash
  node -v
  ```

  Si necesitas instalar o actualizar Node.js a la versión 22, puedes descargarla desde [nodejs.org](https://nodejs.org/) o usar un gestor de versiones como `nvm` (Node Version Manager).

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/RedCollege/backend-next backend-next
   cd backend-next
   ```
2. **Crea el archivo de configuración `.env`**:

   Copia el archivo de ejemplo `.env.example` a `.env`:

   ```bash
   cp .env.example .env
   ```

   Luego, abre el archivo `.env` y ajusta las variables de entorno según tus necesidades, como las credenciales de la base de datos y las claves secretas.

3. **Instala las dependencias**:

   Asegúrate de estar en la raíz del proyecto y luego ejecuta:

   ```bash
   npm install
   ```

## Ejecución del Proyecto

Para ejecutar el proyecto en modo de desarrollo, usa el siguiente comando:

```bash
node ace serve --hmr
```

Esto iniciará el servidor de desarrollo y aplicará automáticamente los cambios en el código sin necesidad de reiniciar manualmente.

Para ejecutar las pruebas, usa el siguiente comando:

```bash
node ace test functional      
```
