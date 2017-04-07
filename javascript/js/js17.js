var imgs=document.getElementsByTagName("img");
var big=document.getElementById("big")
for(var i=0;i<imgs.length;i++){
	imgs[i].onmouseover=function(){
		var src=this.getAttribute("src");
		var newSrc=src.replace("small","big");
		big.setAttribute("src",newSrc)
	}
}