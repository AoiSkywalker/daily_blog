# A + B Problem
The sum of a and b, using bitwise operators.

Input : Integer a, b. 0 ≤ a, b ≤ 100
Output: Sum of a and b

## Hint
Using recursion

`a + b = a ^ b + (a & b) << 1`

## Explanation

The addition can be splitted into 2 parts: Sum without carry and Carry bits.

Sum without carry can be performed as XOR operator `a ^ b`.

Carry bits can be calculated by AND operator `a & b`. To move to correct position, the result should be shifted to the left `<< 1`.
