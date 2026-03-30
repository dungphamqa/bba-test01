function findPairsDivisibleBy17() {
    let count = [];
    for (let i = 1; i <= 100; i++) {
        for (let j = i; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                count.push([i, j]);
            }
        }
    }
    return count;
}
const result = findPairsDivisibleBy17()
console.log(result);