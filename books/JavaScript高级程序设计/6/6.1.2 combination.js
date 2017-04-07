'use strict'

// 4.组合使用构造函数模式和原型模式

function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.firends = ['gqf','cjl','ym'];
}

Person.ptototype = {
	sayName:function(){
		console.log(this.name);
	}
}

Object.defineProperty(Person.prototype,'constructor',{
	enumerable:false,
	value:Person
})

var person = new Person('dxy',22, 'student');
console.log(person);

// 5.动态原型模式
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;

	if(typeof this.sayName != 'function'){
		Person.prototype.sayName = function(){
			console.log(this.name);
		}
	}
}

// 6. 寄生构造函数模式
// 跟工厂模式的区别仅在于调用的时候会加一个new，看起来像构造函数而已
// 寄生构造函数模式不能用instanceof来识别实例的类型
function PersonParasitic(name){
	var o = new Object();
	o.name = name;
	return o;
}

var personParasitic = new PersonParasitic('dxy');
console.log(personParasitic instanceof PersonParasitic); // false

// 7.稳妥构造函数模式
// 利用闭包原理，产生的实例仅函数能够被调用，其属性是不能被调用的
// 稳妥构造函数模式同样不能用instanceof来识别实例的类型
function PersonDurable(name){
	var o = new Object();

	o.sayName = function(){
		console.log(name); //注意不是this.name了
	}

	return o;
}
var personDurable = new PersonDurable('dxy');
personDurable.sayName();
console.log(personDurable instanceof PersonDurable); // false