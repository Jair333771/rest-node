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

const getEmployee = (id, callback) => {
    const result = users.find(x => x.id == id);
    if (result)
        callback(null, result);
    else
        callback(`El usuario con id ${id} no existe`);
}

const getAmount = (id, callback) => {
    const result = amount.find(x => x.id == id)?.value;
    if (result)
        callback(null, result);
    else
        callback(`El salario con id ${id} no existe`);
}

var id = 11;
getEmployee(id, (err, user) => {
    if (err)
        return console.log(err);

    getAmount(id, (err, amount) => {
        if (err)
            return console.log(err);

        console.log(`El empleado ${user.name} tiene un salario de $${amount} COP`);
    });
});