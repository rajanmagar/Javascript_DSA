// Write a function which takes in a Binary Search Tree (BST) and a positive integer k, and which returns the kth largest integer contained in the BST.

// For this problem, assume that there will only be integers values in the BST, and that k is less than or equal to the number of nodes in the tree.

// Also, for the purpose of this problem, treat duplicate integers as distinct values. In other words, the second largest value in a BST containing the values {5, 7, 7} will be 7, not 5.

// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property:
// its value is strictly greater than the values of every node to its left, its value is less than or equal to the values of every node to its right,
// an dits children nodes are either valid BST nodes themselves, or None/null.

// Sample Input:
// tree =       15
//             /  \
//            5   20
//           / \  /  \
//          2   5 17  22
//         / \
//        1   3

// k = 3

// Sample Output:
// 17, third largest value after 22 and 20.

// Solution 1:

// recursive solution using in-order traversal to sort all nodes, then return the value k units from the end

// O(n) time due to finding and pushing n node values
// O(n) space due to storing n values in array

// base BST class
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findKthLargestValueInBST(tree, k) {
    // set up holder array for node values
    let sortedNodeValues = [];
    // call inOrderTraverse helper function, passing in tree and array to hold values
    inOrderTraverse(tree, sortedNodeValues);
    // return the value in sortedNodeValues k units from the end of the array
    return sortedNodeValues[sortedNodeValues.length - k];
}

function inOrderTraverse(node, sortedNodeValues) {
    // base case for leaf nodes
    if (node === null) {
        return;
    }
    // recursively call inorderTraverse on left, push values in to array, then do the same on right
    inOrderTraverse(node.left, sortedNodeValues);
    sortedNodeValues.push(node.value);
    inOrderTraverse(node.right, sortedNodeValues);
}