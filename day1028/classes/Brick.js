
/* 벽돌 정의 */

class Brick extends GameObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY)

        this.div.style.border = "1px solid black";
        this.div.style.boxSizing = "border-box";
    }
}