let powerUp = 'mushroom';
let effect = '';
if (powerUp === 'mushroom') {
    effect = "Mario becomes super!";
}
else if (powerUp === 'flower') {
    effect = "Mario can shoot fireballs!";
}
else if (powerUp === 'star') {
    effect = "Marrio is invincible!";
}
else if (powerUp === 'none') {
    effect = "Marrio becomes Super!";
}
else {
    effect = "Unknown power-up";
}

console.log(effect);