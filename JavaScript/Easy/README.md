# JavaScript / Easy LeetCode Solutions

This directory contains my solutions to JavaScript / Easy LeetCode problems.

## Problems Solved

| #  | Title | Solution | Date Completed | Notes |
|----|-------|----------|----------------|-------|
| 1  | [Two Sum](https://leetcode.com/problems/two-sum/) | [two-sum.js](./2024-07-08-two-sum.js) | 2024-07-08 | Used nested loops for O(n^2) solution |
| 1  | [Two Sum](https://leetcode.com/problems/two-sum/) | [two-sum-optimized.js](./2024-07-10-two-sum-optimized.js) | 2024-07-10 | Improved O(n) solution using hash map |
| 88 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array) | [merge-sorted-array.js](./2024-07-10-merge-sort-array.js) | 2024-07-10 | Initial solution with O(n^2) time complexity |
| N/A | Second Maximum Number in an Array | [second-maximum-number.js](./2024-07-30-second-maximum-number.js) | 2024-07-30 | Single-pass O(n) solution with comprehensive test cases |

## Statistics

- Total problems solved: 3
- Multiple solutions: 1
- Easy: 3
- Medium: 0
- Hard: 0

## Key Learnings

- Importance of considering time complexity in solutions
- Use of hash map for optimizing lookup operations
- Value of revisiting and improving previous solutions
- In-place array manipulation techniques
- Importance of edge case handling and comprehensive testing
- Single-pass algorithms for efficiency

## Goals

- Continue to practice optimizing solutions for better time and space complexity
- Implement at least one optimized solution per week for previous problems
- Work on improving the Merge Sorted Array solution to achieve O(m+n) time complexity

## Resources

- [JavaScript Map Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Big O Notation](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Notes

- 2024-07-10: In-place array manipulation is an important technique for optimizing space complexity. Current solution for Merge Sort Array problem, however, does not meet the follow-up challenge of O(m+n) time complexity. This presents an opportunity for future optimization.
- 2024-07-10: Revisiting the Two Sum problem with an optimized solution was a great exercise in improving algorithm efficiency. The hash map approach significantly reduced the time complexity from O(n^2) to O(n), demonstrating the importance of data structure choice in algorithm design.
- 2024-07-30: The Second Maximum Number problem solution demonstrates the value of single-pass algorithms for efficiency.