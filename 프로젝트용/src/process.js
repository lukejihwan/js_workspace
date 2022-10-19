
import {colorMatrix, cellMatrix} from "./board.js";
import {makeShape, colors} from "./shapes.js";

let isShapeOut = false;
let shapeData;
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
    for(let i =0;i<cellMatrix.length;i++){
        for(let j = 0;j<cellMatrix[i].length;j++){
            cellMatrix[i][j].style.backgroundColor = colors[colorMatrix[i][j]];
        }
    }   
}
function downShape(){

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


export {processing, downShape};