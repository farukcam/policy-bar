let PolicyText = "",
closeBtnImage = '<img src="dist/close.png" />';
const PolicyElement = document.body;

PolicyElement.setAttribute("onload", "checkPlicyCookie()");

const setPlicyCookie = () => {
    var cvalue = "msgboxhide";
    var exdays = 90;
    var cname = "dataPolicy";
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain="+window.location.host+";path=/";
    document.getElementById('CookieMsgBox').style.display = 'none';
}

const getPlicyCookie = () => {
    var cname = "dataPolicy";
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const checkPlicyCookie = () => {
    var vp_cookie_val = getPlicyCookie();
    if (vp_cookie_val !== "msgboxhide") {

      document.head.innerHTML+='<style>#CookieMsgBox a{color:#000; text-decoration:underline; font-weight:normal !important;}</style>';

      PolicyElement.innerHTML+= '<div id="CookieMsgBox" style="position: fixed; bottom: 0px; width: 100%; display: block; z-index: 999999; left: 0px;"><div class="MsgBoxContainer" style="width:100%; height:auto; background-color:#fff; min-height: 42px; border:1px solid #f3f3f3; display:inline-block; position:relative; margin: auto; box-sizing: border-box;"><div class="content" style="font-size: 15px; line-height:18px; text-align:left; color:#000; padding:10px 40px 5px 10px; max-width: 940px; margin: auto; position: relative;"><span style="font-size:13px !important; line-height:15px; font-weight:normal !important;">'+PolicyText+'</span><div class="closeBtn" onclick="setPlicyCookie();" style="position:absolute; right: 17px; top:32%; cursor:pointer;">'+closeBtnImage+'</div></div></div>';

    }
}
