开发的时候使用标准的模块化语法，而上线的时候又帮助我们编译、转换、合并成单个文件让浏览器运行

支持了AMD（defined--require）和 CommonJS （require--module.export），ES6模块规范（require--export）类型
通过loader 机制也可以使用ES6模块格式
强大的 code splitting

突破浏览器的鸿沟，将原本浏览器不能识别的规范和各种各样的静态文件进行分析，压缩，合并，打包，最后生成浏览器支持的代码

devtool

eval： 生成代码 每个模块都被eval执行，并且存在@sourceURL

cheap-eval-source-map： 转换代码（行内） 每个模块被eval执行，并且sourcemap作为eval的一个dataurl

cheap-module-eval-source-map： 原始代码（只有行内） 同样道理，但是更高的质量和更低的性能

eval-source-map： 原始代码 同样道理，但是最高的质量和最低的性能

cheap-source-map： 转换代码（行内） 生成的sourcemap没有列映射，从loaders生成的sourcemap没有被使用

cheap-module-source-map： 原始代码（只有行内） 与上面一样除了每行特点的从loader中进行映射

source-map： 原始代码 最好的sourcemap质量有完整的结果，但是会很慢



eval： 使用eval包裹模块代码

source-map： 产生.map文件

cheap： 不包含列信息（关于列信息的解释下面会有详细介绍)也不包含loader的sourcemap

module： 包含loader的sourcemap（比如jsx to js ，babel的sourcemap）

inline： 将.map作为DataURI嵌入，不单独生成.map文件（这个配置项比较少见）