
//export inline
//Only default export one thing in the file
export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


export function printName(user) {
    console.log(`User's name is ${user.name}`);
}

export const printAge = (user) => console.log(`User is ${user.age} year old`);

// export default User;
// export { printName, printAge};

