# DemoWeatherApp

Aplicación demo de clima utilizando la Api de Dark Sky

### Despliegue en servidor AWS Ubuntu 14.04

Para desplegar la aplicación en el servidor es necesario contar con NodeJs, Redis y pm2.

#### Instalación nodejs

Ejecute los siguientes comandos para instalar nodejs:

* apt-get update
* curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
* sudo apt-get install -y nodejs

Pruebe el correcto funcionamiento de node ejecutando:
* node -v

(esto deberá desplegar la versión instalada)

#### Instalación redis

Primero se recomienda instalar herramientas de compilación
* sudo apt-get install build-essential tcl

Descargar la última versión de redis
* wget http://download.redis.io/redis-stable.tar.gz

Descomprima el archivo e ingrese a la carpeta, desde dentro ejecute
* make

Para finalizar ejecute 
* make install

#### Ejecutar redis como servicio

Para ejecutar redis como servicio, primero debe dirigirse a la carpeta "utils", esta se encuentra ubicada en el directorio "redis-stable".
Estando en "utils", ejecute el script "install_server.sh" con el siguiente comando:
* ./install_server.sh

Al finalizar la ejecución del scrip, podrá iniciar redis como servicio con el siguiente comando:
(El numero corresponde al puerto indicado en el script)
* service redis_6379 start

Para detener el servicio:
* sudo service redis_6379 stop

#### Instalar pm2
pm2 servirá para ejecutar y monitorear la aplicación 

Para instalar ejecute el siguiente comando:
* npm install pm2 -g

Para ejecutar la aplicación con pm2, debe dirigirse a la ubicación en donde se encuentre el archivo app.js y luego ejecutar:
* pm2 start app.js

Luego para configurar pm2 de modo que se inicie automáticamente cuando exista un reinicio del servidor ejecute:
* pm2 startup

Para finalizar, es necesario guardar el estado de pm2 ejecutando la aplicación. de esta forma si existe un reinicio del servidor, la aplicación también será inicializada automáticamente.
* pm2 save

#### Subir aplicación 

Para subir la aplicación al servidor se recomienda utilizar el cliente "pscp" incluido dentro del paquete de Putty.

link: http://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html


Para mas informacion sobre PM2 visitar: https://github.com/Unitech/pm2

Para ver un demo de la aplicacion desplegada visitar: http://ec2-54-245-59-242.us-west-2.compute.amazonaws.com:3000/


