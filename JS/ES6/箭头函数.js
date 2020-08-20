const obj = {
    name:'inner obj',
    say:()=>{
        console.log(this.name)
    }
}

const say = obj.say

const obj1 = {
    name:'obj1',
    say
}

obj.say()
say()
obj1.say()

let name = 'global'

function a(){
    let name = 'function a'
    return () => {
        console.log(this.name)
    }
}

let b = {
    name:"object b",
    a
}

a()()
b.a()()