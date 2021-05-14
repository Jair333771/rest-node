const userController = require('../../controllers/v1/users-controller');
const productController = require('../../controllers/v1/products-controller');

var version = 'v1';
const createRoutes = (app) => {
    // Users
    app.get(`/api/${version}/users`, userController.getUsers);
    app.get(`/api/${version}/users/:id`, userController.getUserById);
    // Products
    app.get(`/api/${version}/products`, productController.getProducts);
    app.get(`/api/${version}/products/:id`, productController.getProductById);
    app.post(`/api/${version}/products/create`, productController.createProduct);
    app.put(`/api/${version}/products/:id`, productController.updateProduct);
    app.patch(`/api/${version}/products/:id`, productController.partialUpdateProduct);
    app.delete(`/api/${version}/products/:id`, productController.deleteProduct);
}

module.exports = createRoutes;