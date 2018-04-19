randomArray=function(arr) {
    var ret=[];
    while (arr.length>0) {
        ret.push(arr.splice(Math.floor(arr.length*Math.random()),1)[0]);
    }
    return ret;
}
delDuplicate=function(a){
    a.sort();
    for (var i = a.length - 1; i >= 0; i--) {
        if(i>0){
            if(a[i]==a[i-1]){
                a.splice(i,1);
            }
        }
    }
    return a;
}
checkPhone = function(phone) {
    return !!phone.match(/^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[579])[0-9]{8}$/);
};
createEl = function(t, a, y, x) {
    var e = document.createElement(t);
    if (a) {
        for (var k in a) {
            if (k == 'class') e.className = a[k];
            else if (k == 'id') e.id = a[k];
            else e.setAttribute(k, a[k]);
        }
    }
    if (y) {
        for (var k in y) e.style[k] = y[k]; }
            if (x) { e.appendChild(document.createTextNode(x)); }
        document.body.appendChild(e);
        return e;
    };
    removeEL = function(obj) {
        document.body.removeChild(obj);
    };

    autoScreen = function(w, h, c) {
        var designWidth = w;
        var designHeight = h;
        var viewWidth = document.documentElement.clientWidth;
        var viewHeight = document.documentElement.clientHeight; //
        if (viewWidth < viewHeight) {
            var scale = viewWidth / designWidth;
            c.width = designWidth;
            c.height = viewHeight / scale;
            c.style.width = viewWidth + "px";
            c.style.height = viewHeight + "px";
        } else {
            var scale = viewHeight / designHeight;
            c.width = w * scale;
            c.height = viewHeight;
            c.style.width = w * scale + "px";
            c.style.height = viewHeight + "px";
            c.style.left = '25%';
        }
    };
/**
* js获取中英文字符串长度
* @param str：需要截取的字符串
*
*/
GetLength = function (str) {

    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};
/**
* js截取字符串，中英文都能用
* @param str：需要截取的字符串
* @param len: 需要截取的长度
*/
cutstr=function(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {

            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {

            return str_cut;
        }
    }

    if (str_length < len) {
        return str;
    }
};
(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i) {
            var p = a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
})(jQuery);