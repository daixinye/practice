'use strict'

void function main(){
    // tempToFunc()
    // tempToFunc2()

    compileTest()
}()

// 第一种写法
function tempToFunc(){
    let str = 'return `Hello ${name}`'
    let fun = new Function('name', str)
    console.log(fun('world'))
}

// 第二种写法
function tempToFunc2(){
    let str2 = '(name) => `Hello ${name}`'
    let fun2 = eval(str2)
    console.log(fun2('world'))
}

// 模板编译
function compileTest(){
    let template = `
        <ul>
            <% for(let i=data.supplies.length; i; i--){ %>
            <li><%= data.supplies[i-1] %></li>
            <% } %>
        </ul>
    `
    function compile(template){
        // 把模板转换成一个 Function(data)
        
        // step1: 对模板进行处理
        // 输出
        let exprExpr = /<%=(.+?)%>/g
        // js 代码
        let expr = /<%([\s\S]+?)%>/g


        template = template
            .replace(exprExpr, '`);\necho($1)\necho(`')
            .replace(expr, '`);\n$1\necho(`')
        
        template = `echo ( \` ${template} \`)`

        // step2: 把模板中的echo变成实际有效的代码
        return eval(`
            (function(data){
                let output= ''

                let echo = (html) => output += html

                ${template}        

                return output
            })
        `)
    }

    let parser = compile(template)

    let html = parser({
        supplies: [1, 2, 3]
    })

    console.log(html)
}