'use strick'

//整理一下这一章里面，与原型相关的函数

//实例类型
// 通过instance.constructor来判断类型
// instanceof 操作符
// Prototyp.isPrototypeOf(instance)
// Object.getPrototypeOf(instance)

//属性
// in 操作符，判断是否在实例中
// Object.hasOwnProperty(propertyName)
// 结合使用判断是否是原型属性
// delete 操作符

//获取属性名
// for-in 循环 
// Object.keys(obj)，obj可枚举属性（instance不包含prototype属性)
// Object.getOwnPropertyNames(obj)，obj所有属性不管能不能枚举

