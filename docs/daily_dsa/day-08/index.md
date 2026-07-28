---
categories:
  - daily_dsa
title: "Day 8: Power of Two"
tags: 
  - power
  - bit manipulation
---
# DAY 8: POWER OF TWO

Given an integer, write a function to determine if it is a power of two.

Input : Integer number

Output : Boolean value

## Example

**Input:** `2`

**Output:** `true`

## Challenge

Using bit manipulation for $O(1)$ Time and $O(1)$ Space.

## Explanation

We notice $(2^n - 1)$ always be $11111...$

So, $(2^n) \land (2^n - 1)$ always be 0

## Implementation

### C/C++

```cpp
--8<-- "docs/daily_dsa/day-08/day8.cpp"
```