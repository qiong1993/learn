/**
 * 全排列为一个数组所有可能的排列 比如1,2,3   
 * 结果为 1,2,3 1,3,2 2,1,3 2,3,1 3,1,2 3,2,1
 * 都可以拆分为 集合U 有n个元素 其全排列为Perm(U) u为元素
 * n=1 Perm(U)=u
 * n>1 Perm(U)=u1Perm(U1) + ... + unPerm(Un) 
 * 
 * @param {*} arr 待排序的数组 
 * @param {*} start 排序开始下标 
 * @param {*} end 排序结束下标
 */
function perm(arr,start,end){
    //只剩一位需要排序
    if(start == end){
        console.log(arr)
        return
    }else{
        for(let i=start;i<=end;i++){
            let temp = arr[start]
            //交换当前位置到第一位
            arr[start] = arr[i]
            arr[i] = temp
            perm(arr,start+1,end)
            //交换回来
            arr[i] = arr[start]
            arr[start] = temp
        }
    }
}

perm([1,2,3],0,2)


/**
 * next_permutation
 * 字典序算法用来解决这样一个问题：给定其中一种排列，求基于字典序的下一种排列
 * 函数将按字母表顺序生成给定序列的下一个较大的序列，直到整个序列为减序为止
 * 取得[first,last)所标示之序列的下一个排列组合，如果没有下一个排列组合，便返回false;否则返回true
 * 步骤
 * 1 从右往左找到第一个 左邻小于右邻的字符，记左邻位置为 a
 * 2 从右往左找到第一个大于arr[a]的位置 记为b
 * 3 交换a,b
 * 4 将a后面的数从小到大排列
 * 
 * 
 * 第1步中，如果找不到左邻小于右邻的数，则说明给定的排列已经是全排列的最后一个排列了，则直接返回全排列的第一个排列，即所有排列中最小的排列，形成一个循环。
 * 在第3步交换前，a 后面的数是按照从大到小进行排列（否则第1步中就可以找到左邻小于右邻的数了）。
 * 在交换之后，a 后面的数仍然是按照从大到小排列的，尽管 b 位置的值变成了 list[a]，但是由于 b 位置是第一个比 list[a] 大的，因此交换之后 list[a] 仍然比左邻小，比右邻大。
 * 既然 a 后面的数是从大到小排列的，那么第4步的排序，直接将 a 后面的数倒序即可。
 */
function nextPermutation(arr){
    const length = arr.length
    let a
    for(let i= length-1;i>0;i--){
        const nowVal = arr[i]
        if(a != undefined){break}
        for(let j=i-1;j>-1;j--){
            if(nowVal>arr[j]){
                a = j
                break
            }
        }
    }
    if(a == undefined) return
    for(let i= length-1;i>a;i--){
        if(arr[i]>arr[a]){
            let temp= arr[i]
            arr[i] = arr[a]
            arr[a] = temp
            break
        }
    }
    for(let left=a+1,right=length-1;left<right;left++,right--){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }
    return arr
}

console.log(nextPermutation([1,2,3])) 


/**
 * 火车进站
 */

const result = []
function handle(origin, inc, afterc) {
    console.log('1111',origin, inc, afterc)
    // 当待进站火车和已进站火车数量为0时 => 都出站了
    if (!origin.length && !inc.length) {
        // 出站序列加入结果集
        result.push(afterc.join(' '));
    } else {
        // 如果站里有车
        if (inc.length) {
            // 出去一辆
            afterc.push(inc.pop());
            console.log('inc1111',origin, inc, afterc)
            handle(origin, inc, afterc);
            inc.push(afterc.pop());
            console.log('inc222',origin, inc, afterc)
        }
        // 如果还有车要进站
        if (origin.length) {
            // 进来一辆
            inc.push(origin.shift());
            console.log('origin1111',origin, inc, afterc)
            handle(origin, inc,afterc);
            origin.unshift(inc.pop());
            console.log('origin2222',origin, inc, afterc)
        }
    }
}
handle([1,2,3],[],[]);
console.log(result)