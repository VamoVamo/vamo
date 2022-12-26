# Lerna usage

## [Documentación](docs/)


## Comenzando

_Hacer un git clone del proyecto_

### Pre-requisitos

_Instalar lerna de forma global_

```
npm install --global lerna
```

### Instalación

_Una vez clonado el proyecto e instalado lerna, instalar las dependecias_
_Este comando se debe correr dentro de la carpeta principal, donde se encuentra el archivo lerna.json_

```
lerna bootstrap
```

## Ejecutando las pruebas

_Para ejecutar todos los test dentro del proyecto_

```
lerna run test --stream
```

_Para ejecutar los test dentro de un repositorio especifico debera indicar el scope, que es el name del package.json de la aplicacion_

```
lerna run --scope @vamo/vamo-web-api test --stream
```

## Ejecutando el eslint

```
npm run lint --stream
```

## Ejecutando el prettier

_El prettier se ejecuta solamente en vamo-workflows_

```
npm run format --stream
```

## Ejecutando el servidor

_Para iniciar el servidor de vamo web api, se debe correr el siguiente comando

```
lerna run --scope @vamo/vamo-web-api start:dev --stream
```

## Instalar dependencias externas

_Para instalar dependencias externas debera hacer un lerna add < nombre de la dependecia > --scope= < name del package.json >_
_Para instalar en todos los repositorios se debe omitir el --scope._
_Para instalar como devDependencies se agrega la flag --dev._

```
lerna add passport --scope=@vamo/vamo-web-api
lerna add ts-node --dev
```

## Instalar dependencias internas

Compartir funcionalidades entre los distintos repositorios internos.

  1) Crear una carpeta dentro de la carpeta packages donde se crearan los archivos que implementen esta libreria.

```
mkdir packages/signatureUtils ; cd signatureUtils
```
  2) Una vez dentro de la nueva carpeta, hacer un npm init --scope= < name package.json > --yes
    2.1) El scope debera comenzar con @vamo/ seguido del nombre.

```
npm init --scope=@vamo --yes
```

  3) Implementar la funcionalidad que se desea dentro de la carpeta.
    3.1) De necesitar instalar dependencias externas, se debera hacer de la manera antes mencionada con lerna.

```
lerna add jsonwebtoken --scope=@vamo/signatureUtils
```

  4)Para agregar el nuevo package como dependencia de alguna de las apps o incluso de otro package se utilizara el comando
  lerna add < nombre del nuevo package.json con el prefijo @vamo > --scope=< nombre de la app donde se instalara la dependencia >

```
lerna add @vamo/signatureUtils --scope=@vamo/vamo-web-api
```

Para tener un modelo basico del paquete correr:

```
lerna create @vamo/component-name components
lerna create @vamo/package-name packages
lerna create @vamo/my-app apps apps
```
