/**
 *  Two Sum - BST Version - Solution 1
 */

class Solution {
    public:
        bool findTarget(TreeNode* root, int k) {
            if (!root) return false;
            unordered_set<int> s;
            return helper(root, k, s);
        }
        bool helper(TreeNode* node, int k, unordered_set<int> &s) {
            if (!node) return false;
            if (s.count(k - node->val)) return true;
            s.insert(node->val);
            return helper(node->left, k, s) || helper(node->right, k, s);
        }
}