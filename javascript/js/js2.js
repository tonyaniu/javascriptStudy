var listItem=document.getElementById('listItem');
var btns=document.getElementsByTagName("span"),
	arr2=["#f00","#0f0","#000"],
	arr1=["#CD8765","#33FF99","#ccc"]

function changeStyle(bg,libg){
	document.body.style.background=bg;
	listItem.style.background=libg;

}
changeStyle(arr1[1],arr2[1])

for(var i=0;i<btns.length;i++){
	btns[i].index=i;
	
	btns[i].onclick=function(){
		changeStyle(arr1[this.index],arr2[this.index]);
		for(var i=0;i<btns.length;i++){
			btns[i].className="";
		}
		this.className="aft"
	}

}