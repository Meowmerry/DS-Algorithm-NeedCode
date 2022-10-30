/*
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 * 
*/

function containsDuplicate(nums) {
    for(let right = 0 ; right < nums.length ; right +=1){
        for(let left = 0 ; left < right ; left +=1){
            const isDuplicate = nums[left] === nums[right];
            if(isDuplicate) return true;
        }
    }
    return false;
}

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * log(N)) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {

}
const hasDuplicate = nums =>{
    
}

/**
 * Hash Set
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {}

/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * Use Hash Set will take space but will save more memory of Time complexity
 * Hash Set will allow to insert element into BigO(1) Time but also gonna allow to check 
 * Does't the value exist in hashMap? and will add to hashMap, if so return true
 * if not add to hashMap
 * if no any in return false
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {}
