
# Necessity of Type Guards in TypeScript

When you work with complex data structures or unknown data types, you can encounter several errors related to data types. If you want to make your code type-safe and avoid errors caused by incorrect types, type guards are necessary.

Type guard is a concept in TypeScript that allows narrowing down the type of a variable or expression to a more specific type. You can make your code more robust and bug-free using type guards.

There are several kinds of type guards.

## 1. `typeof` Guards

A type guard that is used to check the type of a variable or expression. You can narrow down your data to primitive types of JavaScript (`string`, `number`, `boolean`, `null`, `undefined`, and `symbol`).

### Example

```typescript
if (typeof value === "string") {
    // this is a string data type
} else if (typeof value === "number") {
    // this is a number data type
} else if (typeof value === "boolean") {
    // this is a boolean data type
}
```

## 2. `in` Guards

You can check a key exists in a certain object using this guard. An example below.

### Example

```typescript
const person = {
	name: "morshed",
	age: 30,
	email: "morshed@gmail.com",
	phone: "024232323232"
}

if ("name" in person) {
	console.log(person.name);
}
```

## 3. `instanceof` Guards

When you working with OOP and you want to check an object is a instance of a certain class then instanceof type guard are useful. examples here

### Example

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const morshed = new Person("morshed", 32);

if (morshed instanceof Person) {
    console.log("morshed object is created by Person class.");
} else {
    console.log("morshed object is not created by Person class");
}
```

# Summary
By using type guards of typescript, you can narrow down your type to a more specific type which can help you catch errors before your code runs. So, I will recommend you to always use type guard to make your code robust and bug-free.

Thanks for reading...