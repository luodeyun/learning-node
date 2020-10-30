console.log(1);
console.log(arguments.callee.toString());
/*

function (exports, require, module, __filename, __dirname) {
console.log(1);
console.log(arguments.callee.toString());}

exprots:用于支持CommonJs模块化规范的暴露语法
require：用于支持CommonJS模块化规范的引入语法
module：用于支持CommonJs模块化规范的暴露语法
__filename： 当前运行文件的绝对路径
__dirname:  当前运行文件所在文件夹的绝对路径
控制台输出 c:\Users\Tedu\Desktop\day21\commmonJS\01day1\Node中函数的特点\node_function.js
————dirname：控制台输出c:\Users\Tedu\Desktop\day21\commmonJS\01day1\Node中函数的特点

*/ 

console.log(__filename);
console.log(__dirname);

