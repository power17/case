$(function(){    
    window.baseurl=window.location.href.substring(0,window.location.href.lastIndexOf('/')+1);
    window.shareData = {title:'你，真的独一无二么？',
    desc: '1.49亿平方公里的土地上，到底有几个你？',
    desc2:'',
    link: window.baseurl+'index.html',
    imgUrl: window.baseurl+'wx.jpg',
    success: function () {
        
    },
    cancel: function () { 
    } };
    if (/MicroMessenger/i.test(navigator.userAgent)) {
        $.getScript("http://res.wx.qq.com/open/js/jweixin-1.0.0.js", function callback() {
            $.ajax({
                type: "post",
                url: "http://2016.ithinky.com/wxapi/jssdk.php",
                dataType: 'json',
                data: {
                    url: window.location.href
                },
                success: function (data) {
                    window.token=data.token;
                    wx.config({
                        debug: false,
                        appId: data.appid,
                        timestamp: data.timestamp,
                        nonceStr: data.noncestr,
                        signature: data.signature,
                        jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage'
                        ]
                    })
                    wx.ready(function () {
                        wx.onMenuShareAppMessage(shareData);
                        wx.onMenuShareTimeline(shareData);
                        
                    })
                    wx.error(function (res) {
                    // alert(res)
                })
                },
                error: function (xhr, ajaxOptions, thrownError) {
                // alert("Http status: " + xhr.status + " " + xhr.statusText + "\najaxOptions: " + ajaxOptions + "\nthrownError:" + thrownError + "\n" + xhr.responseText);
            }
        })
})
}
})

