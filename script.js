// ==UserScript==
// @name         URP教务处验证码自动填写
// @namespace    JerryWang
// @version      0.25
// @description  教务处验证码自动识别填写(理论支持所有新版URP教务系统)
// @author       JerryWang
// @match        http://jwxs.hebut.edu.cn/login
// @match        http://zhjw.scu.edu.cn/login
// @grant        none
// @require      http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// ==/UserScript==
$("a").click(function(){
    setTimeout(function () {
        var img = $("#captchaImg")[0];
        var canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        var dataURL = canvas.toDataURL("image/png");
        $.ajax({
            url: "http://81.70.144.40:5005/predict",
            dataType: "json",
            type: "get",
            async:false,
            data: {
                data: dataURL
            },
            success: function (res) {
                console.log(res.captcha)
                $("#input_checkcode")[0].value = res.captcha
            }
        });
    }, 200);
});
(function () {
    $("#formFooter")[0].innerHTML += "<br><span id=\"clicked\" style=\"color: #7b0003;\">如验证码识别错误 可点击图片重新识别</span>";
    setTimeout(function () {
        var img = $("#captchaImg")[0];
        var canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        var dataURL = canvas.toDataURL("image/png");
        $.ajax({
            url: "http://81.70.144.40:5005/predict",
            dataType: "json",
            type: "get",
            async:false,
            data: {
                data: dataURL
            },
            success: function (res) {
                console.log(res.captcha)
                $("#input_checkcode")[0].value = res.captcha
            }
        });
    }, 200);
})();