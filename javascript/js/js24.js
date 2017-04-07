var inputs=document.getElementsByTagName("input");
var btn=document.getElementById("btn");
inputs[0].onkeyup=function(){
	this.value=this.value.replace(/[^\d]/,"")
}
btn.onclick=function(){
	var ivl=inputs[0].value.length;
	if(inputs[0].value==""){
		alert("请输入数字")
	}else{
		if(ivl==2){
			alert("√是两位数")
		}else{
			alert("是"+ivl+"位数")
		}
	}
	
}