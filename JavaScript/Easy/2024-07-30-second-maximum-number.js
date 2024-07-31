// Problem: Find the Second Maximum Number in an Array
// 
// Given an array of numbers, the task is to find the second largest number
// in the array. This is a common interview question that tests understanding
// of array manipulation and basic algorithmic thinking.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findSecondMaximum = function(nums) {
    if (nums.length < 2) {
        return -1; // Or any other value to indicate invalid input
    }
    
    let max = Math.max(nums[0], nums[1]);
    let secMax = Math.min(nums[0], nums[1]);
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] >= max) {
            secMax = max;
            max = nums[i];
        } else if (nums[i] >= secMax && nums[i] < max) {
            secMax = nums[i];
        }
    };
    
    return secMax;
};

// Test cases
function runTests() {
    const testCases = [
        { input: [1, 2, 9, 4, 6, 7], expected: 7, description: "Original test case" },
        { input: [1, 1, 1, 1], expected: 1, description: "All elements are the same" },
        { input: [5, 5, 4, 2], expected: 4, description: "Duplicate maximum" },
        { input: [1], expected: -1, description: "Single element array" },
        { input: [], expected: -1, description: "Empty array" },
        { input: [10, 5, 9, 8, 7, 6], expected: 9, description: "Maximum at start" },
        { input: [1, 2, 3, 4, 5], expected: 4, description: "Sorted ascending" },
        { input: [5, 4, 3, 2, 1], expected: 4, description: "Sorted descending" },
        { input: [-1, -2, -3, -4], expected: -2, description: "Negative numbers" },
    ];

    testCases.forEach((testCase, index) => {
        const result = findSecondMaximum(testCase.input);
        console.log(`Test case ${index + 1} (${testCase.description}):`);
        console.log(`  Input: [${testCase.input}]`);
        console.log(`  Expected output: ${testCase.expected}`);
        console.log(`  Actual output: ${result}`);
        console.log(`  Result: ${result === testCase.expected ? 'PASS' : 'FAIL'}`);
        console.log('');
    });
}

runTests();