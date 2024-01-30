# The Best Way To Solve DP Problems

_Jan 17, 2024_

![cute image DP :)](https://i.ytimg.com/vi/aPQY__2H3tE/maxresdefault.jpg)

Dynamic Programming (DP) can be confusing for many programmers. The dilemma of choosing between easy-to-write recursive code or faster-executing iterative code often leaves students scratching their heads. Will recursive code always work, or might it lead to TLE/MLE errors? Can every DP problem be cracked using recursion?


## The Challenge:
The real challenge lies in the variety of methods to solve a single DP problem. Some opt for recursive code, others for iteration. Recursion styles vary—some involve helper functions, while others find them confusing. Online educators have their own preferences, adding to the complexity. This lack of a universal method contributes to the confusion.  

In this post, I'll share a simple set of steps that can guide you in solving any DP problem. The key is to focus on the idea behind the solution, not the specific approach (recursion/iteration).


## The Method:
Our goal is to develop an intuition for solving any DP problem. To achieve this, let's understand the four key terms:

- State: Identifying the subproblem.
- Transition: Defining how to solve the subproblem.
- Answer: Determining the final solution.
- Base case: Identifying the smallest subproblem.

## State:


## Transition:


## Answer:


## Base Case:


## Applying the Method - Examples:

**[509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)**  
_The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1._  
_That is,_
_F(0) = 0, F(1) = 1_  
_F(n) = F(n - 1) + F(n - 2), for n > 1._  
_Given n, calculate F(n)._  

This is a classic DP problem. Let's solve it using our method.  
**state:** dp[i] = F(i);  
**transition:** dp[i] = dp[i-1] + dp[i-2];  
**answer:** dp[n];  
**base case:** dp[0] = 0, dp[1] = 1;  

Let's now implement the solution using the calculated terms above:
![dksn](/raw_data/Projects/blog%20project/BlogContent/images/blog-post2-fibo.jpg)  


**[70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)**  
*You are climbing a staircase. It takes n steps to reach the top.*
*Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?*   

![dksn](/raw_data/Projects/blog%20project/BlogContent/images/blog-post2-stairs.jpg)


**[300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)**  
*Given an integer array nums, return the length of the longest strictly increasing subsequence.*  

![dksn](/raw_data/Projects/blog%20project/BlogContent/images/blog-post2-lis.jpg)


**[322. Coin Change](https://leetcode.com/problems/coin-change/)**  
*You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.*  
*Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.*  
*You may assume that you have an infinite number of each kind of coin.*  

![dksn](/raw_data/Projects/blog%20project/BlogContent/images/blog-post2-coin.jpg)



## Resources For Mastery:
To gain a more detailed understanding and effectively solve problems, explore the following resources to achieve mastery in this topic:
- **[Priyansh Aggarwal DP Bootcamp At IITGN](https://www.youtube.com/playlist?list=PLAj_13N2fk-RA6wvOUmWOyUeL9zmWFJoI):**  Gain clarity on what 'state,' 'transition,' 'answer,' and 'base case' mean.

- **[Dynamic Programming Series](https://www.youtube.com/playlist?list=PLcXpkI9A-RZI-xF76L0sZq_u-k_yHz8pd):** Follow this playlist seriously to master DP. Solve every problem and note down (state, transition, answer, base case) for each.

- **[Further Practice](https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY):** Once you finish the above playlists, explore other good DP playlists (like Striver) for some problem practice. Ensure you apply the new method you've learned.

Thank you for taking the time to read my blog. I am passionate about software engineering and eagerly look forward to embracing new challenges. I appreciate any feedback you may have for this post.