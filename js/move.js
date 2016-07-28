function getStyle(obj, value){
	if(obj.currentStyle){
		return obj.currentStyle[value];
	}else{
		return getComputedStyle(obj, false)[value];
	};
};
function startMove(obj, json, fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function (){
		var bStop=true;
		for(var attr in json){
			var cur=0;
			if(attr=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}else{
				cur=parseInt(getStyle(obj, attr));
			};
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur!=json[attr])bStop=false;if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px';
			};
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		};
	},30);
};
function getByClass(oParent, sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	
	for(var i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	
	return aResult;
}
function myAddEvent(obj, ev, fnarr){
	if(obj.attachEvent){
		for(var i=0; i<fnarr.length; i++){
			obj.attachEvent('on'+ev,fnarr[i]);
		}
	}else{
		for(var i=0; i<fnarr.length; i++){
			obj.addEventListener(ev,fnarr[i],false);
		}
	}
}