
import {colorMatrix, cellMatrix} from "./board.js";
import {makeShape, colors} from "./shapes.js";

let isShapeOut = false; // 사용자가 조작할 도형이 존재 하는지
let shapeData; //현재 사용자가 조작중인 도형
function processing(){
     shapeData = makeShape()
    console.log(shapeData)
    console.log(colorMatrix)
    console.log(cellMatrix)
    if(!isShapeOut){
        draw();
    }
}

function draw(){
    // 컬러매트릭스에 있는 값들을 실제 div에 출력
    for(let i =0;i<cellMatrix.length;i++){
        for(let j = 0;j<cellMatrix[i].length;j++){
            cellMatrix[i][j].style.backgroundColor = colors[colorMatrix[i][j]];
        }
    }   
}


function detectingBottom(){
    // 아래쪽으로 도형을 내리기 위해 먼저 충돌 감지를 해야함
    // let currentNextPositionRow = shapeData.maxRow-1 + shapeData.currentPositionX;
    let lowestmap = []
    for(let j = 0; j<shapeData.maxCol;j++){
        let currentMaxRow = 0;
        let currentMaxCol = 0;
        for(let i = 0;i<shapeData.maxRow;i++){
            // console.log(shapeData.shapeMatrix[i][tempCol])
            shapeData.mappedShape.forEach(item => {
                if(i == item.row && j == item.col){
                    if(currentMaxRow<i){
                        currentMaxRow = i;
                        currentMaxCol = j;
                        console.log(i, j);
                    }
                }
            });
            
        }
        lowestmap.push([currentMaxRow, currentMaxCol])
    }
    console.log(lowestmap)
}

function downShape(){
    detectingBottom()
    for(let i =0;i<shapeData.shapeMatrix.length;i++){
        for(let j = 0;j<shapeData.shapeMatrix[i].length;j++){
            if(colorMatrix[i+shapeData.currentPositionX][j+shapeData.currentPositionY] !==0){
                colorMatrix[i+shapeData.currentPositionX][j+shapeData.currentPositionY] = 0;
            }
        }
    }

    
    shapeData.currentPositionX++;
    


    for(let i =0;i<shapeData.shapeMatrix.length;i++){
        for(let j = 0;j<shapeData.shapeMatrix[i].length;j++){
            colorMatrix[i+shapeData.currentPositionX][j+shapeData.currentPositionY] =
            shapeData.shapeMatrix[i][j];
            shapeData.absoluteX = i+shapeData.currentPositionX
            shapeData.absoluteY = i+shapeData.currentPositionY
        }
    }
    draw()
    console.log(shapeData);
}


export {processing, downShape, detectingBottom};