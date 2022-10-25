/**
 * 최대값을 정수로 입력받아 0부터 최대값 사이의 랜덤한 값을 반환하는 함수
 * @param {number} max  랜덤으로 나올 수 있는 최대값
 * @returns 정수형태의 랜덤출력값
 */
function getRandom(max){
    return parseInt(Math.random() * max) ; //0~n 사이의 정수 출력
}       

//범위가 있는 랜덤값
// min: 시작값
//max: 끝값
/**
 * 최소값과 최대값을을 정수로 입력받아 최소값부터 최대값 사이의 랜덤한 값을
 * 반환하는 함수
 * @param {number}  min 랜덤으로 나올 수 있는 최소값
 * @param {number} max  랜덤으로 나올 수 있는 최대값
 * @returns 정수형태의 랜덤출력값
 */
function getRandomWithRange(min, max){
    return parseInt(Math.random() * (max-min)) + min; //min~max 사이의 정수 출력
}

/**
 * 
 * @param {Element} me 비교할 본체 엘리먼트 객체
 * @param {Element} you 비교당할 대상 엘리먼트 객체
 * @returns 
 */
function collisionDetecting(me, you){
/*     let meTop = me.y;
    let meRight = me.x + me.width;
    let meBottom = me.y + me.height;
    let meLeft = me.x;
    
    let youTop = you.y;
    let youRight = you.x + you.width;
    let youBottom = you.y + you.height;
    let youLeft = you.x;

    let result1 = meBottom >= youTop;
    let result2 = meLeft <= youRight;
    let result3 = meTop <= youBottom;
    let result4 = meRight >= youLeft;
    return result1&&result2&&result3&&result4; */

    let top =[]
    let right=[]
    let bottom =[]
    let left =[]
    for(let i =0;i<2;i++){
        top.push(arguments[i].y);
        right.push(arguments[i].x + arguments[i].width);
        bottom.push(arguments[i].y + arguments[i].height);
        left.push(arguments[i].x);
    }

    let result = new Array(4);
    result[0] = bottom[0] >= top[1];
    result[1] = left[0] <= right[1];
    result[2] = top[0] <= bottom[1];
    result[3] = right[0] >= left[1];
    return result[0]&&result[1]&result[2]&&result[3];
}