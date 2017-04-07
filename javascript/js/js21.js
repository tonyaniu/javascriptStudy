var btn=document.getElementById("btn");
var i=0;
btn.onclick=function(){
  this.value++;
  alert(this.value)

  /*this.value=++i
	alert(i);
*/
}