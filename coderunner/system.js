function run(time){
	var stop = false
	var start = new Date()
	while(!stop){
		if(new Date() - start > time){
			stop = true
		}
	}
}
setInterval(function(){
	run(500)
}, 500)
