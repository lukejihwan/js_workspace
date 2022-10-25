
/**
 * @note Rect라는 자료형을 정의한다
 */
class Rect{
    constructor(bg = "white", x = 0, y = 0, container, width=100, height=100){
        this.bg = bg; //클래스의 인스턴스에 보관
        this.x = x;
        this.y = y;
        this.div = document.createElement("div");
        this.container = container
        this.width = width
        this.height = height
        let divStyle =  this.div.style;



        divStyle.width = this.width + "px";
        divStyle.height = this.height + "px";
        divStyle.backgroundColor = this.bg;
        divStyle.position = "absolute";
        this.div.innerText = "x: " + this.x + "px\ny: " + this.y + "px";
        divStyle.left = this.x + "px";
        divStyle.top = this.y + "px";

        // 화면에 부착
        this.container.appendChild(this.div);
    }

    // x, y 값을 변경한다고 하여 시각적으로 자동으로 바뀌는 것은
    // 없다, 즉 사용자가 그래픽적으로 바뀐 모습을 보려면,
    // x, y를 반영할 실제 this.div의 값을 변경해주는 메소드가 필요하다
    render(){
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        //좌표 출력
        this.div.innerText = "x: " + this.x + "px\ny: " + this.y + "px";
        if(collisionDetecting(this, box2)){
            this.div.style.backgroundColor = "red";
        }else{
            this.div.style.backgroundColor = this.bg;
        }
    }

    //충돌여부판단
    // collisionDetecting(){
    //     if(this.y + this.height >= box2.y && this.x + this.width >= box2.x){
    //         this.div.style.backgroundColor = "red";
    //     }else{
    //         this.div.style.backgroundColor = this.bg;
    //     }
    // }
}