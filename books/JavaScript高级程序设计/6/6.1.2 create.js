'use strict'
//6.1.2 创建对象

// 1.工厂模式
console.log('-- 工厂模式 --');
function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		console.log(this.name);
	}

	return o;
}

var person1 = createPerson('dxy1', 22, 'student');
var person2 = createPerson('dxy2', 22, 'fe');

person1.sayName();
person2.sayName();
// 工厂模式
// 优点：能够创建多个相似对象
// 缺点：没有解决对象识别的问题

// 2.构造函数模式
console.log('-- 构造函数模式 --');
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		console.log(this.name);
	}
}
var person3 = new Person('dxy3', 22, 'student');
var person4 = new Person('dxy4', 22, 'fe');

person3.sayName(); // dxy3
person4.sayName(); // dxy4
console.log(person3.constructor == Person); // true
console.log(person4.constructor == Person); // true
console.log(person3 instanceof Person); // true
console.log(person4 instanceof Person); // true
// 构造函数模式
// 特点：
	// 没有显式地创建对象
	// 直接将属性和方法赋给了this对象
	// 没有return语句
// 构造函数的过程：
	// 1、创建一个新对象
	// 2、将函数的作用域赋给新对象（即this指向新的对象）
	// 3、执行函数中的代码（即给this对象添加属性）
	// 4、返回新对象
// 优点：能够创建相似对象，并解决了对象类型的问题。
// 缺点：每次创建都是创建了一个新的对象，故同名函数实际上不是同一个函数
console.log(person3.sayName == person4.sayName); // false



