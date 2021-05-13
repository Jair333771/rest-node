function sum(a, b) {
    return a + b;
}

//arrow function 
//with const takes up less memory space
const subs = (a, b) => {
    return a - b;
}

function div (a, b) {
    return a / b;
}

module.exports = {
    sum,
    subs,
    div
}