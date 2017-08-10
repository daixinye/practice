const redis = require('redis')
const client = redis.createClient(6379, '0.0.0.0')

client.on('error', function(err){
    console.log('Error', err)
})

client.set('color', 'red', redis.print)
client.get('color', function(err, value){
    if(err) throw err
    console.log('Got:', value)
})