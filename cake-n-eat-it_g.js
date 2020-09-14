/*--- Avanquest WebEasy Document Script ---*/

IE = (navigator.appName.indexOf('Microsoft') >= 0);
NS = (navigator.appName.indexOf('Netscape') >= 0);
SF = (navigator.appName.indexOf('Safari') >= 0);
FF = (navigator.userAgent.indexOf('Firefox') >= 0);
OP = (navigator.userAgent.indexOf('Opera') >= 0);
GK = (navigator.userAgent.indexOf('Gecko') >= 0);
MAC = (navigator.userAgent.indexOf('Mac') != -1);
V4 = (parseInt(navigator.appVersion) >= 4);
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
if (isIE() < 5) {
    V5 = -5;
} else {
    var V5 = (parseInt(navigator.appVersion.charAt(V5 + 5)) >= 5);
}


/*--- EndOfFile ---*/
