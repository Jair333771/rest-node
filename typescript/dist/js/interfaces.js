"use strict";
class AuthClient {
    login(email, pass) {
        // with ! can pass nullable params to non-null params
        return this.checkCredentials(email, pass);
    }
    checkCredentials(email, pass) {
        return pass === "1234" && email === "jair";
    }
}
const auth = new AuthClient();
console.log(auth.login("jair", "123"));
