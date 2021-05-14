const itemsPage = 5;

var products = [
    {
        "id": 1,
        "name": "cerulean",
        "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
    },
    {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    {
        "id": 3,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    },
    {
        "id": 4,
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    {
        "id": 5,
        "name": "tigerlily",
        "year": 2004,
        "color": "#E2583E",
        "pantone_value": "17-1456"
    },
    {
        "id": 6,
        "name": "blue turquoise",
        "year": 2005,
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    }
];

const getProducts = (req, res) => {
    const page = parseInt(req.query.page);
    const total = products.length;
    const start = (page - 1) * itemsPage;
    const end = page * itemsPage;
    var json = {
        "page": page,
        "per_page": itemsPage,
        "total": total,
        "total_pages": Math.ceil(total / itemsPage),
        "data": products.slice(start, end),
        "has_next": end < total
    };
    res.send(json);
}

const getProductById = (req, res) => {
    const id = req.params.id;
    let status = 404;
    let error = "No products found"
    var data = products.map(x => ({ ...x })).find(x => x.id == id);
    if (data) {
        status = 200;
        error = undefined;
    }
    res.status(status).send({ status: status, data: data, error: error });
}

const updateProduct = (req, res) => {
    const id = req.params.id;
    var data = undefined;
    let status = 404;
    let error = "No product found"
    var index = products.map(x => ({ ...x })).findIndex(x => x.id == id);
    const { name, year, color, pantone_value } = req.body;
    if (index !== -1) {
        data = products[index] = {
            id: id,
            name: name,
            year: year,
            color: color,
            pantone_value: pantone_value
        };
        status = 200;
        error = undefined;
    }
    res.status(status).send({ status: status, data: data, error: error });
}

const partialUpdateProduct = (req, res) => {
    const id = req.params.id;
    var data = undefined;
    let status = 404;
    let error = "No product found"
    var index = products.map(x => ({ ...x })).findIndex(x => x.id == id);
    const { name, year, color, pantone_value } = req.body;
    if (index !== -1) {
        data = products[index] = {
            id: id,
            name: name || products[index].name,
            year: year || products[index].year,
            color: color || products[index].color,
            pantone_value: pantone_value || products[index].pantone_value,
        };
        status = 200;
        error = undefined;
    }
    res.status(status).send({ status: status, data: data, error: error });
}

const createProduct = (req, res) => {
    const { name, year, color, pantone_value } = req.body;
    let status = 200;
    const newProd = {
        id: products.length + 1,
        name,
        year,
        color,
        pantone_value,
    };
    products.push(newProd);
    res.status(status).send({ status: status, data: newProd });
}

const deleteProduct = (req, res) => {
    const id = req.params.id;
    var data = undefined;
    let status = 404;
    let error = "No product found"
    var index = products.map(x => ({ ...x })).findIndex(x => x.id == id);
    if (index !== -1) {
        var name = products[index].name;
        products.splice(index, 1);
        status = 200;
        error = undefined;
        data = `Product ${name} has been removed`;
    }
    res.status(status).send({ status: status, data: data, error: error });
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    partialUpdateProduct,
    deleteProduct
}