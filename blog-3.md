
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