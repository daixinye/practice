class app {
    constructor(){
        this.$video = $('video')
        this.timeoutFlag = 0

        this.init()
    }

    init() {
        this.bindEvents()
        this.renderCanvas()
    }

    draw(ctx, timeout, v) {
        setTimeout(() => {
            if(this.timeoutFlag) return
            ctx.drawImage(v, 0, 0, v.width, v.height)
            this.draw(ctx, timeout, v)
            console.log(1)
        }, timeout);
    }

    startDraw (ctx, timeout, v){
        this.timeoutFlag = 0
        this.draw(ctx, timeout, v)
    }
    stopDraw(){
        this.timeoutFlag = 1
    }

    bindEvents() {
        this.$video.on('play', e => {
            // todo: 隐藏$video 开始canvas绘制
            
            let $v = $(e.target)
            let $c = $v.next('canvas')
            let ctx = $c[0].getContext('2d')
            this.startDraw(ctx, 1/30, e.target)
            $v.hide()
            $c.show()

        })

        this.$video.on('ended', e => {
            // 显示$video
            let $v = $(e.target)
            let $c = $v.next('canvas')
            this.stopDraw()
            $c.hide()
            $v.show()
        })

    }

    renderCanvas(){
        // 生成相应的canvas
        this.$video.forEach((v, i) => {
            let c = $('<canvas />')
            c.attr("width", v.width)
            c.attr("height", v.height)
            c.hide()
            this.$video.after(c)
        })
    }
}

new app()
