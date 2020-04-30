let age = prompt('How old are you?', 100);//浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。 100为默认
let isBoss = confirm("Are you the boss?");//confirm 函数显示一个带有 question 点击确定返回 true，点击取消返回 false。

//与运算 && 的优先级比或运算 || 要高。

//两个非运算 !! 有时候用来将某个值转化为布尔类型：
alert( !!"non-empty string" ); // true alert( Boolean("non-empty string") ); // true
alert( !!null ); // false alert( Boolean(null) ); // false

//break <labelName> 语句跳出循环至标签处：
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, '');
      // 如果是空字符串或被取消，则中断并跳出这两个循环。
      if (!input) break outer; // (*)
      // 用得到的值做些事……
    }
  }
alert('Done!');
//continue 指令也可以与标签一起使用。在这种情况下，执行跳转到标记循环的下一次迭代。


function showMessage(from, text = anotherFunction()) {
    // anotherFunction() 仅在没有给定 text 时执行
    // 其运行结果将成为 text 的值
}
//undefined 的显式检查
function showMessage(from, text) {
    if (text === undefined) {
      text = 'no text given';
    }
  
    alert( from + ": " + text );
}

//空值的 return 或没有 return 的函数返回值为 undefined
// 不要在 return 与返回值之间添加新行

let sayHi = function() {
    alert( "Hello" );
};

let sum = (a, b) => a + b;
/* 这个箭头函数是下面这个函数的更短的版本：
let sum = function(a, b) {
  return a + b;
};
*/
//如果我们只有一个参数，还可以省略掉参数外的圆括号，使代码更短。
let double = n => n * 2;
// 差不多等同于：let double = function(n) { return n * 2 }
alert( double(3) ); // 6
//如果没有参数，括号将是空的（但括号应该保留）：
let sayHi = () => alert("Hello!");
//箭头函数可以像函数表达式一样使用
let welcome = (age < 18) ? () => alert('Hello') : () => alert("Greetings!");

let sum = (a, b) => {  // 花括号表示开始一个多行函数
    let result = a + b;
    return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
  };
  
  //debugger 语句 调试器断
  console.log("value", i);