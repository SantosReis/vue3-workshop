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

//[].filter()
const orderThan20 = users.filter((user) => user.age > 20);
console.log(orderThan20);

//[].map()
const names = users.map((user) => user.name);
console.log(names);

//[].reduce()
// const welcomeMessage = users.reduce((messages, user) => {
//   messages.push(`Welcome ${user.name}`);
// });
// console.log(welcomeMessage);
const items = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];
const totalPrice = items.reduce((accumulator, item) => {
  return (accumulator += item.price);
}, 0);

//[].find()
const peter = users.find((user) => user.name === "Peter");
console.log(peter);

//[].every() and [].some()
const hasFriends = users.every((user) => user.friends.length > 0);
console.log(hasFriends);
const hasPeter = users.some((user) => user.name === "Peter2");
console.log(hasPeter);

//[].sort()
users.sort((a, b) => b.age - a.age);
console.log(users);

//[].forEach()
users.forEach((user) => console.log(user.name));

//[].includes(), [].indexOf() and [].findIdex()
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
// const friends1 = users.reduce((friends, user) => {
//   return [...friends, ...user.friends];
// }, []);
// console.log(friends1);

const friends2 = users.map((user) => user.friends).flat();
console.log(friends2);
const friends3 = users.flatMap((user) => user.friends);

const uniqueChildren = [...new Set(friends3)];
</script>
