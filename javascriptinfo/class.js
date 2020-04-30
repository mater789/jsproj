class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  // 用法：
  let user = new User("John");
  user.sayHi();

  class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  // 佐证：User 是一个函数
  alert(typeof User); // function
  //创建一个名为 User 的函数，该函数成为类声明的结果。该函数的代码来自于 constructor 方法（如果我们不编写这种方法，那么它就被假定为空）。
  //存储类中的方法，例如 User.prototype 中的 sayHi


  class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  // class 是函数 function
  alert(typeof User); // function
  // ...或者，更确切地说，是构造器方法
  alert(User === User.prototype.constructor); // true
  // 方法在 User.prototype 中，例如：
  alert(User.prototype.sayHi); // alert(this.name);
  // 在原型中实际上有两个方法
  alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

  // 用纯函数重写 class User
// 1. 创建构造器函数
function User(name) {
    this.name = name;
  }
  // 任何函数原型默认都具有构造器属性，
  // 所以，我们不需要创建它
  // 2. 将方法添加到原型
  User.prototype.sayHi = function() {
    alert(this.name);
  };
  // 用法：
  let user = new User("John");
  user.sayHi();

  //首先，通过 class 创建的函数具有特殊的内部属性标记 [[FunctionKind]]:"classConstructor"。因此，它与手动创建并不完全相同。 不像普通函数，调用类构造器时必须要用 new 关键词
  //类方法不可枚举。 类定义将 "prototype" 中的所有方法的 enumerable 标志设置为 false。
  //类总是使用 use strict。 在类构造中的所有代码都将自动进入严格模式


  //类表达式
  let User = class {
    sayHi() {
      alert("Hello");
    }
  };

  // “命名类表达式（Named Class Expression）”
// (规范中没有这样的术语，但是它和命名函数表达式类似)
let User = class MyClass {
    sayHi() {
      alert(MyClass); // MyClass 这个名字仅在类内部可见
    }
  };
  new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容
  alert(MyClass); // error，MyClass 在外部不可见

  function makeClass(phrase) {
    // 声明一个类并返回它
    return class {
      sayHi() {
        alert(phrase);
      };
    };
  }
  // 创建一个新的类
  let User = makeClass("Hello");
  new User().sayHi(); // Hello


  class User {

    constructor(name) {
      // 调用 setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  let user = new User("John");
  alert(user.name); // John
  user = new User(""); // Name is too short.


  Object.defineProperties(User.prototype, {
    name: {
      get() {
        return this._name
      },
      set(name) {
        // ...
      }
    }
  });


  //
  class User {
    name = "Anonymous"; //关于类字段的重要一点是，它们设置在单个对象上的，而不是设置在 User.prototype 上的。从技术上讲，它们是在 constructor 完成工作后被处理的。
  
    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
  }
  new User().sayHi();
  alert(User.prototype.sayHi); // 被放在 User.prototype 中
  alert(User.prototype.name); // undefined，没有被放在 User.prototype 中


  class Button {
    constructor(value) {
      this.value = value;
    }
  
    click() {
      alert(this.value);
    }
  }
  let button = new Button("hello");
  setTimeout(button.click, 1000); // undefined

  class Button {
    constructor(value) {
      this.value = value;
      this.click = this.click.bind(this);//bind
    }
  
    click() {
      alert(this.value);
    }
  }
  let button = new Button("hello");
  setTimeout(button.click, 1000); // hello

  class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  let button = new Button("hello");
  setTimeout(button.click, 1000); // hello