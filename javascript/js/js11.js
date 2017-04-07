var inputs=document.getElementsByTagName("input");
var deal=document.getElementById("deal")
inputs[2].onclick=function(){
	var attr=inputs[0].value;
	var attrVal=inputs[1].value;
	deal.style[attr]=attrVal;
}
inputs[3].onclick=function(){
	inputs[0].value="";
	inputs[1].value="";
	deal.removeAttribute("style")
}