var http = require('http');
var net = require('net');
var url = require('url');

function request(cReq, cRes) {
    // http
    var u = url.parse(cReq.url);

    // if(hook(cReq, cRes)){
    //     return
    // }

    var options = {
        hostname : u.hostname, 
        port     : u.port || 80,
        path     : u.path,       
        method     : cReq.method,
        headers     : cReq.headers
    };

    var pReq = http.request(options, function(pRes) {
        cRes.writeHead(pRes.statusCode, pRes.headers);

        // pRes.setEncoding('utf8')
        pRes.on('data',(chunk) => {
            console.log(pRes.statusCode, pRes.headers)
            console.log(chunk)
        })
        pRes.on('end',() => {
            console.log('no more data')
        })
        pRes.pipe(cRes);
    }).on('error', function(e) {
        cRes.end();
    });

    cReq.pipe(pReq);
}

function connect(cReq, cSock) {
    // https
    var u = url.parse('http://' + cReq.url);

    var pSock = net.connect(u.port, u.hostname, function() {
        cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
        pSock.pipe(cSock);
    }).on('error', function(e) {
        cSock.end();
    });

    cSock.pipe(pSock);
}

http.createServer()
    .on('request', request)
    .on('connect', connect)
    .listen(8888, '0.0.0.0');

function hook(cReq, cRes){
    // 如果满足某种条件
    var u = url.parse(cReq.url);
    console.log(u)
    if(u.hostname == "api.yuerbao.com"){
        sendJSON(cRes, {
            mock: true,
            message: 'mock success'
        })
        return true
    }
    return false
}

function sendJSON(cRes, data){
    cRes.writeHead(200, {
        'Content-Type': 'text/json'
    })
    cRes.end(JSON.stringify(data))
}