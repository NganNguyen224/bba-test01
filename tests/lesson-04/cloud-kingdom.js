
const playerName = "Mario";
const currentLives = 3;
const coins = {
    level1: 25,
    level2: 30,
    level3: 45
};
/* Cách 1
const sumCoins = coins['level1'] + coins['level2'] + coins['level3'];
const averageCoins = sumCoins / 3;
const remainder = sumCoins % 3;
*/

// Cách 2
const coinValues = Object.values(coins);
const sumCoins = coinValues.reduce((total, coin) => total + coin, 0);
const averageCoins = sumCoins / coinValues.length;
const remainder = sumCoins % 3;
console.log(`Người chơi: ${playerName}`);
console.log(`Số mạng hiện tại: ${currentLives}`);
console.log(`Tổng số coins: ${sumCoins}`);
console.log(`Trung bình coin của 3 levels: ${averageCoins}`);
console.log(`Số coin dư khi chia cho 3: ${remainder}`);


