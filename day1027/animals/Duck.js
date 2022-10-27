
// 오리를 생성한다
class Duck extends Bird{
    constructor(){
        super(20);
        console.log("오리가 태어남");
        this.x = 6;
    }
}