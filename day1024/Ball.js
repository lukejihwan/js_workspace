/**
 * @note 현실의 사물중 공을 정의해본다.
 */
class Ball{
    /**
     * 
     * @param {Number} width 공의 너비
     * @param {number} height 공의 높이
     * @param {String} color 공의 색상
     * @param {Number} x 공의 x좌표
     * @param {Number} y 공의 y좌표
     * @param {Number} velX 공의 x 가속도
     * @param {Number} velY 공의 y 가속도
     */
    constructor(width, height, color, x, y, velX=2, velY=2){
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.velX = velX; //x축으로의 공의 속도를 결정하는 함수
        this.velY = velY; // y축으로의 공의 속도를 결정하는 함수
        this.flag = true;
        

        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundColor = this.color;
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.borderRadius = 50 + "%";
        wrapper.appendChild(this.div);
        this.move();
    }

    move(){




        this.x += this.velX;
        this.div.style.left = this.x + "px";
        this.y += this.velY;
        this.div.style.top = this.y + "px";

        // 하단의 경계를 넘어서면  y의 부호 변경
        if(parseInt(this.y)>=700-this.height) this.velY *= -1;
        else if(parseInt(this.y)<=0) this.velY *= -1;
        else if(parseInt(this.x)>=700-this.width) this.velX *= -1;
        else if(parseInt(this.x)<=0) this.velX *= -1;

        if(this.flag){
            setTimeout(()=>{this.move()}, 10);
        }
    }
    // getMSG(){
    //     console.log("나 불렀어?");
    // }
}
