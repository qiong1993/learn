class Node {
    constructor(instance) {
        this.instance = instance;
        this.child = null;
        this.sibling = null;
        this.return = null;
    }
}

function link(parent, elements) {
    if (elements === null) elements = [];

    parent.child = elements.reduceRight((previous, current) => {
        const node = new Node(current);
        node.return = parent;
        node.sibling = previous;
        return node;
    }, null);

    return parent.child;
}

// const children = [{name: 'b1'}, {name: 'b2'}, {name: 'b3'}];
// const parent = new Node({name: 'a1'});
// const child = link(parent, children);

// console.log(child.instance.name);
// console.log(child.sibling.instance);
// console.log(child.sibling.sibling.instance);

function doWork(node) {
    console.log(node.instance.name);
    const children = node.instance.render();
    return link(node, children);
}
/**
 * 
 */
function walk(o) {
    let root = o;
    let current = o;

    while (true) {
        // 为节点执行工作，获取并连接它的children
        let child = doWork(current);

        // 如果child不为空, 将它设置为当前活跃节点
        if (child) {
            current = child;
            continue;
        }

        // 如果我们回到了根节点，退出函数
        if (current === root) {
            return;
        }

        // 遍历直到我们发现兄弟节点
        while (!current.sibling) {

            // 如果我们回到了根节点，退出函数
            if (!current.return || current.return === root) {
                return;
            }

            // 设置父节点为当前活跃节点
            current = current.return;
        }

        // 如果发现兄弟节点，设置兄弟节点为当前活跃节点
        current = current.sibling;
    }
}