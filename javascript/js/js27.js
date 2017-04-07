var btn=document.getElementById("btn");
var spans=document.getElementsByTagName("span");
var t=100;
var flag=false;
var timer=null;
btn.onclick=function(){
	flag=!flag
	if(flag){
	timer=setInterval(function(){
		t--;
		spans[0].innerHTML=t-60>0?1:'00';
		spans[1].innerHTML=t<60?t<10?"0"+t:t:t-60<10?"0"+(t-60):t-60;
	},1000)
	this.style.backgroundPosition="0 50px"
	this.style.border="2px solid #0f0"

}else{
	clearInterval(timer)
	this.style.backgroundPosition="0 0"
}
}
