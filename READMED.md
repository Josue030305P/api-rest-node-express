# Procedimientos para implementación

1. Clonar el repositorio

```
git clone https://

``` 

2. Reconstruir node_modules
``` 
npm install

``` 

3. Reconstruir el archivo .envb


``` 
DB_HOST= 
DB_PORT=
DB_PASSWORD= 
DB_USER= 
DB_DATABASE= 

``` 

4. Restaure la BD (db> database.sql)

CREATE DATABASE appstore;
USE appstore;

``` 
CREATE TABLE softwares(
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(40) NOT NULL,
  esapciomb   SMALLINT NOT NULL,
  versionsoft VARCHAR(10) NOT NULL,
  precio      DECIMAL(7,2) NOT NULL
)ENGINE=InnoDB;

``` 

5. Ejecute el proyecto.

``` 
npm run dev

``` 