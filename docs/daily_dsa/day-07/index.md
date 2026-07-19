---
categories:
  - daily_dsa
title: "Day 7: 4 Sum"
tags: 
  - sum
  - two pointer
---
# DAY 7: 4 SUM

Given an array `S` of `n` integers, are there elements `a`, `b`, `c`, `d` in `S` such that `a+b+c+d = target` ?

Find all unique quadruples in the array which gives the sum of target.

Elements in a quadruplet `(a,b,c,d,) must be in non-descending order (ie, `a ≤ b ≤ c ≤ d`)

The solution set must not contain duplicate quadruplets.

Input : An array `S`, Target number
Output : Array of satisfied solutions

## Example

### Example 1

**Input:** `[2,7,11,15], 3`

**Output:** `[]`

### Example 2

**Input:** `[1,0,-1,0,-2,2], 0`

**Output:** `[[-1,0,0,1],[-2,-1,1,2],[-2,0,0,2]]`

## Implementation

### C/C++

```cpp
--8<-- "docs/daily_dsa/day-07/day7.cpp"
```