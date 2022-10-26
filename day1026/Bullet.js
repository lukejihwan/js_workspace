
class Bullet{
    constructor(container, src, x, y, width, height, velX, velY){
        this.container = container;
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.img = document.createElement("img");
        this.img.src = this.src;

        // 스타일 지정
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        // 부착
        container.appendChild(this.img);
    }

    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.removeWithEnemy()
        this.removeFromScreen()
        
    }

    removeWithEnemy(){
        // 현재 존재하는 적군의 수만큼 반복하면서 닿았는지 파악하자
        for(let i = 0;i<enemyArray.length;i++){
            if(collisionDetecting(this, enemyArray[i])){ //충돌했다면
                // 1)화면에서 제거
                this.container.removeChild(this.img);
                this.container.removeChild(enemyArray[i].img);
                
                // 2) 배열에서 제거
                let index = bulletArray.indexOf(this);
                bulletArray.splice(index, 1);
                index = enemyArray.indexOf(enemyArray[i])
                enemyArray.splice(index, 1);
            }
        }
    }

    // 총알인 내가 스크린을 넘어서면, 자살하자
    removeFromScreen(){
        if(this.x>=screen.width){
            // 1) 화면에서 제거
            this.container.removeChild(this.img)
            // 2) 배열에서 제거
            let index = bulletArray.indexOf(this);
            bulletArray.splice(index, 1);
        }
        }
}
