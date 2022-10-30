/*
Challenge:
You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/

const coinsum = (arr, amount) => {
        const func = (arr, amount, cache = {}) => {
        if (amount in cache) return cache[amount]
        if (amount < 0) return Infinity;
        if (amount === 0) return 0;
        let smallest = Infinity;
        for (let el of arr) {
            const count = 1 + func(arr, amount - el, cache);
            if (count < smallest) smallest = count;
        }
        cache[amount] = smallest;
        return cache[amount]
    }
    return func(arr, amount) === Infinity ? -1 : func(arr, amount)
}
const coins = [1, 2, 5], amount = 11
console.log(coinsum(coins, amount)) // 3
const coins1 = [2], amount1 = 3
console.log(coinsum(coins1, amount1)) // -1


