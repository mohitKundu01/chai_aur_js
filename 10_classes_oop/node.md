# JavaScript and classes

## OOP


## Object
- collection of properties and methods
- toLowerCase

## Why use OOP

## parts of OOP 
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism



# Object prototypes
Every object in javaScript has inbuilt properties, which is called its prototypes.
The prototypes itself an object, so prototype will have its own prototype, making what's
called a prototype chain. The chain ends when we reach a prototype that has null for its own  prototype.

##### Note
When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

