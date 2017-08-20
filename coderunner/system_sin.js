function render(){
	let count = 1
	let percent = 0
	let start_time = new Date()
	let total_time = 30000
	
	return function _f(){
		percent = (Math.sin(Math.PI*2*(new Date()-start_time)/total_time) + 1)/2
		console.log(percent)
		let start = new Date()
		while (new Date() - start < 1000 * percent) {
		}
		setTimeout(_f, 1000 - 1000 * percent)
	}
}
render()()