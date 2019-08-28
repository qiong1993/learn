//Object.keys返回对象可遍历属性值  for ... in ... 除此之外还会遍历原型链上可遍历属性值
(function(){
    Object.prototype.test = 'test'
    const obj = {name:'obj'}
    console.log(Object.keys(obj).join(','))
    for(let key in obj)console. log(key,',')
})()