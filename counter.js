<!--
b1=new Date();
a1=window.screen.height;
a2=window.screen.width;
a3=window.screen.colorDepth;
a4=window.document.referrer;
if (a4 == "[unknown origin]" ) {
    a4 = "";
}
a5=b1.getTimezoneOffset();
// counterLoc = "http://localhost:8088/cgi-bin/counter/counter.cgi?"
counterLoc = "http://localhost:8088/cgi-bin/tes21/counter/counter.cgi?"
           + "&wh="+a1+"&ww="+a2+"&tz="+a5+"&cf="+a4+"&cd="+a3;

function imageswap() {
    document.images["mycounter"].src = counterLoc;
}

function preload() {
    setTimeout("imageswap()", 500);
}

function write2body() {
    document.write("<IMG src=\"" + counterLoc + "\">\n");
}
// -->
