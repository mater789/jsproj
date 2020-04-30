function sumAll(...args) { // 数组名为 args
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  alert( sumAll(1) ); // 1
  alert( sumAll(1, 2) ); // 3
  alert( sumAll(1, 2, 3) ); // 6

  function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // 剩余的参数被放入 titles 数组中
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
  showName("Julius", "Caesar", "Consul", "Imperator");

  //有一个名为 arguments 的特殊的类数组对象，该对象按参数索引包含所有参数 箭头函数是没有 "arguments"
  function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
  
    // 它是可遍历的
    // for(let arg of arguments) alert(arg);
  }
  // 依次显示：2，Julius，Caesar
  showName("Julius", "Caesar");
  // 依次显示：1，Ilya，undefined（没有第二个参数）
  showName("Ilya");


  //Spread 语法内部使用了迭代器来收集元素，与 for..of 的方式相同。 对于将一些“东西”转换为数组的任务，Array.from 往往更通用。
  let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5（spread 语法把数组转换为参数列表）

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(...arr1, ...arr2) ); // 8

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15（0，然后是 arr，然后是 2，然后是 arr2）

let arr = [1, 2, 3];
let arrCopy = [...arr]; // 将数组 spread 到参数列表中
                        // 然后将结果放到一个新数组
// 两个数组中的内容相同吗？
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
// 两个数组相等吗？
alert(arr === arrCopy); // false（它们的引用是不同的）
// 修改我们初始的数组不会修改副本：
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // 将对象 spread 到参数列表中
                          // 然后将结果返回到一个新对象
// 两个对象中的内容相同吗？
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
// 两个对象相等吗？
alert(obj === objCopy); // false (not same reference)
// 修改我们初始的对象不会修改副本：
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
//这种方式比使用 let arrCopy = Object.assign([], arr); 来复制数组，或使用 let objCopy = Object.assign({}, obj); 来复制对象写起来要短得多


//一个函数的名字可以通过属性 “name” 来访问
function sayHi() {
    alert("Hi");
  }
alert(sayHi.name); // sayHi

let sayHi = function() {
    alert("Hi");
  };
  alert(sayHi.name); // sayHi（有名字！） 规范中把这种特性叫做「上下文命名」。如果函数自己没有提供，那么在赋值中，会根据上下文来推测一个。

  //还有另一个内置属性 “length”，它返回函数入参的个数
  function f1(a) {}
  function f2(a, b) {}
  function many(a, b, ...more) {}
  alert(f1.length); // 1
  alert(f2.length); // 2
  alert(many.length); // 2 可以看到，余参不参与计数

//属性不是变量
function makeCounter() {

    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
  }
  let counter = makeCounter();
  counter.count = 10;
  alert( counter() ); // 10
  //两者最大的不同就是如果 count 的值位于外层（函数）变量中，那么外部的代码无法访问到它，只有嵌套的函数可以修改它。而如果它是绑定到函数的，那么就很容易

  let sayHi = function func(who) {
    alert(`Hello, ${who}`);
  };
  sayHi("John"); // Hello, John
  //关于名字 func 有两个特殊的地方，这就是添加它的原因
  //它允许函数在内部引用自己。 它在函数外是不可见的。
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // 使用 func 再次调用函数自身
    }
  };
  sayHi(); // Hello, Guest
  // 但这不工作：
  func(); // Error, func is not defined（在函数外不可见）

  //
  let sum = new Function('a', 'b', 'return a + b');//允许我们将任意字符串变为函数
alert( sum(1, 2) ); // 3
//但是如果我们使用 new Function 创建一个函数，那么该函数的 [[Environment]] 并不指向当前的词法环境


function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
  setTimeout(() => alert('Hello'), 1000);

  let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // 定时器标识符
clearTimeout(timerId);

// 每 2 秒重复一次
let timerId = setInterval(() => alert('tick'), 2000);
// 5 秒之后停止
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

//周期性调度有两种方式
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);

//使用 setInterval 时，func 函数的实际调用间隔要比代码中设定的时间间隔要短 嵌套的 setTimeout 就能确保延时的固定（这里是 100 毫秒）。

//经过 5 重嵌套定时器之后，时间间隔被强制设定为至少 4 毫秒

function sayHi() {
    alert(this.name);
  }
  let user = { name: "John" };
  let admin = { name: "Admin" };
  // 使用 call 将不同的对象传递为 "this"
  sayHi.call( user ); // John
  sayHi.call( admin ); // Admin

  function say(phrase) {
    alert(this.name + ': ' + phrase);
  }
  let user = { name: "John" };
  // user 成为 this，"Hello" 成为第一个参数
  say.call( user, "Hello" ); // John: Hello

  let worker = {
    someMethod() {
      return 1;
    },
    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // 现在 "this" 被正确地传递了
      cache.set(x, result);
      return result;
    };
  }
  worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存
  alert( worker.slow(2) ); // 工作正常
  alert( worker.slow(2) ); // 工作正常，没有调用原始函数（使用的缓存）


  let worker = {
    slow(min, max) {
      alert(`Called with ${min},${max}`);
      return min + max;
    }
  };
  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      let result = func.call(this, ...arguments); // (**)
  
      cache.set(key, result);
      return result;
    };
  }
  function hash(args) {
    return args[0] + ',' + args[1];
  }
  worker.slow = cachingDecorator(worker.slow, hash);
  alert( worker.slow(3, 5) ); // works
  alert( "Again " + worker.slow(3, 5) ); // same (cached)


func.call(context, ...args); // 使用 spread 语法将数组作为列表传递
func.apply(context, args);   // 与使用 call 相同 这些调用可以相互补充。当我们期望可迭代对象时，使用 call，当我们期望类数组对象时，使用 apply
//对于即可迭代又是类数组的对象，例如一个真正的数组，从技术上讲我们使用 call 或 apply 都行，但是 apply 可能会更快

function hash() {
    alert( arguments.join() ); // Error: arguments.join is not a function arguments 对象既是可迭代对象又是类数组对象，但它并不是真正的数组
  }
  hash(1, 2);
  function hash() {
    alert( [].join.call(arguments) ); // 1,2 这个技巧被称为 方法借用（method borrowing）
  }
  hash(1, 2);


  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  let sayHi = user.sayHi.bind(user); // (*)
  // 可以在没有对象（译注：与对象分离）的情况下运行它
  sayHi(); // Hello, John!
  setTimeout(sayHi, 1000); // Hello, John!
  // 即使 user 的值在不到 1 秒内发生了改变
  // sayHi 还是会使用预先绑定（pre-bound）的值
  user = {
    sayHi() { alert("Another user in setTimeout!"); }
  };

  //如果一个对象有很多方法，并且我们都打算将它们都传递出去，那么我们可以在一个循环中完成所有方法的绑定
  for (let key in user) {
    if (typeof user[key] == 'function') {
      user[key] = user[key].bind(user);
    }
  }

  function mul(a, b) {
    return a * b;
  }
  let double = mul.bind(null, 2);
  alert( double(3) ); // = mul(2, 3) = 6
  alert( double(4) ); // = mul(2, 4) = 8
  alert( double(5) ); // = mul(2, 5) = 10


  function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
  }
  // 用法：
  let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };
  // 添加一个带有绑定时间的 partial 方法
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  user.sayNow("Hello");
  // 类似于这样的一些内容：
  // [10:00] John: Hello!

  //箭头函数没有 this。如果访问 this，则会从外部获取 不具有 this 自然也就意味着另一个限制：箭头函数不能用作构造器（constructor）。不能用 new 调用它们。
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => alert(this.title + ': ' + student)
      );
    }
  };
  group.showList();


  let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined 报错是因为 forEach 运行它里面的这个函数，但是这个函数的 this 为默认值 this=undefined
      alert(this.title + ': ' + student)
    });
  }
};
group.showList();

//bind(this) 创建了一个该函数的“绑定版本”。
//箭头函数 => 没有创建任何绑定。箭头函数只是没有 this。this 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。
//箭头函数没有 “arguments” 也是外部词法查找