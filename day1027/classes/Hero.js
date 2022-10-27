// 주인공을 정의한다

class Hero extends GameObject{
    // 상속관계에서 부모가 생성자에 매개변수를 정의할 경우
    // 자식 클래서에서는 반드시 부모의 생성자호출
    // 시 매개변수에 맞는 호출을 해야한다..
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);
        console.log(x)
    }
}