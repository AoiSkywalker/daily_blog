---
categories:
  - daily_dsa
title: "Day 1: A + B Problem"
tags: 
  - sum
  - recursion
---
# DAY 1: A + B PROBLEM
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

## Implementation

### C/C++

```cpp title="day1.cpp"
--8<-- "docs/daily_dsa/day-01/day1.cpp"
```