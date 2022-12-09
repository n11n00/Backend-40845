// >> Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:


// GET '/api/productos' -> devuelve todos los productos.
// GET '/api/productos/:id' -> devuelve un producto según su id.
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
// DELETE '/api/productos/:id' -> elimina un producto según su id.



// Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.
// Para el caso de que un producto no exista, se devolverá el objeto:
// { error : 'producto no encontrado' }
// Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
// Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
// Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
// El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
// Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.


const express = require ('express');
const app = express();
const { Router } = express;
const productsRouter = Router()
const PORT = 3000
app.use(express.json());
app.use(`/api` , productsRouter);




const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)    
  });

server.on("error", error => console.log(`Error en servidor${error}`));
  


// GET '/api/productos'

const fs = require ('fs')

productsRouter.get('/productos', function (req, res) {
  const objects = fs.readFileSync('products.txt', 'utf-8');
  parseObjects = JSON.parse(objects);
  res.json({parseObjects});
});






// GET '/api/productos/:id'

// productsRouter.get('/productos/:id', (req, res) => {
//   const inyectID = fs.writeFileSync('products.txt', 'a');

  // const id = req.params.id;

  // res.json({ parseObjects:  });
// })





 

// POST
const product = [];

productsRouter.post('/productos', (req, res) => {
    const addProduct = req.body;
    product.push(addProduct);

    res.json({ product });

    const productsInArray = product.length;
    console.log(productsInArray)
});

