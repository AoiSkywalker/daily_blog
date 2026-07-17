---
categories:
  - daily_dsa
title: "Day 5: 3 Sum"
tags: 
  - sum
  - two pointer
---
# DAY 5: 3 SUM

Given an array `S` of `n` integers, are there elements `a`, `b`, `c` in `S` such that `a + b + c = 0` ?

Find all unique triplets in the array which gives the sum of zero.

Elements in the triplet `(a,b,c)` must be in non-descending order. (ie, `a ≤ b ≤ c`)

Input : Parameters and Boundaries
Output : Result

## Example

### Example 1

**Input:** `[1,2,3,4,5]`

**Output:** `[]`

### Example 2

**Input:** `[-1,0,1,2,-1,-2]`

**Output:** `[[-1,0,1], [-1,-1,2], [-2,0,2]]`

## Hint

Use the double pointer after converting to the sum of two numbers.

## Implementation

### C/C++

```cpp
--8<-- "docs/daily_dsa/day-05/day5.cpp"
```