var inputs=document.getElementsByTagName("input");

var btn=document.getElementsByTagName("button")[0];

btn.onclick=function(){
	if(inputs[0].value=="" || inputs[1].value==""){
		alert("请传参")
	}else{
		alert(inputs[0].value)
		alert(inputs[1].value)
	}
}