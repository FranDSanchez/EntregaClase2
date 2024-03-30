/* Creo la clase */
class ProductManager {
  constructor() {
    this.products = [];
  }

  /* Metodos */

  /* Muestro todos los productos */
  getProducts() {
    return this.products;
  }

  /* Agrego productos al array */
  addProduct(title, description, price, thumbnail, code, stock) {
    const id = this.products.length + 1;

    const newProducts = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    /* Validacion de datos */
    if (Object.values(newProducts).includes(undefined)) {
      return console.log(`Los datos del producto estan incompletos`);
    } else {
      /* Validacion del campo "Code" */
      const codeExists = this.products.filter(
        (codeExists) => codeExists.code === code
      );
      if (codeExists == false) {
        return this.products.push(newProducts);
      } else {
        console.log(`El codigo del producto "${newProducts.code}" ya existe`);
        return;
      }
    }
  }
  /* Busco producto por ID */
  getProductById(id) {
    const IdExists = this.products.filter((ProductId) => ProductId.id === id);
    if (IdExists) {
      return console.log(this.products[id - 1]);
    } else {
      return console.log("No existe el producto con este ID");
    }
  }
}

const Manager = new ProductManager();
console.log(
  Manager.addProduct("Telefono", "Samsung", "www.google.com", 20, "L01", 20)
);
console.log(
  Manager.addProduct("Libro", "Historia", 10, "www.mercadolibre.com", "L02", 15)
);
console.log(
  Manager.addProduct("Teclado", "Perifericos", 30, "www.google.com", "L03", 5)
);

/* Prueba para validacion de CODE no se  muestra  */
console.log(
  Manager.addProduct("Escuadra", "Matematica", 40, "www.facebook.com", "L03", 2)
);

/* Busco los productos */
console.log("-----PRODUCTO POR ID----");
console.log(Manager.getProductById(3));

/* Muestro todos los productos */
console.log("-----PRODUCTOS TOTALES----");
console.log(Manager.getProducts());
