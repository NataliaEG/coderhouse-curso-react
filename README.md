# Proyecto final del curdo de React Js en CoderHouse   

Este proyecto corresponde a un ecommerce de accesorios de celulares, donde se brinda por ejemplo auriculares, cargadores, fundas entre otras cosas.

## Tienda E-Commerce para tienda de accesorios AppCell

Este proyecto corresponde a un ecommerce de accesorios de celulares, donde se ofrecen auriculares, cargadores y fundas. 
La aplicacion permite por ejemplo:

- Ver todos los productos que tiene la tienda
- Filtrar los productos segun su categoría
- Ingresar al detalle de cada producto
- Agregar los productos que se quiere a un carrito
- Generar una orden de compra


## Ejecucion del proyecto

Clonar el repositorio a tu carpeta local

`$ git clone https://github.com/NataliaEG/tiendadeaccesorios-nataliagomez.git`

Ingresar a la carpeta del proyecto

`$  cd .\tiendadeaccesorios-nataliagomez\`

Usar el comando Npm para buscar las dependencias necesarias en el archivo package.json y luego instalarlas

`$ npm install`

Iniciar el servidor en el navegador

`$ npm start`

## Componentes del proyecto

+ **NavBar**: que permite la navegacion entre las categorias de los productos, ingresar al carrito y volver al inicio de la aplicación.

+ **ItemListContainer**: que lista todos los productos del catalogo con ayuda de los componentes **ItemList** e **Item** que le dan un formato.

+ **ItemDetailContainer**: es el componente que muestra un detalle de cada producto a través de **ItemDetail** y el **ItemCount** para comprobar su stock.

+ **CartContainer**: es el componente que se encarga de mostrar los items del carrito junto con **Cart** y **CartItems**

+ **CartWidget**: es el componente que muestra el icono de carrito cuando tiene productos agregados.

+ **Checkout**: es el componente encargado de generar la orden de compra con los datos del carrito y del cliente, enviando los datos a firebase y devolviendo su  Id.


## Demostración del proyecto

![Gif del funcionamiento de la tienda](https://github.com/NataliaEG/tiendadeaccesorios-nataliagomez/blob/routing-ecommerce/TiendaEcommerceAppCell.gif)