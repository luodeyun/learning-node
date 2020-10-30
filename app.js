/*
汇总的文件
*/ 
   let module1 = require('./commonjs/module1') //暴露的是对象
   let module2 = require('./commonjs/module2') //暴露的是方法 不过是export.haha=方法得到的是一个对象
   let module3 = require('./commonjs/module3') //暴露的是数组
//   如何使用一个模块取决于：模块暴露的方式
   console.log(module1);  //{ data: 'atguigu', test: [Function: test] }
   console.log(module2); //暴露的是一个对象 { haha: [Function] }
   console.log(module3); //{ peiqi: [ 1, 2, 2, 33 ] }
    