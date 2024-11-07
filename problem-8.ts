// Declare a interface for T object
interface T {
    name: string;
    age: number;
    email: string;
}

// validateKeys function declaration
function validateKeys(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}

// create a person object
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));


