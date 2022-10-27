
let isShapeOut = false; // 사용자가 조작할 도형이 존재 하는지
let shapeData; //현재 사용자가 조작중인 도형
function processing(id){
    if(!isShapeOut){
        shapeData = makeShape()
        if(shapeData.isGameOver){
            alert("게임오버");
            clearTimeout(id);
        }else{
        draw()
        isShapeOut = true;
        }
    }else{
        detectingBottom()
        // detectingLeft()
        // detectingRight()
        detectingLine();
    }
    console.log(shapeData)
    console.log(colorMatrix)
    // console.log(cellMatrix)

}

/**
 * 한줄이 다 채워졌는지 검사하는 함수
 */
function detectingLine(){
    // 테스트코드
    for(let i = colorMatrix.length - 3; i< colorMatrix.length;i++){
        for(let j = 0; j<colorMatrix[i].length;j++){
            colorMatrix[i][j] = 2;
        }
    }
    draw()



    let linedIndex = 0;
    for(let i =0;i<colorMatrix.length;i++){
        console.log(i);
        let line = colorMatrix[i];
        let isLined = true
        for(let j = 0;j<line.length;j++){
            if(line[j]==0) isLined = false;
        }

        if(isLined) linedIndex++;
    }

    console.log(linedIndex, "만든 라인")
    return linedIndex;
}

function clearLine(){

}

function draw(){
    // 컬러매트릭스에 있는 값들을 실제 div에 출력
    for(let i =0;i<cellMatrix.length;i++){
        for(let j = 0;j<cellMatrix[i].length;j++){
            cellMatrix[i][j].style.backgroundColor = colors[colorMatrix[i][j]];
        }
    }   
}

// colorMatrix에 그려져있는 도형을 지우는 함수
function clearShape(){
    for(let i =0;i<shapeData.mappedShape.length;i++){
        colorMatrix[shapeData.mappedShape[i].row + shapeData.currentPositionX][shapeData.mappedShape[i].col + shapeData.currentPositionY] = 0;
    }
}

function putShape(){
    for(let i = 0;i<shapeData.mappedShape.length;i++){
        colorMatrix[shapeData.mappedShape[i].row + shapeData.currentPositionX][shapeData.mappedShape[i].col + shapeData.currentPositionY] = shapeData.id;
    }
}

function moveShape(direction){
    clearShape()
    
    switch(direction){
        case "down":
            shapeData.currentPositionX++;
            putShape();
            break;
        case "left":
            shapeData.currentPositionY--;
            putShape()
            break;
        case "right":
            shapeData.currentPositionY++
            putShape()
    }
    draw()
}

function getLowestCell(){
    // 아래쪽으로 도형을 내리기 위해 먼저 충돌 감지를 해야함
        let lowestmap = []
        for(let j = 0; j<shapeData.maxCol;j++){
            let currentMaxRow = 0;
            let currentMaxCol = 0;
            for(let i = 0;i<shapeData.maxRow;i++){
                // console.log(shapeData.shapeMatrix[i][tempCol])
                shapeData.mappedShape.forEach(item => {
                    // console.log(i, j, "inforEach", item);
                    if(i == item.row && j == item.col){
                        if(currentMaxRow<=i){
                            currentMaxRow = i;
                            currentMaxCol = j;
                            // console.log("cr", i , "cc",j);
                        }
                        // console.log("currentMaxRow", currentMaxRow, "currentMaxCol", currentMaxCol)
    
                    }
                });
                
            }
            // console.log(lowestmap, "push")
            lowestmap.push([currentMaxRow, currentMaxCol])
        }
        return lowestmap;
    }
function detectingBottom(){
    let lowCell = getLowestCell();
    // for(let i = 0;i<lowCell.length;i++){
    //     console.log(lowCell[i][0]+shapeData.currentPositionX, lowCell[i][1]+shapeData.currentPositionY)
    //     if(colorMatrix[lowCell[i][0]+shapeData.currentPositionX][lowCell[i][1]+shapeData.currentPositionY]!==0){
    //         console.log(shapeData)
    //     }else{
    //         downShape()
    //         return 0;
    //     }
    // }
    let leftBottomSpace = colorMatrix.length - shapeData.currentPositionX - shapeData.maxRow;
    console.log(leftBottomSpace)
    if(leftBottomSpace>=1){
        for(let i =0;i<lowCell.length;i++){
            // console.log(lowCell[i][0] + shapeData.currentPositionX, lowCell[i][1] + shapeData.currentPositionY)
            let absoluteRow = lowCell[i][0]+1 + shapeData.currentPositionX
            let absoluteCol = lowCell[i][1] + shapeData.currentPositionY
            if(colorMatrix[absoluteRow][absoluteCol]){
                console.log("충돌");
                isShapeOut = false;
                return 0;
            }
        }
        
    }else{
        console.log("바닥에 닿음")
        isShapeOut = false;
        return 0;
    }
    // downShape();
    moveShape("down");
}


// function downShape(){

//     clearShape()
//     shapeData.currentPositionX++;
//     for(let i = 0;i<shapeData.mappedShape.length;i++){
//         colorMatrix[shapeData.mappedShape[i].row + shapeData.currentPositionX][shapeData.mappedShape[i].col + shapeData.currentPositionY] = shapeData.id;
//     }

//     draw()
// }


function getLeftestCell(){
    //현재 도형에서 가장 왼쪽에  있는 셀들의 배열을 구하자
    let leftestMap = [];
    let cRow = 0;

    for(let i =0;i<shapeData.maxRow;i++){
        for(let j = 0;j<shapeData.mappedShape.length;j++){
            if(cRow == shapeData.mappedShape[j].row){
                leftestMap.push(shapeData.mappedShape[j])
                cRow++;
                break;
            }
        }
    }

    // console.log(leftestMap);
    return leftestMap;
}

function detectingLeft(){
    let leftCell = getLeftestCell()
    console.log(leftCell)

    let leftLeftSpace = shapeData.currentPositionY;
    console.log(leftLeftSpace);

    if(leftLeftSpace>=1){
        for(let i = 0;i<leftCell.length;i++){
            let absoluteRow = leftCell[i].row + shapeData.currentPositionX;
            let absoluteCol = leftCell[i].col + shapeData.currentPositionY - 1;
            if(colorMatrix[absoluteRow][absoluteCol] !=0){
                console.log("왼쪽충돌");
                return 0;
            }
            
        }
    }else{
        console.log("왼쪽벽에 닿음");
        return 0;
    }
    // leftShape();
    moveShape("left");
}

function getRightlestCell(){
    let rightestMap = [];
    let mappedShape = shapeData.mappedShape;
    let cCol = 0;
    let cRow = 0;

    for(let i = 0; i< shapeData.maxRow;i++){
        for(let j = 0; j<mappedShape.length;j++){
            console.log(`mappedShape[${j}].row: ${mappedShape[j].row}, cRow: ${cRow}`);
            console.log(`mappedShape[${j}].col: ${mappedShape[j].col}, cCol = ${cCol}`);
            if(mappedShape[j].row == cRow && mappedShape[j].col > cCol){
                cCol = mappedShape[j].col;
                console.log(cCol, "cCol")
            }
        }
        rightestMap.push([cRow, cCol]);
        cCol = 0;
        cRow++;
    }
    return rightestMap;
}

function detectingRight(){
    let rightCell = getRightlestCell();

    console.log(rightCell)
    let rightSpace = colorMatrix[0].length - shapeData.currentPositionY - shapeData.maxCol;
    console.log(rightSpace);
    if(rightSpace>=1){
        for(let i =0;i<rightCell.length;i++){
            let absoluteRow = rightCell[i][0] + shapeData.currentPositionX;
            let absoluteCol = rightCell[i][1] + shapeData.currentPositionY +1;
            if(colorMatrix[absoluteRow][absoluteCol] !=0){
                console.log("오른쪽충돌");
                return 0;
            }
        }
    }else{
        console.log("오른쪽 벽에 닿음");
        return 0;
    }
    moveShape("right");
}
