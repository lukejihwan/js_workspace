import { cellMatrix, colorMatrix, makeBoard } from "./board.js";
// import { makeShape } from "./shapes.js";
import {processing, downShape, detectingBottom, getLowestCell, shapeData} from "./process.js";

// import "./board.js";

addEventListener("load", function(){
    init();
})

let id;
function init(){
    let start = document.querySelector("#start")
    start.addEventListener("click", function(){
        // detectingBottom()
        // downShape()
        processing(id);
        id = setInterval(function(){
            processing(id);
        }, 100);
    })
    makeBoard();
    processing();
    // colorMatrix[10][4] = 4;
    document.body.addEventListener("keydown", function(event){
        // if(event.keyCode == )
        switch(event.keyCode){
            case 40: detectingBottom();break;
        }
    })
    document.querySelector("#test-btn").addEventListener("click", processing)
}