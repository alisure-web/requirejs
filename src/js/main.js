/**
 * Created by ALISURE on 2017/5/21.
 * http://www.runoob.com/w3cnote/requirejs-tutorial-2.html
 */

require.config({
    baseUrl: "../js/",
    paths : {
        "jquery": "common/jquery-1.11.3.min",
        "test": "web/test",
        "math": "web/math"
    }
});

require(["jquery", "math", "test"], function ($, math) {
    $(function(){
        var result = math.add(5, 6);
        alert(result);
    });
});