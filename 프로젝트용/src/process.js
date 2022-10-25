
import {colorMatrix, cellMatrix} from "./board.js";
import {makeShape, colors} from "./shapes.js";

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
        getLeftestCell()
    }
    console.log(shapeData)
    // console.log(colorMatrix)
    // console.log(cellMatrix)

}

function draw(){
    // 컬러매트릭스에 있는 값들을 실제 div에 출력
    for(let i =0;i<cellMatrix.length;i++){
        for(let j = 0;j<cellMatrix[i].length;j++){
            cellMatrix[i][j].style.backgroundColor = colors[colorMatrix[i][j]];
        }
    }   
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
            lowestmap.push([currentMaxRow+1, currentMaxCol])
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
            
            if(colorMatrix[lowCell[i][0] + shapeData.currentPositionX][lowCell[i][1] + shapeData.currentPositionY]){
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
    downShape();
}


function downShape(){

    for(let i =0;i<shapeData.mappedShape.length;i++){
        colorMatrix[shapeData.mappedShape[i].row + shapeData.currentPositionX][shapeData.mappedShape[i].col + shapeData.currentPositionY] = 0;
    }
    shapeData.currentPositionX++;
    for(let i = 0;i<shapeData.mappedShape.length;i++){
        colorMatrix[shapeData.mappedShape[i].row + shapeData.currentPositionX][shapeData.mappedShape[i].col + shapeData.currentPositionY] = shapeData.id;
    }

    draw()
}

function getLeftestCell(){
    //현재 도형에서 가장 왼쪽에  있는 셀들의 배열을 구하자
    let breakCheck = false
    // for(let i =0;i<shapeData.maxRow;i++){
    //     for(let j = 0; j<shapeData.maxCol;j++){
    //         shapeData.mappedShape.forEach(item=>{
    //             if(colorMatrix[])
    //         })
    //     }
    //     if(breakCheck) break;
    // }
    let i =0;
    let leftestMap = [];
    let cRow = 0;

    // while(true){
    //     let j = 0;
    //     while(true){
    //         for(let k =0;k<shapeData.mappedShape.length;k++){
    //             if()
    //         }

    //         j++
    //     }
    // }
    for(let i =0;i<shapeData.mappedShape.length;i++){
        if(cRow < shapeData.mappedShape[i].row) cRow = shapeData.mappedShape[i].row;
        for(let j = 0;j<shapeData.mappedShape.length;j++){
            
        }
    }
}


export {processing, downShape, detectingBottom, getLowestCell, shapeData};