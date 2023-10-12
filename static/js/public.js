var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?e8a4cc2514d1ed78553c81a72a23a11e";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();
/*判AD*/
if(getCookie("outCountry")=="1"){ 
    pushAd();
}else{
    $.get("https://api.ip138.com/ip/?token=01c986297b4a27f6f809d0a97214bfa0",function(res){
        if(res.data.indexOf("香港")!=-1){
            setCookie("outCountry","1","d360");
            pushAd();
            return;
        }
        
        if(res.data.indexOf("澳门")!=-1){
            setCookie("outCountry","1","d360");
            pushAd();
            return;
        }
        
        if(res.data.indexOf("台湾")!=-1){
            setCookie("outCountry","1","d360");
            pushAd();
            return;
        }
        
        if(res.data.indexOf("中国")!=-1){   //代表
            return;
        }
       
    //   if(res.data.indexOf("中国")!=-1){
    //       setCookie("outCountry","1","d360");
    //       pushAd();
    //       return;
    //   }

        setCookie("outCountry","1","d360");
        pushAd();
    });
}



/*Cookie操作*/
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if(begin == -1) {
        begin = dc.indexOf(prefix);
        if(begin != 0) return null
    } else {
        begin += 2
    }
    var end = document.cookie.indexOf(";", begin);
    if(end == -1) {
        end = dc.length
    }
    return unescape(dc.substring(begin + prefix.length, end))
}
function setCookie(name, value, time) {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + "; path=/;expires=" + exp.toGMTString();
}
function getsec(str) {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if(str2 == "s") {
        return str1 * 1000;
    } else if(str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if(str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}
Array.prototype.ArrDelVal = function(val) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] == val) {
            this.splice(i, 1);
            break;
        }
    }
}
