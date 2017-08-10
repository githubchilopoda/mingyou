/**
 * Created by Administrator on 2017/5/15.
 */
    /*以下为PC 端 验证码 匹配*/
var code ; //在全局 定义验证码
function createCode(){
    code = new Array();
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("checkCode");
    checkCode.value = ""

    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H',
        'J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k');

    for(var i=0;i<codeLength;i++) {
        var charIndex = Math.floor(Math.random()*32);
        code +=selectChar[charIndex];
    }
    if(code.length != codeLength){
        createCode();
    }
    checkCode.value = code;
}

function validate () {
    var inputCode = document.getElementById("text").value.toUpperCase();
        if(inputCode.length <=0) {
            alert("请输入验证码！");
            return false;
        }
        else if(inputCode != code ){
            alert("验证码输入错误！");
            createCode();
            return false;
        }
        else {
            return true;
        }

}

