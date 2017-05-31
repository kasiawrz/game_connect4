
//selecting all cells
var boxes = document.querySelectorAll('td'),
    boxesLen = boxes.length,
    player = 0; //even num - human, odd - computer

for (var i = 0, j = boxes.length; i < j; i++) {
    boxes[i].addEventListener("click", addCoin);

    //naming columns
    if (i%7 === 0) {
        boxes[i].className = "first"
    }
    else if (i%7 === 1) {
        boxes[i].className = "second"
    }
    else if (i%7 === 2) {
        boxes[i].className = "third"
    }
    else if (i%7 === 3) {
        boxes[i].className = "fourth"
    }
    else if (i%7 === 4) {
        boxes[i].className = "fifth"
    }
    else if (i%7 === 5) {
        boxes[i].className = "sixth"
    }
    else {
        boxes[i].className = "seventh"
    }
}

//adding counters to each column to know which cell is the first to colour
var counters = [];

for (var i = 0; i < 7; i++) {
    counters[boxes[i].className] = 6;
}


function addCoin() {

    var thisColumn = document.querySelectorAll("."+this.className);
    counters[this.className]--;
    player++;
    console.log("   ERROR  ", counters[this.className], thisColumn[counters[this.className]]);

    if (player % 2 === 1) {
        console.log('tak')
        thisColumn[counters[this.className]].style.backgroundColor= "green";
        randomMovement();
    }
    else {
        thisColumn[counters[this.className]].style.backgroundColor= "red";
        //display a box 'your turn'
    }
}

function randomMovement() {
    //randomly choose a 'clicked' cell
    var randColumn = Math.floor(Math.random() * boxesLen);
    console.log(boxes[randColumn], '   random');
    boxes[randColumn].click();


}



