
//字符串的内部格式始终是 UTF-16

//使用反引号的另一个优点是它们允许字符串跨行
let str1 = "Hello\nWorld"; // 使用“换行符”创建的两行字符串
// 使用反引号和普通的换行创建的两行字符串
let str2 = `Hello
World`;
alert(str1 == str2); // true

alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫，罕见的中国象形文字（长 unicode）
//length 是一个属性

let str = `Hello`;
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // ''（空字符串）

for (let char of "Hello") {
  alert(char); // H,e,l,l,o（char 变为 "H"，然后是 "e"，然后是 "l" 等）
}

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0，因为 'Widget' 一开始就被找到
alert( str.indexOf('widget') ); // -1，没有找到，检索是大小写敏感的
alert( str.indexOf('id', 2) ) // 12 我们从 2 开始检索

alert( ~2 ); // -3，和 -(2+1) 相同 对于 32-bit 整数，~n 等于 -(n+1)。
if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // 正常运行
}

alert( "Widget with id".includes("Widget") ); // true
alert( "Widget".startsWith("Wid") ); // true，"Widget" 以 "Wid" 开始

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin'，从 0 到 5 的子字符串（不包括 5） 如果没有第二个参数，slice 会一直运行到字符串末尾：0
// 从右边的第四个位置开始，在右边的第一个位置结束
alert( str.slice(-4, -1) ); // 'gif'
//str.substring(start [, end]) 返回字符串在 start 和 end 之间 的部分。 这与 slice 几乎相同，但它允许 start 大于 end。 负值代表 0
alert( str.substr(2, 4) ); // 'ring'，从位置 2 开始，获取 4 个字符
alert( str.substr(-4, 2) ); // 'gi'，从第 4 位获取 2 个字符 用它

alert( "Z".codePointAt(0) ); // 90
alert( String.fromCodePoint(90) ); // Z
alert( '\u005a' ); // Z
alert( 'Österreich'.localeCompare('Zealand') ); // -1

//特殊字符占据两个长度
alert( '𝒳'.charCodeAt(0).toString(16) ); // d835，在 0xd800 和 0xdbff 之间
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, 在 0xdc00 和 0xdfff 之间

let s1 = 'S\u0307\u0323'; // Ṩ，S + 上点 + 下点
let s2 = 'S\u0323\u0307'; // Ṩ，S + 下点 + 上点
alert( "S\u0307\u0323".normalize() == "\u1e68" ); // true
