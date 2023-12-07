from typing import List

# 217. Contains Duplicate
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
# Example 1:

# Input: nums = [1,2,3,1]
# Output: true
# Example 2:

# Input: nums = [1,2,3,4]
# Output: false
# Example 3:

# Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # Creating a new set to add to 
        hashset = set()

        # Looping through nums in nums 
        for number in nums:
            # If number is already in hashset
            if number in hashset: 
                return True
            # Otherwise,
            hashset.add(number)
        # When loop ends and no duplicates found, 
        return False
    
# Test Cases
solution = Solution()
# Example 1, expected output = true
print(solution.containsDuplicate([1,2,3,1]))
# Example 2, expected output = false
print(solution.containsDuplicate([1,2,3,4]))
# Example 3, expected output = true
print(solution.containsDuplicate([1,1,1,3,3,4,3,2,4,2]))