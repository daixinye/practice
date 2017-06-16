;void function(){
    var $video = $('#J_video')
    var $canvas = $('#J_canvas')
    var $p = $('#J_p')
    var canvas2D = $canvas[0].getContext('2d')

    this.get

    $video.on('play', function(){
        // 隐藏video
        $video.css('display','none')
        setInterval(function(){
            canvas2D.drawImage($video[0], 0,0,320,240)
            console.log('drawing')
        },1/60)
    }).on('ended',function(){
        console.log('end')
    })
}()

class app {
    constructor(){
        console.log('test')
    }
}

new app()