var as=document.getElementsByTagName("a");
var shizi=document.getElementById("shizi");
var deal=document.getElementById("deal");
var s=false;

for(var i=0;i<as.length;i++){

	as[i].onclick=function(){
		switch(this.innerHTML){
			case "c":
				shizi.innerHTML=0;
				deal.innerHTML="";
				break;
			case "%":
				count("%")
				break;
			case "÷":
				count("/")
				break;
			case "x":
				count("*")
				break;
			case "+":
				count("+")
				break;
			case "-":
				count("-")
				break;
			case "=":
					s || (deal.innerHTML+=shizi.innerHTML);
					shizi.innerHTML=eval(deal.innerHTML.replace(/\%\/\*\-\+/,""));
					shizi.innerHTML=shizi.innerHTML.substr(0,10).replace("NaN",0);
					s=true;
					break;
			case ".":
					if(shizi.innerHTML.search(/[\.\%\/\*\-\+]/)!=-1)
					break;
			default:
					s && (shizi.innerHTML=0,deal.innerHTML="",s=false);
					shizi.innerHTML.length<10 && (shizi.innerHTML=(shizi.innerHTML+this.innerHTML).replace(/^[0\%\/\*\-\+](\d)/,"$1"))
				
		}
	}
}

function count(a){
	if(s){
		deal.innerHTML=shizi.innerHTML+a;
		shizi.innerHTML=a;
		s=false;
	}else{
		/[\%\/\*\-\+]$/.test(shizi.innerHTML) || (deal.innerHTML+=shizi.innerHTML);
		shizi.innerHTML=a;
		/[\%\/\*\-\+]$/.test(deal.innerHTML) || (deal.innerHTML+=shizi.innerHTML);
		deal.innerHTML=shizi.innerHTML.slice(-1)!=a?deal.innerHTML.replace(/.$/,a):deal.innerHTML
	}
}
