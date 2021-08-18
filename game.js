var brickSide = 30;
var wall = [];
var weapon = new Weapon();
var ammunition = new Array();

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        let x = weapon.x + 10;
        let y = weapon.y + weapon.height / 2 - 15;
        ammunition.push(new Bullet(x, y, -5, 0, weapon.color));
        weapon.color = randomWeaponColor();
    }
})

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 38) {
        weapon.moveUp();
    }
    if (event.keyCode == 40) {
        weapon.moveDown();
    }
})

function update() {
    updateAmmunition();
    updateWall();
    for (let i = ammunition.length - 1; i > -1; i--) {
        handleBulletAndWall(ammunition[i]);
    }
}

function updateAmmunition () {
    for (let i = ammunition.length - 1; i > -1; i--) {
        ammunition[i].update();
    }
}

function draw() {
    weapon.draw();
    drawWall();
    drawAmmunition();
}

function drawAmmunition() {
    for (let i = ammunition.length - 1; i > -1; i--) {
        ammunition[i].draw();
    }
}

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

prescribeWall();
loop();
