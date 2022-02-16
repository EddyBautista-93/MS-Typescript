// The main benefit of typescript is that it enables you to add static types to js,
// types place constraints to program entities like functions, vars, and props so compilers
// and dev tools can offer better verification.

let x: number; // Explicitly declares c as a number type.
// let y = 1; // Implicitly declares y as a number type.
// let z; //* Declares z without initializing it

// Types
// Primitive = boolean , number , string , enum , void
// Object = class , interface , array ,literals

// boolean Types
let flag: boolean;
let yes = true;
let no = false;

//Number and BigInteger Value
let x1: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

// string types
let s: string;
let empty = "";
let abc = "abc";

// using template string inside of typescript
let firstname: string = "Eddy";
let sentence: string = `My name is ${firstname}. I am new to TypeScript.`;
//console.log(sentence);

//Enum - a symbolic name for a set a values. Enumerations are treated as data types , you can use them to create sets of constants for use of variables and props.
//ex

enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Apprentice;
console.log(employeeStatus);
