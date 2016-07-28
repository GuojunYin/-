function initViewport(){
    if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
        var version = parseFloat(RegExp.$1);
        if(version>2.3){
            var phoneScale = parseInt(window.screen.width)/1200;
            document.write('<meta name="viewport" content="width=1200, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
        }else{        
		       document.write('<meta name="viewport" content="width=1200, target-densitydpi=device-dpi">');    
		}
    }else if(navigator.userAgent.indexOf('iPhone') != -1){
        var phoneScale = parseInt(window.screen.width)/1200;
        document.write('<meta name="viewport" content="width=1200,initial-scale=' + phoneScale +'" /> '); //0.75   0.82
    }else{
        //document.write('<meta name="viewport" content="width=1200, user-scalable=no, target-densitydpi=device-dpi">');
        document.write('<meta name="viewport" content="width=1200,initial-scale=0.75" /> ');         //0.64 0.75   0.82
    }
}
