开发的时候使用标准的模块化语法，而上线的时候又帮助我们编译、转换、合并成单个文件让浏览器运行

支持了AMD（defined--require）和 CommonJS （require--module.export），ES6模块规范（require--export）类型
通过loader 机制也可以使用ES6模块格式
强大的 code splitting

突破浏览器的鸿沟，将原本浏览器不能识别的规范和各种各样的静态文件进行分析，压缩，合并，打包，最后生成浏览器支持的代码