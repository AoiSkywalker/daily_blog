---
categories:
  - project_euler
title: "Problem 0: Sum of Odd Squares"
tags: 
  - sum
---
# PROBLEM 0: SUM OF ODD SQUARES

A number is a perfect square, or a square number, if it is the square of a positive integer.
For example, $25$ is a square number because $5^2 = 25$; it is also an odd square.

The first 5 square numbers are: $1, 4, 9, 16, 25$, and the sum of the odd squares is $1 + 9 + 25 = 35$.

Among the first 599 thousand square numbers, what is the sum of all the odd squares?

## Solution

**Input:** Number of square numbers

**Output:**  Sum of odd square numbers

### Naive approach

**Method:** Iterative Summation

**Time:** $O(n)$

**Space:** $O(1)$

**Idea:** To iterate through first $n$ odd numbers, square each, and accumulate sum.

### Formula approach

**Time:** $O(1)$

**Space:** $O(1)$

**Idea:** To use the mathematical formula $\dfrac{n(4n^2-1)}{3}$. Instead of generating and squaring each odd number, we directly compute the result.

**Proof of formula:**

The aim is $S = \sum  _{i=1} ^n (2k - 1)^2$

Let's expand it:

\begin{align}
    S &= \sum  _{i=1} ^n (2k - 1)^2 \\
    &= \sum _{i=1} ^n (4k^2 - 4k + 1) \\
    &= 4 \sum _{i=1} ^n  k^2 - 4 \sum _{i=1} ^n k + \sum _{i=1} ^n 1 \\
\end{align}

Since we have know formulae

\begin{align}
    &\sum _{i=1} ^n  k^2 = \dfrac{n(n+1)(2n+1)}{6} \\
    &\sum _{i=1} ^n  k = \dfrac{n(n+1)}{2} \\
    &\sum _{i=1} ^n  1 = n 
\end{align}

Substituting these things

\begin{align}
    S &= 4 \sum _{i=1} ^n  k^2 - 4 \sum _{i=1} ^n k + \sum _{i=1} ^n 1 \\
    &= 4 \dfrac{n(n+1)(2n+1)}{6} - 4 \dfrac{n(n+1)}{2} + n \\ 
    &= \dfrac{n(4n^2-1)}{3}
\end{align}

### Result

$35820299833233500$

## Implementation

### C/C++

=== "Naive approach"
    ``` cpp
    --8<-- "docs/project_euler/problem-000/problem000-1.cpp"
    ```

=== "Formula approach"
    ``` cpp 
    --8<-- "docs/project_euler/problem-000/problem000-2.cpp"
    ```