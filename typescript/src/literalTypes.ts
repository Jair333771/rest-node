type difficult = 1 | 2 | 3;

type Course = {
    name: string;
    price: 0.99 | 1.99 | 9.99;
    level: 'basic' | 'intermediate' | 'advanced';
    diff: difficult;
}

const nodejsCourse: Course = {
    name: "Jair",
    price: 1.99,
    level: 'advanced',
    diff: 2
};

const setCourse = (name: string, level: string, diff: number): Course => {
    return {
        name,
        price: 9.99,
        level: level as any,
        diff: diff as difficult // or as  1 | 2 | 3;
    };
}

console.log(nodejsCourse);