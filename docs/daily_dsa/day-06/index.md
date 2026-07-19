---
categories:
  - daily_dsa
title: "Day 6: 3 Sum Closest"
tags: 
  - sum
  - two pointer
---
# DAY 6: 3 SUM CLOSEST

Given an array `S` of `n` integers, are there elements `a`, `b`, `c` in `S` such that the sum is closest to a given number, target. Return the sum of the three integers

Input : An array `S`, Target number
Output : Sum closest to Target number

## Example

### Example 1

**Input:** `[1,2,3,4,5], 10`

**Output:** `10`

### Example 2

**Input:** `[0,-2,1,-3], 2`

**Output:** `-1`

## Hint

Use the double pointer.

## Challenge

- Time: $O(n^2)$
- Space: $O(1)$

## Implementation

### C/C++

```cpp
--8<-- "docs/daily_dsa/day-06/day6.cpp"
```