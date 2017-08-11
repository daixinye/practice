const redis = require('redis')
const client = redis.createClient(6379, '0.0.0.0')

client.on('error', function(err){
    console.log('Error', err)
})

client.set('test:key1', 'value1', redis.print)
client.mset(['test:key2','value2','test:key3','value3'], redis.print)

client.get('test:key1', function(err, value){
    if(err) throw err
    console.log('Got:', value)
})

client.keys('test:*', function(err, value){
    if(err) throw err
    console.log('Keys:', value)
})

