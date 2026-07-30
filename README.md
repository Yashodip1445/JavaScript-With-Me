# 🚀 Ultimate JavaScript Concept Guide

A comprehensive cheat-sheet and index of JavaScript programming concepts from fundamental syntax to advanced runtime internals.

---

## 📌 Table of Contents
1. [Core Fundamentals](#1-core-fundamentals)
2. [Data Structures & Types](#2-data-structures--types)
3. [Functions & Execution](#3-functions--execution)
4. [Object-Oriented Programming (OOP)](#4-object-oriented-programming-oop)
5. [Asynchronous JavaScript](#5-asynchronous-javascript)
6. [Advanced Runtime Internals](#6-advanced-runtime-internals)
7. [Modern ES6+ Features](#7-modern-es6-features)

---

## 1. Core Fundamentals

### Variables & Scope
JavaScript uses `var`, `let`, and `const` for memory allocation.
* **`var`**: Function-scoped, hoisted, can be redeclared.
* **`let`**: Block-scoped, hoisted to Temporal Dead Zone (TDZ).
* **`const`**: Block-scoped, requires initial value, immutable binding.

### Operators & Control Flow
* **Equality**: `==` (loose with type coercion) vs `===` (strict value and type check).
* **Nullish Coalescing (`??`)**: Returns right-hand expression if left-hand is `null` or `undefined`.
* **Short-circuiting**: `&&` and `||` evaluate values based on truthiness.

---

## 2. Data Structures & Types

### Data Types
* **Primitives (Value Types)**: `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`.
* **Objects (Reference Types)**: `Object`, `Array`, `Function`, `Map`, `Set`.

### Array & Object Methods
* **Iteration**: `map()`, `filter()`, `reduce()`, `forEach()`.
* **Mutators**: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`.
* **Object Utils**: `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.freeze()`.

---

## 3. Functions & Execution

### Function Syntax
* **Function Declaration**: Hoisted completely to memory.
* **Function Expression**: Assigned to a variable; not hoisted.
* **Arrow Functions**: Concise syntax, do not have their own `this`, `arguments`, or `super`.

```javascript
// Arrow function syntax
const add = (a, b) => a + b;
```

### Scope & Closures
* **Lexical Environment**: Inner functions have structural access to outer parent scopes.
* **Closure**: A function that remembers and accesses its lexical scope even when executed outside that scope.

---

## 4. Object-Oriented Programming (OOP)

### Prototype Chain
Every JavaScript object contains a hidden link (`[[Prototype]]`) pointing to another object. 
* Prototypal inheritance allows objects to share methods without cloning code.

### Classes (ES6)
Syntactic sugar over prototypal inheritance.
* **Keywords**: `class`, `constructor`, `extends`, `super`, `static`.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
```

---

## 5. Asynchronous JavaScript

### Callback Hell to Async/Await
* **Callbacks**: Passing functions as arguments; causes deep nested indentation.
* **Promises**: Objects representing ultimate completion or failure of async operations.
* **Async/Await**: Syntactic layer over promises making async code look synchronous.

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

---

## 6. Advanced Runtime Internals

### The Event Loop
JavaScript is single-threaded but handles concurrency using an engine model consisting of:
* **Call Stack**: Tracks execution frames in LIFO order.
* **Web APIs / Node APIs**: Handles background threads (DOM events, timers, network requests).
* **Microtask Queue**: Executes promise callbacks immediately after the current script stack completes.
* **Task Queue (Macrotask)**: Executes items like `setTimeout` after the microtask queue clears.

### Context & `this`
The keyword `this` refers to the object executing the current function.
* **Explicit Binding**: Handled using `.call()`, `.apply()`, or `.bind()`.

---

## 7. Modern ES6+ Features

* **Destructuring**: Extract array values or object properties into distinct variables.
* **Rest/Spread Operator (`...`)**: Expands collections into single elements or merges separate elements.
* **Modules**: Code sharing using `import` and `export` statements.

---
⭐ **Keep practicing!** For a deep dive into execution mechanics, check out [The Modern JavaScript Tutorial](https://javascript.info/) or the [33 JS Concepts Repository](https://github.com/leonardomso/33-js-concepts).
