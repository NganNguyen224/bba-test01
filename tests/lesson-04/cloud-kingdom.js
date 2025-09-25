// Cách 1: dùng if...else...if
let powerUp = "mushroom";
let effect = "";
if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    effect = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
    effect = "Mario is invincible!";
} else if (powerUp === "none") {
    effect = "Mario is normal";
} else {
    effect = "Unknown power-up";
}
console.log(effect);

// Cách 2: Ternary operator (toán tử điều kiện):
/*
let powerUp = "flower"
let effect = powerUp === "mushroom" ? "Mario becomes Super!" :
    powerUp === "flower" ? "Mario can shoot fireballs!" :
        powerUp === "star" ? "Mario is invincible!" :
            powerUp === "none" ? "Mario is normal" : "Unknown powerup";
console.log(effect);
*/

// Cách 3: dùng switch...case
/*
let powerUp = "star";
let effect = "";

switch (powerUp) {
    case "mushroom":
        effect = "Mario becomes Super!";
        break;
    case "flower":
        effect = "Mario can shoot fireballs!";
        break;
    case "star":
        effect = "Mario is invincible!";
        break;
    case "none":
        effect = "Mario is normal";
        break;
    default:
        effect = "Unknown power-up";
        break;
}
console.log(effect);
*/

// Cách 4: Áp dụng khai báo mảng Object và toán tử OR ||
/*
let powerUp = "none";

const effects = {
    mushroom: "Mario becomes Super!",
    flower: "Mario can shoot fireballs!",
    star: "Mario is invincible!",
    none: "Mario is normal"
};

let effect = effects[powerUp] || "Unknown power-up"; 
//Nếu powerUp không nằm trong danh sách effects thì trả về giá trị mặc định.
console.log(effect);
*/
