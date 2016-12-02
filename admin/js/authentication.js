/**
 * Created by gongxuebing on 2016/12/1.
 */

<!-- 鉴权 -->
var username = sessionStorage.getItem("username");
var accessToken = sessionStorage.getItem("accessToken");
var currentTime = new Date().getTime();
var expireTime = sessionStorage.getItem("expireTime");
if(!accessToken) {
    alert("未登录，无访问权限！")
    window.location.href = "login.html";
}
else if(currentTime > expireTime) {
    alert("会话超时，请重新登录！")
    window.location.href = "login.html";
}