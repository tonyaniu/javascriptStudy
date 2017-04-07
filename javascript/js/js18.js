var all=document.getElementById("all");
var fan=document.getElementById("fan");
var sels=document.getElementById("sel").getElementsByTagName("input");
all.onclick=function(){
	for(var i=0;i<sels.length;i++){
		if(this.checked){
			this.nextSibling.innerHTML="全不选"
		}else{
			this.nextSibling.innerHTML="全选"
		}
		sels[i].checked=this.checked
	}
}
fan.onclick=function(){
	for(var i=0;i<sels.length;i++){
		sels[i].checked=!sels[i].checked
	}

	isCheckAll()

}

for(var i=0;i<sels.length;i++){
	sels[i].onclick=function(){
		isCheckAll()
	}
 	
}

function isCheckAll(){
	var n=0;
	for(var j=0;j<sels.length;j++){
		/*if(sels[j].checked){
 			n++;
 			if(n==sels.length){
	 			all.checked=true
	 			all.nextSibling.innerHTML="全不选"
		 	}else{
	 			all.nextSibling.innerHTML="全选"
	 			all.checked=false
	 		}
 		}else{
 			all.nextSibling.innerHTML="全选"
	 		all.checked=false
 		}*/
 		sels[j].checked && n++;
	}
	all.checked=n==sels.length;
	all.nextSibling.innerHTML=all.checked?"全不选":"全选"
	
}