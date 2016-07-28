// JavaScript Document
function slide()
{
	var oDiv=document.getElementById('playimages');
	var oBtnPrev=getByClass(oDiv, 'prev')[0];
	var oBtnNext=getByClass(oDiv, 'next')[0];
	
	var oDivSmall=getByClass(oDiv, 'small_pic')[0];
	var oUlSmall=oDivSmall.getElementsByTagName('ul')[0];
	var aLiSmall=oDivSmall.getElementsByTagName('li');
	
	var oUlBig=getByClass(oDiv, 'big_pic')[0];
	var aLiBig=oUlBig.getElementsByTagName('li');
	
	var nowZIndex=2;
	
	var now=0;
	
	oUlSmall.style.width=aLiSmall.length*aLiSmall[0].offsetWidth+'px';
	
	//大图切换
	for(var i=0;i<aLiSmall.length;i++)
	{
		aLiSmall[i].index=i;
		aLiSmall[i].onclick=function ()
		{
			if(this.index==now)return;
			
			now=this.index;
			
			tab();
		};
	}
	
	function tab()
	{
		aLiBig[now].style.zIndex=nowZIndex++;
		
		for(var i=0;i<aLiSmall.length;i++)
		{
			aLiSmall[i].className=''
		}
		
		aLiSmall[now].className='active';
		
		aLiBig[now].style.height=0;
		startMove(aLiBig[now], {height: 393});
		
		if(now==0)
		{
			startMove(oUlSmall, {left: 0});
		}
		else if(now>=aLiSmall.length-4)
		{
			startMove(oUlSmall, {left: -(aLiSmall.length-6)*aLiSmall[0].offsetWidth});
		}
		else
		{
			startMove(oUlSmall, {left: -(now-1)*aLiSmall[0].offsetWidth});
		}
	}
	
	oBtnPrev.onclick=function ()
	{
		now--;
		if(now==-1)
		{
			now=aLiSmall.length-1;
		}
		
		tab();
	};
	
	oBtnNext.onclick=function ()
	{
		now++;
		if(now==aLiSmall.length)
		{
			now=0;
		}
		
		tab();
	};
};
function menu(){
	var oMenu1=document.getElementById('Menu1');
	var oMenu2=document.getElementById('Menu2');
	var oLogo=document.getElementById('Logo');
	var aMenu1List=oMenu1.getElementsByTagName('a');
	var aMenu2List=oMenu2.getElementsByTagName('li');
	for(var i=0; i<aMenu1List.length; i++){
		aMenu2List[i].style.left=oLogo.offsetWidth+aMenu1List[0].offsetWidth*i+'px';
	}
	for(var i=0; i<aMenu1List.length; i++){
		aMenu1List[i].index=i;
		var now=0;
		aMenu1List[i].onmouseover=function(){
			now=this.index;
			for(var i=0; i<aMenu2List.length; i++){
				startMove(aMenu2List[i],{opacity:0})
				aMenu2List[i].className='';
				aMenu1List[i].className='';
			}
			startMove(aMenu2List[now],{opacity:100});
			aMenu2List[now].className='active';
			this.className='active';
			aMenu2List[now].onmouseover=function(){
			  startMove(aMenu2List[now],{opacity:100});
			  aMenu2List[now].className='active';
			}
			aMenu2List[now].onmouseout=function(){
			  startMove(aMenu2List[now],{opacity:0});
			  aMenu2List[now].className='';
			}
		}
	}
}
function l2slide(slideBox,imgBox,btnBox,img,btn,w1,h1){
	var oInGd=document.getElementById(slideBox);
	var oInGdOl=oInGd.getElementsByTagName(btnBox)[0];
	var aInGdBtn=oInGdOl.getElementsByTagName(btn);
	var oInGdUl=oInGd.getElementsByTagName(imgBox)[0];
	var aInGdLi=oInGdUl.getElementsByTagName(img);
	var InGdnow=0;
	var w=w1;
	var h=h1;
	for(var i=0; i<aInGdLi.length; i++){
		var oLi=document.createElement('li');
		oInGdOl.appendChild(oLi);
	}
	aInGdBtn[0].className='active';
	oInGdOl.style.left=(w-oInGdOl.offsetWidth)/2+'px';
	for(var i=0;i<aInGdBtn.length;i++)
	{
		aInGdBtn[i].index=i;
		aInGdBtn[i].onclick=function ()
		{
			InGdnow=this.index;
			tab();
		};
	}
	function tab()
	{
		for(var i=0;i<aInGdBtn.length;i++)
		{
			aInGdBtn[i].className='';
		}
		aInGdBtn[InGdnow].className='active';
		startMove(oInGdUl, {left: -w*InGdnow});
	}
	
	function InGdnext()
	{
		InGdnow++;
		if(InGdnow==aInGdBtn.length)
		{
			InGdnow=0;
		}
		
		tab();
	}
	
	var timer=setInterval(InGdnext, 3000);
	
	oInGd.onmouseover=function ()
	{
		clearInterval(timer);
	};
	
	oInGd.onmouseout=function ()
	{
		timer=setInterval(InGdnext, 3000);
	};
}

function pubuliu(){
	var oDiv=document.getElementById('Pubuliu');
	var aLi=document.getElementsByTagName('dd');
	var nlength=aLi.length;
	for(var i=0; i<aLi.length; i++){
		if(i%3==0){
			aLi[i].style.left=0+'px';
		}else if(i%3==1){
			aLi[i].style.left=400+'px';
		}else{
			aLi[i].style.left=800+'px';
		}
		
		if(i>2){
			aLi[i].style.top=aLi[i-3].offsetHeight+aLi[i-3].offsetTop+'px';
		}else{
			aLi[i].style.top=0+'px';
		}
	}
	if(aLi[nlength-1].offsetTop+aLi[nlength-1].offsetHeight>aLi[nlength-2].offsetTop+aLi[nlength-2].offsetHeight&&aLi[nlength-1].offsetTop+aLi[nlength-1].offsetHeight>aLi[nlength-3].offsetTop+aLi[nlength-3].offsetHeight){
		oDiv.style.height=aLi[nlength-1].offsetTop+aLi[nlength-1].offsetHeight+'px';
	}else if(aLi[nlength-2].offsetTop+aLi[nlength-2].offsetHeight>aLi[nlength-1].offsetTop+aLi[nlength-1].offsetHeight&&aLi[nlength-2].offsetTop+aLi[nlength-2].offsetHeight>aLi[nlength-3].offsetTop+aLi[nlength-3].offsetHeight){
		oDiv.style.height=aLi[nlength-2].offsetTop+aLi[nlength-2].offsetHeight+'px';
	}else{
		oDiv.style.height=aLi[nlength-3].offsetTop+aLi[nlength-3].offsetHeight+'px';
	}
}