var tex=document.getElementById("tex");
var btn=document.getElementById("btn");
var result=document.getElementById("result");

btn.onclick=function(){
	sumVal()
}
function sumVal(){
	var texVal=tex.value.split(",");
	var sum=0;
	for(var i=0;i<texVal.length;i++){
		sum+=parseInt(texVal[i])
	}
	result.innerHTML=sum;

}
sumVal()