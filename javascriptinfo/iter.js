let range = {
    from: 1,
    to: 5
  };
  
  // 1. for..of 调用首先会调用这个：
  range[Symbol.iterator] = function() {
  
    // ……它返回迭代器对象（iterator object）：
    // 2. 接下来，for..of 仅与此迭代器一起工作，要求它提供下一个值
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() 在 for..of 的每一轮循环迭代中被调用
      next() {
        // 4. 它将会返回 {done:.., value :...} 格式的对象
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // 现在它可以运行了！
  for (let num of range) {
    alert(num); // 1, 然后是 2, 3, 4, 5
  }



  let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    alert(num); // 1, 然后是 2, 3, 4, 5
  }

  for (let char of "test") {
    // 触发 4 次，每个字符一次
    alert( char ); // t, then e, then s, then t
  }

  let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳，然后是 😂
}

//显示调用
let str = "Hello";
// 和 for..of 做相同的事
// for (let char of str) alert(char);
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 一个接一个地输出字符
}


let arrayLike = { // 有索引和 length 属性 => 类数组对象
    0: "Hello",
    1: "World",
    length: 2
  };
  // Error (no Symbol.iterator)
  for (let item of arrayLike) {}


  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  let arr = Array.from(arrayLike); // (*) 真正数组
  alert(arr.pop()); // World（pop 方法有效）

// 假设 range 来自上文的例子中 如果是可迭代对象
let arr = Array.from(range); 
alert(arr); // 1,2,3,4,5 （数组的 toString 转化方法生效）

// 求每个数的平方
let arr = Array.from(range, num => num * num);
alert(arr); // 1,4,9,16,25