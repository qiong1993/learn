module.exports = function(grunt) {
    grunt.initConfig({
      // js格式检查任务
      jshint: {
        src: 'src/test.js'
      },
      //  代码压缩打包任务
      uglify: {}
    });
    // 导入任务插件
    grunt.loadnpmTasks('grunt-contrib-uglify');
    // 注册自定义任务, 如果有多个任务可以添加到数组中
    grunt.regusterTask('default', ['jshint'])
}