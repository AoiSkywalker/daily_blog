---
title: Daily DSA
---
# DIARY OF LEARNING DATA STRUCTURES AND ALGORITHMS

This page is the start point to navigate some fields in DSA.

## Data Structures and Algorithms
Data Structures and Algorithms (abbreviation as DSA) has some following sections:

1. Sorting
2. Searching
3. Hashing
4. Graph
5. Combinatorics

# ADVANCED C++ DATA STRUTURES & ALGORITHMS

This aims to practice for ICPC. There are 12 sections:

1. DSA Practice
2. Graph Algorithm
3. String Algorithm
4. Arithmetic Algorithm
5. Optimization & Heuristic
6. Special DSA
7. ICPC Practice
8. Geometric Algorithm
9. State Dynamic Programming
10. Range Algorithm
11. Special Advanced Graph
12. Capstone 

## Section 1: DSA Practice

### Segment Tree

#### Introduction

Segment Tree is a good data structure to query in array and update elements efficiently. This section will focus on RMQ problem (Range Minimum Query) - finding minimum of a segment of an array with updating its elements.

**Segment Tree** is a *Full Binary Tree*, each node stores a segment of array. The tree is built recursively by dividing the array into segments until each segment represents a single element. Root node is the entire array, each node represents of left/right segment of its parent.

Example: 

<div align="center" markdown="1">
``` mermaid
graph TD
    %% Definition
    n41["41"]
    n10_left["10"]
    n10_right["10"]
    n31["31"]
    n5_1["5"]
    n5_2["5"]
    n19["19"]
    n12["12"]
    n1["1"]
    n4["4"]
    n9["9"]

    %% Edge label
    n41 ---|"arr[0:5]"| n10_left
    n41 ---|"arr[3:5]"| n31

    n10_left ---|"arr[0:1]"| n5_1
    n10_left ---|"arr[2:2]"| n5_2

    n31 ---|"arr[3:4]"| n19
    n31 ---|"arr[5:5]"| n12

    n5_1 ---|"arr[0:0]"| n1
    n5_1 ---|"arr[1:1]"| n4

    n19 ---|"arr[3:3]"| n9
    n19 ---|"arr[4:4]"| n10_right
```
</div>

#### Segment Tree Structure

```cpp
    struct SegmentTree {
        vector<int> tree;
        int size;

        SegmentTree(int size) {
            this.size = size;
            tree.resize(4*size);
        }
    }
```

#### Why it matters

1. Range Minium Query: $O(\log n)$
2. Element Update: $O(\log n)$
3. Flexibility: able to extend sum, product, GCD...

#### Segment Tree Initialization

```cpp
    class RMQSegmentTree {
        private:
            vector<int> tree;
            vector<int> array;
            int n;

            void build(int node, int start, int end) {
                if (start == end) {
                    // leaf node : store element
                    tree[node] = arr[start];
                } else {
                    int mid = (start + end) / 2;
                    build(2 * node, start, mid);        // build left 
                    build(2 * node + 1, mid + 1, end);  // build right
                    // parent store min of 2 children
                    tree[node] = min(tree[2 * node], tree[2 * node + 1]);
                }
            }
        public:
            RMQSegmentTree(vector<int>& input) {
                arr = input;
                n = arr.size();
                tree.resize(4 * n);
                build(1, 0, n-1);
            }
    };
```

### Fenwick Tree

### Optimized DP

### Tree DP

### Fenwick Tree DP

### Fenwick Tree 2D Query

### Series of Query