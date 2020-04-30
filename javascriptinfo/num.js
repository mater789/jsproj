
let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

alert( 123456..toString(16) ); //如果我们想直接在一个数字上调用一个方法

Math.floor //向下舍入：3.1 变成 3，-1.1 变成 -2。
Math.ceil //向上舍入：3.1 变成 4，-1.1 变成 -1。
Math.round//向最近的整数舍入：3.1 变成 3，3.6 变成 4，-1.1 变成 -1。
Math.trunc//移除小数点后的所有内容而没有舍入：3.1 变成 3，-1.1 变成 -1。

let num = 12.34;
alert( num.toFixed(1) ); // "12.3" 函数 toFixed(n) 将数字舍入(round)到小数点后 n 位，并以字符串形式返回结果 

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255，没有 0x 仍然有效

Math.random() //返回一个从 0 到 1 的随机数（不包括 1）
Math.pow(n, power)
