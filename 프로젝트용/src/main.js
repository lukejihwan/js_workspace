import { cellMatrix, colorMatrix, makeBoard } from "./board.js";
// import { makeShape } from "./shapes.js";
import {processing, downShape, detectingBottom, getLowestCell} from "./process.js";

// import "./board.js";

addEventListener("load", function(){
    init();
})

function init(){
    let start = document.querySelector("#start")
    start.addEventListener("click", function(){
        detectingBottom()
        // downShape()
    })
    makeBoard();
    processing();
    // colorMatrix[10][4] = 4;
    document.querySelector("#test-btn").addEventListener("click", processing)
}