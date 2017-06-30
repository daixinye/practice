let koa = require('koa')
let app = new koa();

app.listen(3000)

app.use(async (ctx, next) => {
    console.log(ctx.headers)
    await next()

})

app.use(async (ctx, next) => {
    ctx.body = 'hello next'
})