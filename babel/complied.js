"use strict";

var numbers = [1, 2, 3];
var doubleNumbers = numbers.map(function (num) {
	return num * 2;
});
console.log(doubleNumbers);

var object = {
	name: "dxy",
	age: 22
};

var name = object.name,
    age = object.age;


console.log(name, age);
