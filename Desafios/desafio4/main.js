// >> Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:
// GET '/api/productos' -> devuelve todos los productos.
// GET '/api/productos/:id' -> devuelve un producto según su id.
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
// DELETE '/api/productos/:id' -> elimina un producto según su id.


const express = require('express');

class Contenedor {
  constructor() {
    this.id = 0;
    this.content = [];
  }

  save = (item) => {
    item.id = this.id;
    this.content.push(item);
    this.id ++;

    return item.id;
  }

// Devuelve los productos segun su id.

  getById = (id) => {
    const item = this.content.find(element => element.id === id);
    return item ? item : null;
  }

// Devuelve todos los productos dentro del array.

  getAll = () => this.content;


//Borra el producto segun su id.

  deleteById = (id) => {
    const updatedContent = this.content.filter(element => element.id !== id);
    this.content = updatedContent;
  }

//Borra todos los productos del array

  deleteAll = () => {
    this.content = [];
  }
}

const app = express();
const productsRouter = express.Router();


app.use(express.json());

const productClass = new Contenedor();

//GET   devuelve todos los productos.
productsRouter.get('/productos', (req, res) => {
  const products = productClass.getAll();

  res.json(products);
});

//GET  devuelve un producto según su id.
productsRouter.get('/productos/:id', (req, res) => {
  const productId = req.params.id;
  const products = productClass.getById(Number(productId));

  res.json(products);
});

//POST  recibe y agrega un producto, y lo devuelve con su id asignado.
productsRouter.post('/productos', (req, res) => {
  const product = req.body;
  const id = productClass.save(product);

  res.send(id.toString());
});



// PUT  recibe y actualiza un producto según su id.

 productsRouter.put('/productos/:id', (req, res) => {
    const productId = req.params.id;
     const products = productClass.splice(Number(productId, 1));
  
     res.json(products);
   });


//DELETE '/api/productos/:id' -> elimina un producto según su id.

productsRouter.delete('/productos/:id', (req, res) => {
    const productId = req.params.id;
    const deleteProductById = productClass.deleteById(productId);
  
    res.json(productClass);
  });

app.use('/api', productsRouter);

app.listen(8080);