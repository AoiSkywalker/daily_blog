/**
 *  A + B Problem
 */

class Solution {
    public:
        int sum(int a, int b) {
            if (a == 0) return b;
            if (b == 0) return a;
            int s = a ^ b;
            int c = (a & b) << 1;
            return sum(s, c);
        }
};