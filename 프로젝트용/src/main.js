

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
        }, 1000);
    })
    makeBoard();
    // processing();
    // colorMatrix[1][1] = 4;
    document.body.addEventListener("keydown", function(event){
        // if(event.keyCode == )
        switch(event.keyCode){
            case 40: detectingBottom();break;
            case 37: detectingLeft();break;
            case 39: detectingRight();break;
        }
    })
    document.querySelector("#test-btn").addEventListener("click", processing)
}