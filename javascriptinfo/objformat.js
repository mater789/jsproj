//Object.keys(obj) —— 返回一个包含该对象所有的键的数组。
//Object.values(obj) —— 返回一个包含该对象所有的值的数组。
//Object.entries(obj) —— 返回一个包含该对象所有 [key, value] 键值对的数组。
//Object.keys/values/entries 会忽略 symbol 属性 Object.getOwnPropertySymbols，它会返回一个只包含 Symbol 类型的键的数组 Reflect.ownKeys(obj)，它会返回 所有 键
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  let doublePrices = Object.fromEntries(
    // 转换为数组，之后使用 map 方法，然后通过 fromEntries 再转回到对象
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );  
alert(doublePrices.meat); // 8


//解构赋值
// 我们有一个存放了名字和姓氏的数组
let arr = ["Ilya", "Kantor"]
// 解构赋值
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor
let [firstName, surname] = "Ilya Kantor".split(' ');
// 不需要第二个元素
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul
//实际上，我们可以将其与任何可迭代的数组一起使用，而不仅限于数组：
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');
alert(user.name); // Ilya

let user = {
    name: "John",
    age: 30
  };
  // 循环遍历键—值对
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
  }
  let user = new Map();
  user.set("name", "John");
  user.set("age", "30");
  for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
  }

  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
  alert(name1); // Julius
  alert(name2); // Caesar
  // 请注意，`rest` 的类型是数组
  alert(rest[0]); // Consul
  alert(rest[1]); // of the Roman Republic
  alert(rest.length); // 2

  // 默认值
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
alert(name);    // Julius（来自数组的值）
alert(surname); // Anonymous（默认值被使用了）

// 只会提示输入姓氏 默认值可以是更加复杂的表达式甚至可以是函数调用
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
alert(name);    // Julius（来自数组）
alert(surname); // 你输入的值


//对象解构
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  let {title, width, height} = options;  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
// 改变 let {...} 中元素的顺序
let {height, width, title} = { title: "Menu", height: 200, width: 100 }

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  // { sourceProperty: targetVariable }
  let {width: w, height: h, title} = options;
  // width -> w
  // height -> h
  // title -> title
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200

  let options = {
    title: "Menu"
  };
  let {width = 100, height = 200, title} = options;
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

  let options = {
    title: "Menu"
  };
  let {width: w = 100, height: h = 200, title} = options;
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200
//如果我们有一个具有很多属性的复杂对象，那么我们可以只提取所需的内容
  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  // 仅提取 title 作为变量
  let { title } = options;
  alert(title); // Menu

  let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  
  // title = 名为 title 的属性
  // rest = 存有剩余属性的对象
  let {title, ...rest} = options;
  // 现在 title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100

  let title, width, height;
// 现在就可以了
({title, width, height} = {title: "Menu", width: 200, height: 100});
alert( title ); // Menu

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  // 为了清晰起见，解构赋值语句被写成多行的形式
  let {
    size: { // 把 size 赋值到这里
      width,
      height
    },
    items: [item1, item2], // 把 items 赋值到这里
    title = "Menu" // 在对象中不存在（使用默认值）
  } = options;
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut

  // 我们传递一个对象给函数
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  // ……然后函数马上把对象展开成变量
  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items – 提取于 options，
    // width, height – 使用默认值
    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert( items ); // Item1, Item2
  }
  showMenu(options);

  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }
  showMenu(options);

showMenu({}); // 不错，所有值都取默认值
showMenu(); // 这样会导致错误
//我们可以通过指定空对象 {} 为整个参数对象的默认值来解决这个问题
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
  }
  showMenu(); // Menu 100 200