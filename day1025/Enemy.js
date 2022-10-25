
class Enemy{
    constructor(contrainer, x, y, width,height, velX, velY, src){
        this.contrainer = contrainer;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.src = src;

        this.img = document.createElement("img")
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";
        this.img.style.position = "absolute"
        this.img.style.left = this.x + "px"
        this.img.style.top = this.y + "px"
        this.img.src = this.src;


        contrainer.appendChild(this.img)
    }

    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){
        this.img.style.left = this.x + "px"
        this.img.style.top = this.y + "px"
    }
}