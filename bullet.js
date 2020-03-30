class Bullet {
    constructor() {
        this.x;
        this.y;
        this.color;
        this.side = brickSide;
        this.speedX = 0;
        this.speedY = 0;
        this.isMovingLeft = false;
        this.isDroppingDown = false;
    }

    moveLeft() {
        this.getReady();
        this.speedX = -5;
        this.isMovingLeft = true;
    }

    stopMoveLeft() {
        this.speedX = 0;
    }

    dropDown() {
        this.speedY = 5;
        this.isDroppingDown = true;
    }

    stopDropDown() {
        this.speedY = 0;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        context.beginPath();
        // context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.rect(this.x, this.y, this.side, this.side);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    getReady() {
        this.x = weapon.x + 10;
        this.y = weapon.y + weapon.height / 2 - 15;
        this.color = weapon.color;
    }

}