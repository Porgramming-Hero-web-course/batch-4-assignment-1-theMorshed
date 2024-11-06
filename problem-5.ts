const getProperty = <P, S>(person: P, name: S): string => {
    console.log(person, name);
    if ((person as object).hasOwnProperty(name)) {
        return person[name];
    }
    return "";
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));