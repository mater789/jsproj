let user = {
    name: "John"
  };
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  alert( JSON.stringify(descriptor, null, 2 ) );
  /* 属性描述符：
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */


 let user = {};
 Object.defineProperty(user, "name", {
   value: "John"
 });
 let descriptor = Object.getOwnPropertyDescriptor(user, 'name'); //如果该属性存在，defineProperty 会更新其标志。否则，它会使用给定的值和标志创建属性；在这种情况下，如果没有提供标志，则会假定它是 false。
 alert( JSON.stringify(descriptor, null, 2 ) );
 /*
 {
   "value": "John",
   "writable": false,
   "enumerable": false,
   "configurable": false  不可配置的属性不能被删除。 不能修改 configurable 标志。不能修改 enumerable 标志。能将 writable: false 修改为 true（反之亦然）。不能修改访问者属性的 get/set（但是如果没有可以分配它们）。
 }
  */

 let user = {
  name: "John"
};
Object.defineProperty(user, "name", {
  writable: false
});
user.name = "Pete"; // Error: Cannot assign to read only property 'name'

let user = { };
Object.defineProperty(user, "name", {
  value: "John",
  // 对于新属性，我们需要明确地列出哪些是 true
  enumerable: true,
  configurable: true
});
alert(user.name); // John
user.name = "Pete"; // Error


let user = {
  name: "John",
  toString() {
    return this.name;
  }
};
Object.defineProperty(user, "toString", {
  enumerable: false
});
// 现在我们的 toString 消失了：
for (let key in user) alert(key); // name


let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/


let user = { };
Object.defineProperty(user, "name", {
  value: "John",
  writable: false,
  configurable: false
});
// 不能修改 user.name 或它的标志
// 下面的所有操作都不起作用：
//   user.name = "Pete"
//   delete user.name
//   defineProperty(user, "name", { value: "Pete" })
Object.defineProperty(user, "name", {writable: true}); // Error


Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))


Object.preventExtensions(obj)
//禁止向对象添加新属性。
Object.seal(obj)
//禁止添加/删除/修改属性。为所有现有的属性设置 configurable: false。
Object.freeze(obj)
//禁止添加/删除/更改属性。为所有现有的属性设置 configurable: false, writable: false。
Object.isExtensible(obj)
//如果添加属性被禁止，则返回 false，否则返回 true。
Object.isSealed(obj)
//如果添加/删除属性被禁止，并且所有现有的属性都具有 configurable: false则返回 true。
Object.isFrozen(obj)
//如果添加/删除/更改属性被禁止，并且所有当前属性都是 configurable: false, writable: false，则返回 true。


let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
// set fullName 将以给定值执行
user.fullName = "Alice Cooper";
alert(user.name); // Alice
alert(user.surname); // Cooper


//访问器描述符 get set
let user = {
  name: "John",
  surname: "Smith"
};
Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});
alert(user.fullName); // John Smith
for(let key in user) alert(key); // name, surname

//请注意，一个属性要么是访问器（具有 get/set 方法），要么是数据属性（具有 value），但不能两者都是。
// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
  get() {
    return 1
  },

  value: 2
});


function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // 年龄是根据当前日期和生日计算得出的
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}
let john = new User("John", new Date(1992, 6, 1));
alert( john.birthday ); // birthday 是可访问的
alert( john.age );      // ……age 也是可访问的

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;
// 现在这两个属性我们都能在 rabbit 中找到：
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
// walk 方法是从原型中获得的
rabbit.walk(); // Animal walk
//当然，这可能很显而易见，但是仍然要强调：只能有一个 [[Prototype]]。一个对象不能从其他两个对象获得继承。


let animal = {
  eats: true,
  walk() {
    /* rabbit 不会使用此方法 */
  }
};
let rabbit = {
  __proto__: animal
};
rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};
rabbit.walk(); // Rabbit! Bounce-bounce!


// animal 有一些方法
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};
let rabbit = {
  name: "White Rabbit",
  __proto__: animal
}
// 修改 rabbit.isSleeping
rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined（原型中没有此属性）


let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
// Object.keys 只返回自己的 key 几乎所有其他键/值获取方法，例如 Object.keys 和 Object.values 等，都会忽略继承的属性。
alert(Object.keys(rabbit)); // jumps
// for..in 会遍历自己以及继承的键
for(let prop in rabbit) alert(prop); // jumps，然后是 eats


let animal = {
  eats: true //animal 从 Object.prototype 中继承（因为 animal 是对象字面量 {...}，所以这是默认的继承
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}


//函数原型
let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal; //F.prototype 仅用在 new F 时
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal  
alert( rabbit.eats ); // true
//如果在创建之后，F.prototype 属性有了变化（F.prototype = <another object>），那么通过 new F 创建的新对象也将随之拥有新的对象作为 [[Prototype]]，但已经存在的对象将保持旧有的值。


function Rabbit() {}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (from prototype)

Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};
// 这样的 constructor 也是正确的，因为我们手动添加了它


let arr = [1, 2, 3];
// 它继承自 Array.prototype？
alert( arr.__proto__ === Array.prototype ); // true
// 接下来继承自 Object.prototype？
alert( arr.__proto__.__proto__ === Object.prototype ); // true
// 原型链的顶端为 null。
alert( arr.__proto__.__proto__.__proto__ ); // null

function f() {}
alert(f.__proto__ == Function.prototype); // true
alert(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects


//更改原生原型
String.prototype.show = function() {
  alert(this);
};
"BOOM!".show(); // BOOM!

if (!String.prototype.repeat) { // 如果这儿没有这个方法
  // 那就在 prototype 中添加它
  String.prototype.repeat = function(n) {
    // 重复传入的字符串 n 次

    // 实际上，实现代码比这个要复杂一些（完整的方法可以在规范中找到）
    // 但即使是不够完美的 polyfill 也常常被认为是足够好的
    return new Array(n + 1).join(this);
  };
}
alert( "La".repeat(3) ); // LaLaLa

//从原型中借用 避免多个继承的需求
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};
obj.join = Array.prototype.join;
alert( obj.join(',') ); // Hello,world!

let animal = {
  eats: true
};

// 创建一个以 animal 为原型的新对象
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // 将 rabbit 的原型修改为 {}

let animal = {
  eats: true
};
let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});
alert(rabbit.jumps); // true

// 完全相同的对象 obj 的浅拷贝
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

//我们可以把这样的对象称为 “very plain” 或 “pure dictionary” 对象，因为它们甚至比通常的普通对象（plain object）{...} 还要简单。
let obj = Object.create(null);
let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";
alert(obj[key]); // "some value"