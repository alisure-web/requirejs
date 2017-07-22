/**
 * Created by ALISURE on 2017/5/21.
 */

/*
* 定义 math.js
* */
define(function () {
   var add = function (x, y) {
       return x + y;
   };

   var mul = function (x, y) {
       return x * y;
   };

   var add_5 = function (x) {
       return x + 5;
   };

   return {
       add: add,
       mul: mul,
       add_5: add_5
   }
});