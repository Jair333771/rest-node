// Los callbacks no son mas que funciones que se envían como argumento a otra función 
class MyUser {
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const getUserById = (id: number, callback: any) => {
    const usuario = new MyUser( id,"Jair");
    setTimeout(() => {
        callback(usuario);
    }, 1500);
}
// How implement callbacks
getUserById(10, (user: MyUser) => {
    console.log(user);
});