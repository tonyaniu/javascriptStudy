var lis=document.getElementsByTagName("li");

for(var i=0;i<lis.length;i++){
	lis[i].onmouseenter=function(){
		this.style.opacity=1;
	}
	lis[i].onmouseleave=function(){
		this.style.opacity=0.5;
	}
}

