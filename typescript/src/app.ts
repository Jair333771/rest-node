const sum = (a: number, b: number): number => {
    return a + b;
}
let num1: number = 2;
let num2: number = 3;

let numbers1: Array<number> = [];
let numbers2: number[] = [];

// Define data type in any object
let user: {name: string; last_name: string; age: number;} = {
    name: "Jair",
    last_name: "Roríguez",
    age: 30
}

// Custom types
type User = {
    name: string; last_name: string; age: number;
}

let user2: User = {
    name: "Luisa",
    last_name: "Roríguez",
    age: 30
}

console.log(sum(num1, num2));
