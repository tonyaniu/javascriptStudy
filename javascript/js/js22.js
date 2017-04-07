var inputs=document.getElementsByTagName("input");
var btn=document.getElementById("btn");
var bigger=document.getElementById("bigger")
for(var i=0;i<inputs.length;i++){
	inputs[i].onkeyup=function(){
		this.value=this.value.replace(/[^\d]/,"")
	}
}

btn.onclick=function(){
(inputs[0].value == "" || inputs[1].value == "") ?
		alert("请输入数字！") :
		(bigger.innerHTML = Math.max(inputs[0].value, inputs[1].value)) ;
}