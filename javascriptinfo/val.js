//const
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // 错误，不能对常量重新赋值

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

//Number 类型
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "not a number" / 2 ); // NaN，这样的除法是错误的
alert( NaN );

// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;

//String 类型
let phrase = `can embed another ${str}`;//反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中
let name = "John";
// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!
// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3

//特殊的 null 值不属于上述任何一种类型。
//JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

//特殊值 undefined 和 null 一样自成类型。
//undefined 的含义是 未被赋值。
//如果一个变量已被声明，但未被赋值，那么它的值就是 undefined：
let x;
alert(x); // 弹出 "undefined"

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2) typeof null 的结果是 "object"。这其实是不对的。官方也承认了这是 typeof 运算符的问题
typeof alert // "function"  (3)在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 object 类型。但是 typeof 会对函数区分对待

//convert
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       //
//请注意 null 和 undefined 在这有点不同：null 变成数字 0，undefined 变成 NaN

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
//直观上为“空”的值（如 0、空字符串、null、undefined 和 NaN）将变为 false。其他值变成 true。请注意：包含 0 的字符串 "0" 是 true

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3
alert( +true ); // 1 但是如果运算元不是数字，加号 + 则会将其转化为数字 它的效果和 Number(...) 相同
alert( +"" );   // 0

let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23"，二元运算符加号合并字符串
// 在二元运算符加号起作用之前，所有的值都被转化为了数字
alert( +apples + +oranges ); // 5

//幂运算符 **
//对于自然数 b，a ** b 的结果是 a 与自己相乘 b 次。
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
alert( 4 ** (1/2) ); // 2 (1/2 幂相当于开方，这是数学常识)
alert( 8 ** (1/3) ); // 2 (1/3 幂相当于开三次方)