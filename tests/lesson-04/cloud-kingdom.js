let playerName = "Marrio";
let currentLives = 3;
const coins = [25, 30, 45];

// tổng
let sum = 0
for (let i = 0; i < coins.length; i++) {
    sum = sum + coins[i];
}

// giá tri trung bình
let average = sum % coins.length;
console.log("số coins dư:", average);