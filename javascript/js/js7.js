
var btn=document.getElementById("btn");
var selitem=document.getElementById("selitem");
var close=document.getElementById("close");
btn.onclick=function(){
	
	/*if(selitem.style.display=="block"){
		selitem.style.display="none"
	}else{
		selitem.style.display="block"
	}*/
	selitem.style.display=selitem.style.display=="block"?"none":"block";
}
close.onclick=function(){
	selitem.style.display="none"
}
