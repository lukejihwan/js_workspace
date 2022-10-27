
/**
 * 게임에 등장할 모든 사물(오브젝트)의 최상위 객체를
 * 정의한다.
 * 
 * 이 객체를 상속받으면, 각 하위 클래스들이 중복된 코드를 작성할 필요가 없다
 */
class GameObject{
    /**
     * 
     * @param {Node} container 생성한 img 엘리먼트를 붙여줄 부모엘리먼트
     * @param {String} src 이미지 명
     * @param {Number} x left값
     * @param {Number} y top값
     * @param {Number} width 이미지 너비
     * @param {Number} height 이미지 높이
     * @param {Number} velX x축 가속도
     * @param {Number} velY y축 가속도
     */
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

        //스타일 적용
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        this.container.appendChild(this.img)
    }

    // 사물의 동작에 대한 표현은 메서드로 처리(함수)
    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}
