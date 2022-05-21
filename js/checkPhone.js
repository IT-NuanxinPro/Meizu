
function checkPhone() {
	var inputText = document.getElementById('inputText');
	console.log(inputText.value)
	var pattern = /^1[358][0123456789]\d{8}$/;
	if (pattern.test(inputText.value)) {
		
		var val = document.getElementById("text").value;
			var num = show_num.join("");
			if (val == '') {
				alert('请输入验证码!');
			} else if (val == num) {
				alert('提交成功!');
					window.location.href="login.html";
				// document.getElementById("mainform").submit();
				// document.getElementById(".input-val").val('');
				// draw(show_num);
			} else {
				alert('验证码错误!\n你输入的是:  ' + val + "\n正确的是:  " + num + '\n请重新输入!');
				document.getElementById("text").value = '';
				draw(show_num);
			}
	} else {
		alert("格式不正确");
	}
}
