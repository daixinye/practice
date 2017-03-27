'use strict'
// 6.1.1 属性类型
// # 数据属性

// ## 属性的特性 描述符
var obj1 = {
	name: "dxy"
};

Object.defineProperty(obj1, "name", {
	configurable: false,
	value: "daixinye",
	writable: true,
	enumerable: true
});

console.log(obj1);//把 name 的 enumerable设置为false 以后就不能被打印出来了
obj1.name = "new dxy";
console.log(obj1);

// #访问器属性
var obj2 = {
	_year:2004,
	edition:1
}

Object.defineProperty(obj2, "year",{
	set:function(props){
		if(props>2004){
			this.edition = props-2003;
			this._year = props;
		}
	},
	get:function(props){
		return this._year;
	}
})

console.log(obj2);
obj2.year = 2005;
console.log(obj2);

//读取属性的特性
//数据属性
var descriptorFor_Year = Object.getOwnPropertyDescriptor(obj2,"_year");
console.log(descriptorFor_Year);
//访问器属性
var descriptorForYear = Object.getOwnPropertyDescriptor(obj2, "year");
console.log(descriptorForYear);

//定义多个属性的特性
var book = {};
//book是Object的实例，那为什么不能用Object的方法呢
console.log(book instanceof Object);
console.log(book instanceof global.Object);
console.log(Object === global.Object);
//搁置搁置
//这样定义的属性默认是不能枚举的
Object.defineProperties(book, {
	name:{
		value:"test",
		enumerable:true,
		configurable:true,
		writable:true
	}
})

console.log("book",book);
console.log(book.name)

console.log(Object);
//自己的实验
function Book(name){
	this.name = name;
}

Book.prototype.getName = function(){
	return this.name;
}

var bk = new Book("JavaScript Professtional");

console.log(bk.getName());
