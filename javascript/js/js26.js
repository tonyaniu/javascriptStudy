var spans=document.getElementsByTagName("span");

setInterval(function(){
	var time=new Date();
	var arr=[time.getHours(),time.getMinutes(),time.getSeconds()];
	for(var t in arr){
		spans[t].innerHTML=format(arr[t])
	}
},1000)

function format(t){
	//return t.toString().replace(/^(\d)$/,"0"+t)
	return t.toString().replace(/^(\d)$/,"0$1")
}