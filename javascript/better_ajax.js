let queue = {}

// 避免发多次同一请求的ajax
function ajax(url){
    // 检查 queue
    return new Promise(function(resolve, reject){
        let isInQueue = (url in queue)
        
        if(isInQueue){
            // 已经在队列中，等待请求返回
            console.log('发现请求在队列中，等待队列返回')
            queue[url].then(data => {
                resolve(data)
                delete queue[url]
            })
        }else{
            console.log('没有发现请求在队列中，实际发起请求')
            // 发起实际的请求
            queue[url] = new Promise(function(ajax_resolve, ajax_reject){
                setTimeout(function(){
                    let ajax_data = 'hello'
                    ajax_resolve(ajax_data)
                    resolve(ajax_data)
                },5000)
            })
        }
    })
}

ajax('test').then(val=>console.log('1'+val))
ajax('test').then(val=>console.log('2'+val))
ajax('test').then(val=>console.log('3'+val))