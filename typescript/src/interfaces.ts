interface Auth {
    login(email: string, pass?: string): boolean | null;
    checkCredentials(email: string, pass: string): boolean;
}

class AuthClient implements Auth {
    login(email: string, pass?: string): boolean | null {
        // with ! can pass nullable params to non-null params
        return this.checkCredentials(email, pass!);
    }

    checkCredentials(email: string, pass: string): boolean {
        return pass === "1234" && email === "jair";
    }
}

const auth = new AuthClient();
console.log(auth.login("jair", "123"))