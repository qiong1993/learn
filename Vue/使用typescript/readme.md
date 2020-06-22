vue项目中使用ts

tsconfig.json: typescript配置文件,主要用于指定待编译的文件和定义编译选项
shims-tsx.d.ts: 允许.tsx 结尾的文件，在 Vue 项目中编写 jsx 代码
shims-vue.d.ts: 主要用于 TypeScript 识别.vue 文件，Ts 默认并不支持导入 vue 文件

vue 中使用 typescript 非常好用的几个库：
    vue-class-component: vue-class-component是一个 Class Decorator,也就是类的装饰器
    vue-property-decorator: vue-property-decorator是基于 vue 组织里 vue-class-component 所做的拓展
import { Vue, Component, Inject, Provide, Prop, Model, Watch, Emit, Mixins } from 'vue-property-decorator'
    vuex-module-decorators: 用 typescript 写 vuex 很好用的一个库
import { Module, VuexModule, Mutation, Action, MutationAction, getModule } from 'vuex-module-decorators'

Prop 声明
    @Prop({ default: false }) private isCollapse!: boolean;
    @Prop({ default: true }) private isFirstLevel!: boolean;
    @Prop({ default: "" }) private basePath!: string;
        !: 表示一定存在，?: 表示可能不存在。这两种在语法上叫赋值断言
    @Prop(options: (PropOptions | Constructor[] | Constructor) = {})
        PropOptions，可以使用以下选项：type，default，required，validator
        Constructor[]，指定 prop 的可选类型
        Constructor，例如 String，Number，Boolean 等，指定 prop 的类型
