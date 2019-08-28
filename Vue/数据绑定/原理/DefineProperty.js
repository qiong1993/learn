//vue 中数据绑定主要通过数据劫持实现
let obj = {name: 'oldName'}
observer(obj)
obj.name = 'new Name'
console.log(obj.name)
function observer(obj){
    if(!obj || typeof obj !== 'object')return
    //Object.keys返回对象可遍历属性值  for ... in ... 除此之外还会遍历原型链上可遍历属性值
    Object.keys(obj).forEach(key => {
        let val = obj[key]
        Object.defineProperty(obj,key,{
            enumerable:true,//可枚举
            configurable:false,//不可使用defineProperty(..) 方法来修改属性描述符
            get:function(){
                console.log('get ',key,' value ',val)
                return val
            },
            set:function(newVal){
                if(newVal == val)return
                val = newVal
                console.log('set ',key,' oldValue ',val,' to ',newVal)
            }
        })
    })
}