'use strict';

// 3.原型模式
console.log('-- 原型模式 --');
function Person(name, age, job){
	Person.prototype.name = name;
	Person.prototype.age = age;
	Person.prototype.job = job;
	Person.prototype.sayName = function(){
		console.log(this.name);
	}
}
var person5 = new Person('dxy5', 22, 'student');
var person6 = new Person('dxy6', 22, 'fe');
person5.sayName();
person6.sayName();
// 实例共享同一个原型对象，导致person6的属性覆盖了person5的属性，实际上他们的属性都指向了原型对象的属性
console.log(person5.sayName == person6.sayName);
// 构造函数的原型对象Person.prototype的constructor属性，跟实例的constructor属性一样指向了构造函数
console.log(Person.prototype.constructor == person5.constructor);
// 实例无法直接访问构造函数的原型对象prototype，但是可以通过isPrototypeOf来确定原型对象与实例之间的关系
console.log(Person.prototype.isPrototypeOf(person5));
// ES5中新增了Object.getPrototypeOf()函数来访问实例的对象
console.log(Object.getPrototypeOf(person5));

// 可以通过给实例创建属性来屏蔽来自于原型对象的属性，注意这样做不会修改原型对象的属性
person5.name = 'newdxy';
console.log(person5.name); //newdxy
console.log(Object.getPrototypeOf(person5).name); //dxy6
// 通过delete 操作符可以删除实例的属性重新获取原型对象中的属性
delete person5.name;
console.log(person5.name); // 重新指向原型对象的属性

// Object.hasOwnProperty()可以用来判断实例属性是来自于构造函数还是原型对象
person5.name = 'newdxy';
console.log(person5.hasOwnProperty('name'));
delete person5.name;
console.log(person5.hasOwnProperty('name'));
// 要注意不存在的属性，返回的也是false，所以这个函数只能用来判断是不是构造函数中的属性
console.log(person5.hasOwnProperty('notExist'));

// in 操作符用于判断实例中是否包含该属性，不管是构造函数的属性还是原型对象的属性
console.log('name' in person5);
console.log('notExist' in person5);
// 判断一个属性是否是原型对象的属性，先判断在不在实例中，再判断在不在原型对象中，注意&&是短路操作
var propertyName = 'name';
var instance = person5;
console.log(propertyName in instance && !instance.hasOwnProperty(propertyName));

// for in 遍历能够被对象访问的、可枚举的属性，既包括实例属性也包括原型对象属性，有些浏览器constructor和原型对象属性是不可枚举的
for(var key in person5){
	console.log(key,person5[key]);
}

// Object.keys()获取所有实例中的可枚举属性，注意是实例中
console.log(Object.keys(person5));
// 原型对象属性
console.log(Object.keys(Person.prototype));

// Object.getOwnPropertyNames() 获取实例中所有实例属性，包含不可枚举的属性
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyNames(person5)); // []
// 可见，person5实例中的constructor属性实际上是来自于原型对象的

//更简单的原型模式
console.log('-- 更简单的原型模式 --');
function PersonEasier(){
}

PersonEasier.prototype = {
	constructor: PersonEasier,
	name:'dxy7',
	age:22,
	job:'student',
	sayName:function(){
		console.log(this.name);
	}
}

var person7 = new PersonEasier();
person7.sayName();
//注意此时constructor是可枚举的，所以需要重新设置属性的特性
console.log(Object.getOwnPropertyDescriptor(PersonEasier.prototype,'constructor'));
Object.defineProperty(PersonEasier.prototype,'constructor', {
	enumerable:false,
	value:PersonEasier
});
console.log(Object.getOwnPropertyDescriptor(PersonEasier.prototype,'constructor'));

//原型的动态性
function PersonDynamic(){
}
// 原型实际上是一个指针，因此如果构造函数的prototype发生变化，这些变化并不会直接反应到实例上面去
var person8 = new PersonDynamic();
PersonDynamic.prototype = {
	name:'dxy',
	age:22,
	job:'student',
	sayName:function(){
		console.log(this.name);
	}
};
var person9 = new PersonDynamic();
console.log(person8.sayName);
console.log(person9.sayName);

//全部使用原型模式来创建对象会过于“共享”而导致很多问题，尤其是对原型中的引用类型来说，每一个实例对其属性的修改都会造成其他实例属性的改变
