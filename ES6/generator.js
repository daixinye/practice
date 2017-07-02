function* fun(){
    let z
    let a = yield 'hello' + (z = (yield 'apple'))
    let b = yield 'world' + a + z
    return 'byebye' + b
}

let r = fun()

console.log(r.next())
console.log(r.next(1))
console.log(r.next(2))