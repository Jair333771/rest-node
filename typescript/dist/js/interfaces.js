"use strict";
var AuthClient = /** @class */ (function () {
    function AuthClient() {
    }
    AuthClient.prototype.login = function (email, pass) {
        // with ! can pass nullable params to non-null params
        return this.checkCredentials(email, pass);
    };
    AuthClient.prototype.checkCredentials = function (email, pass) {
        return pass === "1234" && email === "jair";
    };
    return AuthClient;
}());
var auth = new AuthClient();
console.log(auth.login("jair", "123"));
