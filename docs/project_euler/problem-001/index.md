---
categories:
    - project_euler
title: "Problem 1: Multiples of 3 or 5"
tags:
    - sum
---
# PROBLEM 1: MULTIPLES OF 3 OR 5

If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.

Find the sum of all the multiples of $3$ or $5$ below $1000$.

## Solution

**Input:** Upper-bound number

**Output:** Sum of multiples of 3 or 5

### Formula approach

**Time:** $O(1)$

**Space:** $O(1)$

**Proof of formula**

Count all the numbers divisible by $3$: $n_3 = \lfloor \dfrac{n}{3} \rfloor$

Count all the numbers divisible by $5$: $n_5 = \lfloor \dfrac{n}{5} \rfloor$

Count all the numbers divisible by $15$: $n_{15} = \lfloor \dfrac{n}{15} \rfloor$

Since $\gcd(3,5) = 1$ and $lcm(3,5) = 15$, this means every number divisible by $15$ are counted twice.

The expected sum is as below:

\begin{align}
    S = \sum _{i=1} ^ {n_3} 3k + \sum _{i=1} ^ {n_5} 5k - \sum _{i=1} ^ {n_{15}} 15k \\
\end{align}

Remember the identity $\sum _{i=1} ^n k = \dfrac{n(n+1)}{2}$

Therefore

\begin{align}
    S &= \sum _{i=1} ^ {n_3} 3k + \sum _{i=1} ^ {n_5} 5k - \sum _{i=1} ^ {n_{15}} 15k \\
    &= 3\dfrac{n_3(n_3+1)}{2} + 5\dfrac{n_5(n_5+1)}{2} - 15\dfrac{n_{15}(n_{15}+1)}{2} \\
    &= 3\dfrac{\lfloor \dfrac{n}{3} \rfloor(\lfloor \dfrac{n}{3} \rfloor+1)}{2} + 5\dfrac{\lfloor \dfrac{n}{5} \rfloor(\lfloor \dfrac{n}{5} \rfloor+1)}{2} - 15\dfrac{\lfloor \dfrac{n}{15} \rfloor(\lfloor \dfrac{n}{15} \rfloor+1)}{2}
\end{align}

### Result

$233168$

## Implementation

### C/C++

``` cpp 
--8<-- "docs/project_euler/problem-001/problem001.cpp"
```