function chageStyle(ele,attr,val){
	ele.style[attr]=val;
}
var btns=document.getElementsByTagName("button"),
    block=document.getElementById("block");
var styleList=["200px","200px","#f00","none"];
var attrList=["height","width","background","display"]
for(var i=0;i<btns.length;i++){
	btns[i].index=i;
	btns[i].onclick=function(){
		if(this.index==btns.length-1){
			block.style.cssText = "";   //js3学过     
		}else{
			chageStyle(block,attrList[this.index],styleList[this.index])
		}
	}
}
/*var mh=document.getElementById("mh"),
    mw=document.getElementById("mw"),
    bs=document.getElementById("bs"),
    yc=document.getElementById("yc"),
    cz=document.getElementById("cz"),
    block=document.getElementById("block");

mh.onclick=function(){
	block.style.height="200px"
}
mw.onclick=function(){
	block.style.width="200px"
}
bs.onclick=function(){
	block.style.background="#f00";
}
yc.onclick=function(){
	block.style.display="none"
}
cz.onclick=function(){
	block.style.height="100px";
	block.style.width="100px";
	block.style.background="#000";
	block.style.display="block"
}*/