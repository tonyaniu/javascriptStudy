var inputs=document.getElementsByTagName("input");
var sum=document.getElementById("sum");
var btn=document.getElementById("btn")
for(var i=0;i<inputs.length;i++){
	inputs[i].onkeyup=function(){
		this.value=this.value.replace(/[^\d]/,"")
	}
}
btn.onclick=function(){
	inputs[0].value==""||inputs[1].value==""?
	alert("请输入数字！"):
	sum.innerHTML=parseInt(inputs[0].value)+parseInt(inputs[1].value)
}