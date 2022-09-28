/**
 * Created by qinai on 11/14/16.
 * desc:任意节点的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
 任意节点的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
 任意节点的左、右子树也分别为二叉查找树；
 没有键值相等的节点。二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低。为O(log n)。

 树是有节点构成，由根节点逐渐延生到各个子节点，因此它具备基本的结构就是具备一个根节点，具备添加，查找和删除节点的方法.
 */

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let n = new Node(data, null, null);
    if (!this.root) {
      return (this.root = n);
    }
    let currentNode = this.root;
    let parent = null;
    while (1) {
      parent = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        if (currentNode === null) {
          parent.left = n;
          break;
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      //no children node
      if (node.left == null && node.right == null) {
        return null;
      }

      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
      let getSmallest = function (node) {
        if (node.left === null && node.right === null) {
          return node;
        }
        if (node.left != null) {
          return node.left;
        }
        if (node.right != null) {
          return getSmallest(node.right);
        }
      };
      let temNode = getSmallest(node.right);
      node.data = temNode.data;
      node.right = this.removeNode(temNode.right, temNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
  find(data) {
    var current = this.root;
    while (current != null) {
      if (data == current.data) {
        break;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current.data;
  }
}
module.exports = BinarySearchTree;
