let koa = require('koa')
let app = new koa();
let fs = require('fs')

app.listen(3000)

app.use(async (ctx, next) => {
    await next()
})

app.use(async (ctx, next) => {
    ctx.body = fs.readFileSync('./index.html','utf-8')
})