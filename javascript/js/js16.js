var lis=document.getElementsByTagName("li");

for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmouseenter=function(){
		this.getElementsByTagName("img")[0].style.display="block";
		this.getElementsByTagName("img")[0].style.zIndex=1;
	}
	lis[i].onmouseleave=function(){
		this.getElementsByTagName("img")[0].style.display="none";
		
	}
}