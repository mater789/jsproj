let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法 与上面效果相同

let user = {     // 一个对象
    name: "John",  // 键 "name"，值 "John"
    age: 30        // 键 "age"，值 30
};
//属性的值可以是任意类型，让我们加个布尔类型：
user.isAdmin = true;
//我们可以用 delete 操作符移除属性：
delete user.age;

//我们也可以用多字词语来作为属性名，但必须给它们加上引号：
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // 多词属性名必须加引号
};
// 设置
user["likes birds"] = true;
// 读取
alert(user["likes birds"]); // true
// 删除
delete user["likes birds"];

//我们可以在对象字面量中使用方括号。这叫做 计算属性。
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5, // 属性名是从 fruit 变量中得到的
};
alert( bag.apple ); // 5 如果 fruit="apple"

function makeUser(name, age) {
    return {
      name, // 与 name: name 相同
      age,  // 与 age: age 相同
      // ...
    };
}

//属性名（key）必须是字符串或 Symbol
let obj = {
    0: "test" // 和 "0": "test" 相同
};
//保留字段可以被用作属性名。 只有一个特殊的：__proto__ 因为历史原因要特别对待
let obj = {
    for: 1,
    let: 2,
    return: 3
}

let user = { name: "John", age: 30 };
alert( user.noSuchProperty === undefined ); // true 意思是没有这个属性
alert( "age" in user ); // true，user.age 存在
alert( "blabla" in user ); // false，user.blabla 不存在。

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // 属性键的值
    alert( user[key] ); // John, 30, true
}

//如果我们遍历一个对象，我们获取属性的顺序是和属性添加时的顺序相同
//简短的回答是：“有特别的顺序”：整数(必须是整数 小数不行)属性会被进行排序，其他属性则按照创建的顺序显示
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
for(let code in codes) {
    alert(code); // 1, 41, 44, 49
}

//原始类型：字符串，数字，布尔类型 — 作为整体值被赋值或复制。
//对象都是“通过引用”存储和复制的
//两个对象只有在它们其实是一个对象时才会相等。相当于比较地址

const user = {
    name: "John"
  };
user.age = 25; // (*)
alert(user.age); // 25
// 错误（不能再给 user 赋值）
user = {
    name: "Pete"
};
//相当于user本身指向不能被修改，但是指向内容修改没关系

//clone 并不能深度
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// 把 permissions1 和 permissions2 的所有属性都拷贝给 user
Object.assign(user, permissions1, permissions2);
// 现在 user = { name: "John", canView: true, canEdit: true } 
//如果用于接收的对象（user）已经有了同样属性名的属性，已有的则会被覆盖
//简单clone操作
let user = {
    name: "John",
    age: 30
  };
let clone = Object.assign({}, user);
//https://lodash.com/docs/4.17.15#cloneDeep 深度clone


//Symbol 保证是唯一的
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false
//Symbol 不会被自动转换为字符串
//我们真的想显示一个 Symbol，我们需要在它上面调用 .toString
let id = Symbol("id");
alert(id.toString()); // Symbol(id)，现在它有效了
//或者获取 symbol.description 属性，只显示描述（description）：
alert(id.description); // id

//类似封装的作用
let user = { // 属于另一个代码
    name: "John"
  };
let id = Symbol("id");
user[id] = 1;
alert( user[id] ); // 我们可以使用 Symbol 作为键来访问数据

//如果我们要在对象字面量 {...} 中使用 Symbol，则需要使用方括号把它括起来
let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123 // 而不是 "id：123"
};
//Symbol 属性不参与 for..in 循环。 Object.keys(user) 也会忽略它们
//相反，Object.assign 会同时复制字符串和 symbol 属性：

//全局 symbol
// 从全局注册表中读取
let id = Symbol.for("id"); // 如果该 Symbol 不存在，则创建它
// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");
// 相同的 Symbol
alert( id === idAgain ); // true
//Symbol.keyFor(sym)，它的作用完全反过来：通过全局 Symbol 返回一个名字
// 通过 name 获取 Symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// 通过 Symbol 获取 name
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
//Symbol.keyFor 内部使用全局 Symbol 注册表来查找 Symbol 的键。所以它不适用于非全局 Symbol。如果 Symbol 不是全局的，它将无法找到它并返回 undefined。

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
// 方法简写看起来更好，对吧？
let user = {
    sayHi() { // 与 "sayHi: function()" 一样
        alert("Hello");
    }
};

//this 的值是在代码运行时计算出来的，它取决于代码上下文。
//在没有对象的情况下调用：this == undefined

//属性访问 user.hi 的结果不是函数，而是引用类型
//类型的值是三部分的结合 (base, name, strict)
//属性访问 user.hi 的结果不是函数，而是引用类型。在严格模式下的 user.hi 是：
(user, "hi", true)
//因此，结果是，只有使用点符号 obj.method() 或方括号语法 obj[method]()（它们在这里作用相同）调用函数时，this 的值才被正确传递

//箭头函数有些特别：它们没有自己的 this。如果我们在这样的函数中引用 this，this 值取决于外部“正常的”函数。
let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  user.sayHi(); // Ilya

  //调用 obj[Symbol.toPrimitive](hint) — 带有 symbol 键 Symbol.toPrimitive（系统 symbol）的方法，如果这个方法存在的话，
  //否则，如果 hint 是 "string" — 尝试 obj.toString() 和 obj.valueOf()，无论哪个存在。
  //否则，如果 hint 是 "number" 或 "default" — 尝试 obj.valueOf() 和 obj.toString()，无论哪个存在。
  let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  // 转换演示：
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500

//默认情况下，普通对象具有
//toString 方法返回一个字符串 "[object Object]"。
//valueOf 方法返回对象自身。
let user = {name: "John"};
alert(user); // [object Object]
alert(user.valueOf() === user); // true

let user = {
    name: "John",
    money: 1000,
  
    // 对于 hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // 对于 hint="number" 或 "default"
    valueOf() {
      return this.money;
    }
  
};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

//构造函数它们的命名以大写字母开头
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false
//当一个函数被使用 new 操作符执行时，它按照以下步骤：
//一个新的空对象被创建并分配给 this。
//函数体执行。通常它会修改 this，为其添加新的属性。
//返回 this 的值。
function User(name) {
    // this = {};（隐式创建）

    // 添加属性到 this
    this.name = name;
    this.isAdmin = false;

    // return this;（隐式返回）
}

//如果我们有许多行用于创建单个复杂对象的代码，我们可以将它们封装在构造函数中
let user = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ……用于用户创建的其他代码
    // 也许是复杂的逻辑和语句
    // 局部变量等
  };

//在一个函数内部，我们可以使用 new.target 属性来检查它是否被使用 new 进行调用了。
function User() {
    alert(new.target);
  }
  // 不带 "new"：
  User(); // undefined
  // 带 "new"：
  new User(); // function User { ... }

//如果 return 返回的是一个对象，则返回这个对象，而不是 this。
//如果 return 返回的是一个原始类型，则忽略。

