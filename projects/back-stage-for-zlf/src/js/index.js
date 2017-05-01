$(function(){
	var info = {
		username:'admin',
		password:'admin'
	};

	$('.submit').on('click',function(){
		var username = $('#username').val();
		var password = $('#password').val();

		if(username == info.username && password == info.password){
			// success
			$('.error-info').text('登录成功，正在跳转...');
			setTimeout(function(){
				window.location = 'home.html';
			},2000);
			
		}else if(!username || !password){
			// fail
			$('.error-info').text('用户名或密码不能为空!');
		}else{
			$('.error-info').text('用户名或密码错误!');
		}
	});
});