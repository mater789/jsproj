
//shift 取出队列首端的一个元素，整个队列往前移，这样原先排第二的元素现在排在了第一。
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // 移除 "Pear" 然后 alert 显示出来
alert( fruits ); // Apple, Orange
fruits.push("Pear");
alert( fruits.shift() ); // 移除 Apple 然后 alert 显示出来
fruits.unshift('Apple');//在数组的首端添加元素

let fruits = ["Apple", "Orange", "Plum"];
// 遍历数组元素
for (let fruit of fruits) {
  alert( fruit );
}

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // 截断到只剩 2 个元素
alert( arr ); // [1, 2] 所以，清空数组最简单的方法就是：arr.length = 0;。

let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
alert( arr[1] ); // undefined
// now arr = ["I",  , "home"];
alert( arr.length ); // 3

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // 从索引 1 开始删除 1 个元素
alert( arr ); // ["I", "JavaScript"]
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]

//arr.slice([start], [end])
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s（复制从位置 1 到位置 3 的元素）
alert( arr.slice(-2) ); // s,t（复制从位置 -2 到尾端的元素） arr.slice() 会创建一个 arr 的副本

let arr = [1, 2];
// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

//如果类似数组的对象具有 Symbol.isConcatSpreadable 属性，那么它就会被 concat 当作一个数组来处理
let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr.concat(arrayLike) ); // 1,2,something,else

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true

const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1（应该为 0，但是严格相等 === equality 对 NaN 无效）
alert( arr.includes(NaN) );// true（这个结果是对的）

let result = arr.find(function(item, index, array) {
  // 如果返回 true，则返回 item 并停止迭代
  // 对于 falsy 则返回 undefined
});
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John

//但是 filter 返回的是所有匹配元素组成的数组
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
// 返回前两个用户的数组
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

let arr = [ 1, 2, 15 ];
// 该方法重新排列 arr 的内容
arr.sort();
alert( arr );  // 1, 15, 2 这些元素默认情况下被按字符串进行排序。

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15
arr.sort( (a, b) => a - b ); //效果一样

let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a.localeCompare(b) ) ); 

let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ');
for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo（和其他名字）
}

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // 使用分号 ; 将数组粘合成字符串
alert( str ); // Bilbo;Gandalf;Nazgul

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);//init sum 0
alert(result); // 15

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  // 找到 army.canJoin 返回 true 的 user
let soldiers = users.filter(army.canJoin, army); //最后的参数的值在 func 中变为 this。
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23