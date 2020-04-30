//Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键
let map = new Map();
map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔值键
// 还记得普通的 Object 吗? 它会将键转化为字符串
// Map 则会保留键的类型，所以下面这两个结果不同：
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'
alert( map.size ); // 3
//map[key] 不是使用 Map 的正确方式 map[key] = 2，这样会将 map 视为 JavaScript 的 plain object 所以我们应该使用 map 方法：set 和 get 等。

//Map 还可以使用对象作为键。
let john = { name: "John" };
// 存储每个用户的来访次数
let visitsCountMap = new Map();
// john 是 Map 中的键
visitsCountMap.set(john, 123);
alert( visitsCountMap.get(john) ); // 123
//Map 使用 SameValueZero 算法来比较键是否相等

//每一次 map.set 调用都会返回 map 本身，所以我们可以进行“链式”调用
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  // 遍历所有的键（vegetables）
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
  }
  // 遍历所有的值（amounts）
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  // 遍历所有的实体 [key, value]
  for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
    alert(entry); // cucumber,500 (and so on)
  }

  // 对每个键值对 (key, value) 运行 forEach 函数
recipeMap.forEach( (value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
  });


  //创建map
  // 键值对 [key, value] 数组
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);
  alert( map.get('1') ); // str1

  //这里，Object.entries 返回键/值对数组：[ ["name","John"], ["age", 30] ]。这就是 Map 所需要的格式。
  let obj = {
    name: "John",
    age: 30
  };
  let map = new Map(Object.entries(obj));
  alert( map.get('name') ); // John

  //map 到 obj
  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  alert(prices.orange); // 2

  let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); // 创建一个普通对象（plain object）(*)
//let obj = Object.fromEntries(map); // 省掉 .entries()
// 完成了！
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2


let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits，一些访客来访好几次
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set 只保留不重复的值
alert( set.size ); // 3
for (let user of set) {
  alert(user.name); // John（然后 Pete 和 Mary）
}

let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) alert(value);
// 与 forEach 相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});
//set.keys() —— 遍历并返回所有的值（returns an iterable object for values），
//set.values() —— 与 set.keys() 作用相同，这是为了兼容 Map，
//set.entries() —— 遍历并返回所有的实体（returns an iterable object for entries）[value, value]


//WeakMap 在这方面有着根本上的不同。它不会阻止垃圾回收机制对作为键的对象（key object）的回收。
//WeakMap 和 Map 的第一个不同点就是，WeakMap 的键必须是对象，不能是原始值
weakMap.set(john, "secret documents");
// 如果 john 消失，secret documents 将会被自动清除
//只有set get delete has 方法

let cache = new WeakMap();
// 计算并记结果
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}
// 📁 main.js
let obj = {/* some object */};
let result1 = process(obj);
let result2 = process(obj);
// ……稍后，我们不再需要这个对象时：
obj = null;
// 无法获取 cache.size，因为它是一个 WeakMap，
// 要么是 0，或即将变为 0
// 当 obj 被垃圾回收，缓存的数据也会被清除