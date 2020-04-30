let now = new Date();
alert( now ); // 显示当前的日期/时间

// 0 表示 01.01.1970 UTC+0 传入的整数参数代表的是自 1970-01-01 00:00:00 以来经过的毫秒数，该整数被称为 时间戳。
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );
// 现在增加 24 小时，得到 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );

//new Date(year, month, date, hours, minutes, seconds, ms)
//year 必须是四位数：2013 是合法的，98 是不合法的。
//month 计数从 0（一月）开始，到 11（十二月）结束。

//要获取年份就使用 getFullYear()。
//getDay() 获取一周中的第几天，从 0（星期日）到 6（星期六）

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ……是 1st Feb 2013!

let date = new Date();
alert(+date); // 以毫秒为单位的数值，与使用 date.getTime() 的结果相同

let start = new Date(); // 开始测量时间
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date(); // 结束测量时间
alert( `The loop took ${end - start} ms` );

let start = Date.now(); // 从 1 Jan 1970 至今的时间戳
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // 完成
alert( `The loop took ${end - start} ms` ); // 相减的是时间戳，而不是日期

//字符 "T" 是一个分隔符。 -07:00代表时区
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (时间戳)

