const http = require('http'); // importar modulo de núcleo
const url = require('url');
const ops = require('./utils/operations'); // importar modulo local // importación total
const { sum, subs, div } = require('./utils/operations'); // importar modulo local // importación parcial

const PORT = 5000;

const server = http.createServer((request, response) => {
    let status = 200;
    let site = 'home';
    let number = 6;
    let contentType = { "Content-Type": "text/html" };
    let body = null;
    let customMessage = null;
    const urlPath = url.parse(request.url, true);
    const path = urlPath.pathname;
    const query = urlPath.query;

    if (path === '/') {
        site = 'home';
    } else if (path === '/details') {
        number = 12;
        site = 'Details';
        try {
            customMessage = `Información de usuario: ciudad: ${query?.city.toUpperCase()}`;
        } catch (error) {
            status = 400;
            customMessage = `La ciudad no ha podido ser encontrada`;
        }

    } else if (path === '/info') {
        site = 'info';
        number = 18;
    } else {
        contentType = { "Content-Type": "application/json" }
        site = 'error';
        customMessage = "Error 404 página no encontrada"
        status = 404;
        number = 24;
        body = JSON.stringify({ site: site, status: status, message: customMessage });
    }

    var res = div(number, 6);
    var message = `Estoy en la página ${site} de mi aplicación`;
    if (status !== 404) {
        body = `<html><meta charset='utf-8'></meta><body><h1>${message}<h1><br><small>${res}</small><p>${customMessage}</p></body></html>`;
    }
    response.writeHead(status, contentType);
    response.write(body);
    response.end();
});

server.listen(PORT);