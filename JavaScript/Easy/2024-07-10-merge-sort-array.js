/**
 * 88. Merge Sorted Array
 * 
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
 * representing the number of elements in nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * 
 * Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * 
 * Constraints:
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -109 <= nums1[i], nums2[j] <= 109
 * 
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i=0; i < n; i++){
        nums1[i + m] = nums2[i];
    }

    for(let j=0; j < nums1.length; j++) {
        if(nums1[j] > nums1[j+1]){
            let temp = nums1[j];
            nums1[j] = nums1[j+1];
            nums1[j+1] = temp;
        }
    }
};

// Test cases
let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Expected: [1,2,2,3,5,6]

nums1 = [1];
m = 1;
nums2 = [];
n = 0;
merge(nums1, m, nums2, n);
console.log(nums1); // Expected: [1]

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1); // Expected: [1]
