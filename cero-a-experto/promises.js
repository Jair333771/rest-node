const users = [
    {
        id: 1,
        name: "karen",
    },
    {
        id: 2,
        name: "Linda",
    },
    {
        id: 3,
        name: "Luisa",
    }
];

const amount = [
    {
        id: 1,
        value: 200000,
    },
    {
        id: 2,
        value: 150000,
    }
];

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const result = users.find(x => x.id == id)?.name;
        result ? resolve(result) : reject(`El usuario con id ${id} no existe.`);
    })
}

const getAmount = (id) => {
    return new Promise((resolve, reject) => {
        const result = amount.find(x => x.id == id)?.value;
        result ? resolve(result) : reject(`El monto con id ${id} no existe.`);
    })
}
const id = 3;
// getEmployee(1)
//     .then(employee => {
//         getAmount(1)
//             .then(amount => {
//                 console.log(`El usuario ${employee} tiene $${amount} COP`)
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));


// // Promesas en cadena
// getEmployee(2)
//     .then(employee => getAmount(id))
//     .then(amount => console.log(amount))

let name = '';
getEmployee(id)
    .then(employee => {
        name = employee;
        return getAmount(id);
    })
    .then(amnt => {
        console.log(`El usuario ${name} tiene $${amnt} COP`);
    })
    .catch(err => console.log(err))
