#! 242. Valid Anagram

# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example 1:
# Input: s = "anagram", t = "nagaram"
# Output: true

# Example 2:
# Input: s = "rat", t = "car"
# Output: false

# Constraints:
# 1 <= s.length, t.length <= 5 * 104
# s and t consist of lowercase English letters.

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Set edge case to check if s & t are same length,
        if len(s) != len(t):
            return False

        # Create empty hashmaps for each string (dictionaries)
        countS, countT = {},{}

        # Loop through the length of s, increment the count
        # of each charecter in the hashmap
        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i],0)
            countT[t[i]] = 1 + countT.get(t[i],0)
            # .get returns the current count of the charecter, or 0
            # if that charecter is not yet mapped. Add 1 to count.

        # Testing to see if the counts are same across hashmaps
        for c in countS:
            # Check if the count of character c in s is not equal
            # to the count of character c in t. If not, return False.
            if countS[c] != countT.get(c,0):
                return False

        # Return True if it passes all tests.
        return True
    
# Test Cases
solution = Solution()
# Example 1, expected output = true
print(solution.isAnagram("anagram","nagaram"))

# Example 2, expected output = false
print(solution.isAnagram("rat","car"))

# Example 3, expected output = false
print(solution.isAnagram("a","ab"))

# Example 4, expected output = true
print(solution.isAnagram("god","dog"))