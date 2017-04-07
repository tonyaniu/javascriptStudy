var tab=document.getElementById("tab");
var tabspan=tab.getElementsByTagName("span")[0]
var cont=document.getElementById("cont");
var lis=cont.getElementsByTagName("li");
var flag=true;

tab.onclick=function(){
	flag=!flag;
	if(flag){
		cont.style.display="none"
		tabspan.innerHTML="▲"
	}else{
		cont.style.display="block";
		tabspan.innerHTML="▼"
	}
}

/*for(var i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		for(j=0;j<lis.length;j++){
			lis[j].className=""
		}
		this.className="on"
	}
}*/