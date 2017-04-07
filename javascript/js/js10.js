var close=document.getElementById("close");
var ale=document.getElementById("ale");
var mark=document.getElementById("mark");


ale.onclick=function(){
	document.body.style.background="rgba(0,0,0,0.5)"
	mark.style.display="block";
}
close.onclick=function(){
	document.body.style.background="none"
	mark.style.display="none";
}