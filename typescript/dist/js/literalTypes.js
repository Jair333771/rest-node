"use strict";
const nodejsCourse = {
    name: "Jair",
    price: 1.99,
    level: 'advanced',
    diff: 2
};
const setCourse = (name, level, diff) => {
    return {
        name,
        price: 9.99,
        level: level,
        diff: diff // or as  1 | 2 | 3;
    };
};
console.log(nodejsCourse);
