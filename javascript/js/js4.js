var btn=document.getElementsByTagName("button")[0];
var block=document.getElementById("block");
var divs=block.getElementsByTagName("div");
btn.onclick=function(){
	for(var i=0;i<divs.length;i++){
		divs[i].style.background="#f00";
	}
}