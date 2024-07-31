# Learning Log

## July 2024

### Key Takeaways for July
- Hash maps are powerful tools for optimizing lookup operations, as demonstrated in the Two Sum problem.
- In-place array manipulation can significantly optimize space complexity.
- Always consider the trade-offs between time and space complexity when solving problems.
- Thoroughly understanding problem constraints is crucial for developing optimal solutions.
- Revisiting and optimizing previous solutions can lead to significant improvements in efficiency.
- Regular expressions are useful for string manipulation and cleaning in various programming languages.
- Palindrome checking can be implemented efficiently using string reversal or two-pointer technique.
- Implementing solutions in multiple languages reinforces understanding and highlights language-specific features.
- Single-pass algorithms can often provide efficient solutions to array manipulation problems.

### Entries

#### 2024-07-31 - [Second Maximum Number in an Array](./Java/Easy/2024-07-31-second-maximum-number.java)
- Implemented a solution to find the second maximum number in an array using Java.
- Used ArrayList for dynamic array manipulation in Java.
- Implemented a single-pass algorithm for efficiency, achieving O(n) time complexity.
- Learned about handling edge cases such as empty arrays and arrays with a single element.
- Explored the use of Java's ArrayList methods for array manipulation.

#### 2024-07-30 - [Second Maximum Number in an Array](./JavaScript/Easy/2024-07-30-second-maximum-number.js)
- Solved the Second Maximum Number problem in JavaScript.
- Implemented a single-pass algorithm to find the second maximum number efficiently.
- Practiced handling edge cases, such as arrays with fewer than two elements.
- Achieved O(n) time complexity and O(1) space complexity.

#### 2024-07-24 - [Merge Sorted Array](./TypeScript/Easy/2024-07-24-merge-sort-array.ts)
- Implemented the Merge Sorted Array problem in TypeScript.
- Used a simple approach of merging arrays and then sorting.
- Learned about TypeScript's array methods and sorting with a custom compare function.
- Recognized that while this solution works, it's not the most efficient in terms of time complexity.
- Future improvement: Implement a solution that merges the arrays in-place without using the built-in sort method.

#### 2024-07-24 - [Two Sum](./TypeScript/Easy/2024-07-24-two-sum.ts)
- Solved the Two Sum problem in TypeScript using a hash map approach.
- Utilized TypeScript's Map object for efficient lookups.
- Achieved O(n) time complexity by making only one pass through the array.
- Reinforced the importance of choosing the right data structure for optimal performance.

#### 2024-07-23 - [Valid Palindrome](./TypeScript/Easy/2024-07-23-valid-palindrome.ts)
- Implemented a solution for checking if a string is a valid palindrome in TypeScript.
- Used regular expressions to remove non-alphanumeric characters from the input string.
- Learned about TypeScript's string methods like toLowerCase(), split(), reverse(), and join().
- Explored the concept of palindrome checking using string manipulation.
- Considered the possibility of more space-efficient solutions that don't require creating a new reversed string.

#### 2024-07-10 - [Merge Sorted Array](./JavaScript/Easy/2024-07-10-merge-sorted-array.js)
- Reviewed in-place array manipulation to optimize space complexity.
- Initial solution had a time complexity of O(n^2) due to multiple passes through the array.
- Recognized the need for optimization to achieve O(m+n) time complexity.
- Understanding the problem constraints (sorted arrays, extra space at end of nums1) is crucial for finding an optimal solution.

#### 2024-07-10 - [Two Sum (Optimized)](./JavaScript/Easy/2024-07-10-two-sum-optimized.js)
- Discovered the effectiveness of using a hash map to optimize lookup operations.
- Reduced time complexity from O(n^2) to O(n) by using additional space (hash map).
- Understood the concept of complement in the context of the Two Sum problem.

#### 2024-07-08 - [Two Sum](./JavaScript/Easy/2024-07-08-two-sum.js)
- Initial approach used nested loops, resulting in O(n^2) time complexity.
- Learned about the trade-off between time and space complexity.