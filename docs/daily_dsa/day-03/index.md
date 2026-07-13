---
categories:
  - daily_dsa
title: "Day 3: Two Sum - Input array is sorted"
tags:
  - sum
  - two pointer
---
# DAY 3: TWO SUM - INPUT ARRAY IS SORTED
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific number.

The function `twoSum` should return indices of the two numbers such that they add up to the target, where `index1` must be less than `index2`.

1. You may assume that each input would have exactly one solution.
2. Your returned answer (both `index1` and `index2`) are not zero-based.

Input : Array of integers, Target number
Output : Array of two indices of integers needed to find.

## Example

`numbers=[2,7,11,15]`

`target=9`

`result=[1,2]`

## Hint
The input data is already sorted -> Using a double pointer can greatly improve the traversal efficiency (left pointer, right pointer moving in different directions)

## Implementation

### C/C++

```cpp title="day3.cpp"
--8<-- "docs/daily_dsa/day-03/day3.cpp"
```