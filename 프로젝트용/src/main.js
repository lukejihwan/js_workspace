import { makeBoard } from "./board.js";
// import { makeShape } from "./shapes.js";
import {processing, downShape} from "./process.js";

// import "./board.js";

addEventListener("load", function(){
    init();
})

function init(){
    let start = document.querySelector("#start")
    start.addEventListener("click", function(){
        downShape()
    })
    makeBoard();
    processing();
}