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

const hello = async () => {
    return "Hola mundo";
}

const getInfoUser = async (id) => {
    try {
        const employee = await getEmployee(id);
        const amount = await getAmount(id);
        return `El salarío del usuario ${employee} es: ${amount} COP`;
    } catch (error) {
        throw error;
    }
}

getInfoUser(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));