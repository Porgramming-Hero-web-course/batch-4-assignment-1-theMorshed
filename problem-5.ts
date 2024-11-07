// Generic function declaration
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// declare a object
const person = { name: "Alice", age: 30 };

// invoke function and print
console.log(getProperty(person, "name"));