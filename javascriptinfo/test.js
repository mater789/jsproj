describe("test", function() {

    //我们可以设置 before/after 函数来在运行测试之前/之后执行。也可以使用 beforeEach/afterEach 函数来设置在执行 每一个 it 之前/之后执行。
    before(() => alert("Testing started – before all tests"));
    after(() => alert("Testing finished – after all tests"));
  
    beforeEach(() => alert("Before a test – enter a test"));
    afterEach(() => alert("After a test – exit a test"));
  
    it('test 1', () => alert(1));
    it('test 2', () => alert(2));
  
  });