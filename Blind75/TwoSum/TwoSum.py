# 1. Two Sum
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# Example 2:
# Input: nums = [3,2,4], target = 6
# Output: [1,2]

# Example 3:
# Input: nums = [3,3], target = 6
# Output: [0,1]

# * My solution:
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Create a hashmap that we will be adding to and checking as we go
        # Key: Number, Value: Index
        seenNumbers = {}

        # Loop through the array (nums)
        for idx, number in enumerate(nums):
            # Calculate the difference between the target 
            # and the current number
            difference = target - number
            
            # If the difference already exists in the hashmap
            if difference in seenNumbers:
                # Return the indices of both numbers that
                # sum up to the target
                return [seenNumbers[difference], idx]
            
            # Otherwise, add the current number to the hashmap 
            # using the number as the key, index is the value of the number
            seenNumbers[number] = idx

# Test Cases
solution = Solution()

# Example 1, expected output = [0,1]
print(solution.twoSum([2,7,11,15], 9))

# Example 2, expected output = [1,2]
print(solution.twoSum([3,2,4], 6))

# Example 3, expected output = [0,1]
print(solution.twoSum([3,3], 6))

# Example 4, expected output = [0,7]
print(solution.twoSum([4,9,5,7,2,19,42,6], 10))

