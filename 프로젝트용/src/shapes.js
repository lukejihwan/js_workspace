import {cellMatrix, colorMatrix} from "./board.js";
import {getRandom} from "./util.js";

const SHAPE_TYPES = 7;

let shapeRowLen;
let shapeColLen;

let colors = [
    "white",
    "tomato",
    "orange",
    "yellow",
    "green",
    "blue", 
    "navy",
    "purple"
]

function makeShape(){
    let shapeMatrix = [];
    let colorID= selectShapes(getRandom(SHAPE_TYPES), shapeMatrix);
    let maxRow = 0;
    let maxCol = 0;
    let mappedShape = [];

    // 랜덤으로 생성된 도형 정보를 컬러매트릭스에 출력
    for(let i =0;i<shapeMatrix.length;i++){
        for(let j = 0;j<shapeMatrix[i].length;j++){
            colorMatrix[i][j+shapeMatrix.length] = shapeMatrix[i][j]
        }
    }


    function getShapeLength(){
        for(let i =0;i<shapeMatrix.length; i++){
            for(let j = 0;j<shapeMatrix[i].length;j++){
                if(shapeMatrix[i][j] != 0){
                    if(i>maxRow) maxRow = i;
                    if(j>maxCol) maxCol = j;

                }
            }
        }
    }
    getShapeLength(); //도형의 가로세로 크기 구하기
    maxRow++;
    maxCol++;

    function mappingShape(){
        for(let i =0;i<maxRow;i++){
            for(let j = 0;j<maxCol;j++){
                if(shapeMatrix[i][j] == colorID){ // shapeMatrix의 해당 셀에 실제 블럭이 포함된다면
                    mappedShape.push({row: i, col: j});
                }
            }
        }
    }
    mappingShape();

    return {
        shapeMatrix,
        currentPositionX:0,
        currentPositionY:shapeMatrix.length,
        id: colorID,
        maxRow,
        maxCol,
        mappedShape
    }
}
/* 
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0] */
function selectShapes(n, mat){
    switch(n){
        /*
        J:1
        L:2
        O:3
        S:4
        T:5
        Z:6
        I:7
         */
        case 0: {
            //J
            mat.push([1, 0, 0]);
            mat.push([1, 1, 1]);
            mat.push([0, 0, 0]);
            return n + 1;
        };break;
        case 1: {
            //L
            mat.push([0, 0, 2]);
            mat.push([2, 2, 2]);
            mat.push([0, 0, 0]);
            return n + 1;
        };break;
        case 2: {
            //O
            mat.push([3, 3, 0]);
            mat.push([3, 3, 0]);
            mat.push([0, 0, 0]);
            return n + 1;
        };break;
        case 3: {
            //S
            mat.push([0, 4, 4]);
            mat.push([4, 4, 0]);
            mat.push([0, 0, 0]);
            return n + 1;
        };break;
        case 4: {
            //T
            mat.push([0, 5, 0]);
            mat.push([5, 5, 5]);
            mat.push([0, 0, 0]);
            return n + 1;
        };break;
        case 5: {
            //Z
            mat.push([6, 6, 0]);
            mat.push([0, 6, 6]);
            mat.push([0, 0, 0]);
            return n + 1;
        };break;
        case 6: {
            //Z
            mat.push([7, 0, 0, 0]);
            mat.push([7, 0, 0, 0]);
            mat.push([7, 0, 0, 0]);
            mat.push([7, 0, 0, 0]);
            return n + 1;
        };break;
    }
}
export {makeShape, colors};

