<template>
  <div>Array Methods</div>
</template>
<script setup>
const users = [
  { name: "John", age: 20, friends: ["Peter", "Mark"] },
  { name: "Peter", age: 21, friends: ["John", "Mark"] },
  { name: "Peter", age: 22, friends: ["John"] },
  { name: "Mark", age: 23, friends: ["John", "Peter"] },
];

//[].filter() instead of if conditionals
const orderThan20 = users.filter((user) => user.age > 20);
console.log("filter()", orderThan20);

//[].map() to rebuild to a new array
const names = users.map((user) => user.name);
console.log("map()", names);

// [].reduce(); to sum calculations
const welcomeMessage = users.reduce((messages, user) => {
  messages.push(`Welcome ${user.name}`);
  return messages;
}, []);
console.log(welcomeMessage);

// [].reduce(); to sum calculations
const items = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];
const totalPrice = items.reduce((accumulator, item) => {
  return (accumulator += item.price);
}, 0);
console.log(totalPrice);

//[].find()
const peter = users.find((user) => user.name === "Peter");
console.log(peter);

//[].every() and [].some() as has (All vs Any)
//every will return true if all predicate is true, every() returns on first false. every() is analogue to logical AND
//some will return true if any predicate is true, some() returns on first true. some() is analogue to logical OR
const hasFriends = users.every((user) => user.friends.length > 0);
console.log(hasFriends);
const hasPeter = users.some((user) => user.name === "Peter2");
console.log(hasPeter);

//[].sort()
users.sort((a, b) => b.age - a.age);
console.log(users);

//[].forEach()
users.forEach((user) => console.log(user.name));

//[].includes(), [].indexOf() and [].findIdex() as in_array()
const numberArray = [1, 2, 3];
const includes2 = numberArray.includes(2);
console.log(includes2);

const indexOf3 = numberArray.indexOf(3);
console.log(indexOf3);

const indexOfPeter = users.findIndex((user) => user.name === "Peter");
console.log(indexOfPeter);

//[].flat()
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattened = nestedArray.flat();
console.log(flattened);

//[].flatMap()
const friends1 = users.reduce((friends, user) => {
  return [...friends, ...user.friends];
}, []);
console.log(friends1);

const friends2 = users.map((user) => user.friends).flat();
console.log(friends2);

const friends3 = users.flatMap((user) => user.friends);
console.log(friends3);

// Deduplication
const uniqueChildren = [...new Set(friends3)];
console.log(uniqueChildren);

//[].splice() to add or remove items
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// At position 2, remove 2 items from an certain postion
fruits.splice(2, 2);
console.log(fruits);
</script>
