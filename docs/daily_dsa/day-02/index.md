---
categories:
  - daily_dsa
title: "Day 2: Two Sum"
tags: 
  - sum
  - hash
---
# DAY 2: TWO SUM
Given an array of integers, find two numbers such that they add up to a specific target number. You may assume that each input would have exactly one solution, and you may not use the same element twice.

Input : Array of integers, Target number
Output : Array of two indices of integers needed to find.

## Example

`numbers=[1,2,3,4,5]`

`target=6`

`result=[1,3]`

## Hint
The hash lookup takes O(1) time, so maybe you should consider using a hash table.

## Explanation

In the array `numbers`, we should find `x` that `x = target - numbers[i]`

First, we iterates all the array. At each `numbers[i]`, we push a key-value `x : index of numbers[i]`. When finding the satisfied `numbers[i]` in `m`, we can return their indices.

## Implementation

### C/C++

```cpp title="day2.cpp"
--8<-- "docs/daily_dsa/day-02/day2.cpp"
```