var tabs=document.getElementById("tab").getElementsByTagName("li");
var conts=document.getElementById("content").getElementsByTagName("ul");

for(var i=0;i<tabs.length;i++){
	tabs[i].index=i;
	tabs[i].onmouseover=function(){
		for(var j=0;j<tabs.length;j++){
			tabs[j].className=""
			conts[j].style.display="none";
		}
		this.className="on";
		conts[this.index].style.display="block"
	}
}