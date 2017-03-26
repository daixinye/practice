var tags = [{
	key: 0,
	name: "0"
}, {
	key: 1,
	name: "1"
}, {
	key: 2,
	name: "2"
}];
console.log(tags);

var key = 0;
for (var i in tags) {
	console.log(i);
	if (tags[i].key == key) {

		var a = tags.slice(0, 1);
		var b = tags.slice(2);
		tags = a.concat(b);

		console.log(tags);
		//这里不break的话会循环溢出，因为tags总数已经少了1
	}
}