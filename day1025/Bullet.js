
// 총알을 정의한다
class Bullet{
    constructor(container, x, y, width, height, velX, velY, src){
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.src = src; //총알의 이미지를 결정짓는 변수

        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.left = this.x + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";
        
        container.appendChild(this.img);//화면에 부착
        
    }

    //총알의 위치속성 변경
    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    // 총알의 그래픽처리
    render(){
        this.img.style.top = this.y + "px";
        this.img.style.left = this.x + "px";
    }

}