
//selecting all

var boxes = document.querySelectorAll('td'),
    // rows = document.querySelectorAll('tr');
    rows = 6,
    counter = [0,0,0,0,0,0,0]; //counting coloured boxes in each column

//
// for (var  i = 0; i < rowsLen; i++) {
//     var name = rows[i]+'Counter';
//     console.log('?',rows[i]);
// }

    // rowCounter = rows.length-1;

console.log(rows);

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", addCoin)

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



function addCoin() {
    console.log(this.className); //name of the column
    console.log(this.parentNode); //shows the row

    var thisColumn = document.querySelectorAll("."+this.className);
    console.log(thisColumn, "    THIS");
    console.log("counter" + this.className);

    console.log(thisColumn[rows-1]);
    thisColumn[rows-1].style.backgroundColor='green';

    // console.log(boxes, "   thIS --  ", this);
    // console.log(boxes.indexOf(this));

      //  boxToSelect = rows[rowCounter].querySelector(boxClass);
   // console.log(boxToSelect);


    //keep the number of coloured boxes
    return
}



