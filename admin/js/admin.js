/**
 * Created by gongxuebing on 2016/12/1.
 */
$.ajaxSetup({
    beforeSend: function(XMLHttpRequest){
        XMLHttpRequest.setRequestHeader("Access-Token",accessToken);
    },
});