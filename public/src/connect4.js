let WIDTH = 7;
let HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

 //init function
const init = () => {
  //was going to add a splash screen here then call initGame
initGame()
}

// start game
const initGame = ()=>{
  const boardDiv = document.querySelector('#game');
  boardDiv.style.display = 'block';
  makeBoard();
  makeHtmlBoard();
}

window.addEventListener('load', init);

/** makeBoard: create in-JS board structure:
 *  board = array of rows, each row is array of cells  (board[y][x])
 */
const makeBoard = ()=> {
  for (let y = 0; y < HEIGHT; y++) {
    board.push(Array.from({ length: WIDTH }));
  }
}

/** makeHtmlBoard: make HTML top row  of table */

const makeHtmlBoard = ()=> {
  const htmlBoard = document.querySelector('#board')
  // builds top table header
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top1");
  top.addEventListener("click", handleClick);
  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // builds the rest of game board sets dynamic ids for rest of rows 6 x 7 
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);      
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
const findSpotForCol = (x)=> {
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */
const placeInTable = (y, x)=> {
  // TODO: make a div and insert into correct table cell
  const local = document.getElementById(`${y}-${x}`);
  const div = document.createElement("div");
  div.setAttribute("class", `piece animated bounce`);
  div.classList.add(`p${currPlayer}`);
  local.append(div);
}

/** endGame: calls popup modal to alert game end*/
const endGame = (msg)=> {
  let message = document.getElementById('modalTxt');
  modal.style.display = "block";
  modal.classList.add("animated", "slideInDown");
  message.innerText= msg
}

/** handleClick: handle click of column top to play piece */
const handleClick = (evt)=> {
  //add custom animations for ball drop
  animationStart(evt);
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  board[y][x] = currPlayer;
  placeInTable(y, x);

  //check for win
  if (checkForWin()) {
    setTimeout(() => {
      return endGame(`Player ${currPlayer === 1 ? currPlayer = 2 : currPlayer = 1} won!`);
    }, 10);
  }

  // check if all cells in board are filled; if so call, call endGame
let tie = board.every((e,i,arr)=>{
  return e.every((e)=>{
    return (e === 1 || e === 2)
  })
})
if(tie){
  msg = ``
  let x = document.querySelector('.modal-content')
  x.classList.remove('modal-content')
  x.classList.toggle('modal-content-loser')
  endGame(msg)
}

  // switch players colors for hover game peace row 1
  handleHover();

//switch active player turn
  currPlayer === 1 ? currPlayer = 2 : currPlayer = 1
  }

const handleHover = ()=>{
  let row = document.getElementById('column-top1')
  let row2 = document.getElementById('column-top2')
  if(currPlayer === 1){
    Array.from(row.children).map((e)=>{
    row.setAttribute("id", "column-top2");
  })
    }else{
    Array.from(row2.children).map((e)=>{
      row2.setAttribute("id", "column-top1");
  })
    }
}
/** checkForWin: check board cell-by-cell for "does a win start here?" */

const checkForWin = ()=> {
  let _win = (cells)=> {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

// Get the modal aka win message popup
var modal = document.getElementById("myModal");

//reset btn
const handleReset = () => {
  let board2 = document.getElementById("board");
  board2.innerHTML = ''
  currPlayer = 1; 
  board = [];
  makeBoard();
  makeHtmlBoard();
  checkForWin();
  modal.classList.add("animated", "slideOutDown");
  setTimeout(() => {
  let x = document.querySelector('#target1')
  x.classList.add('modal-content')
  x.classList.remove('modal-content-loser')
  modal.classList.remove("animated", "slideOutDown");
  modal.style = 'display:none';
  }, 1000);
}

//playAgain: btn calls function above this to reset everything
var playAgain = document.getElementById("playAgain");
playAgain.addEventListener('click', handleReset);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
  handleReset()
}


// Drop game peace animations for blue/red chip based on top row click evt and current player turn.
const animationStart = (evt)=> {
 let row4 = document.getElementsByTagName("td");
 let row= Array.from(row4);
 row.splice(0,7)
  if(currPlayer === 1 ){
    switch ( parseInt(evt.target.id) ) {
      case 0:
          row.map((e)=>{
          e.classList.toggle('column0r')
          setTimeout(() => {
            e.classList.toggle('column0r')
          }, 200);
        })
        break;
      case 1:
          row.map((e)=>{
          e.classList.toggle('column1r')
           setTimeout(() => {
            e.classList.toggle('column1r')
          }, 200);
        })
        break;
      case 2:
          row.map((e)=>{
          e.classList.toggle('column2r')
           setTimeout(() => {
            e.classList.toggle('column2r')
          }, 200);
        })
        break;
      case 3:
          row.map((e)=>{
          e.classList.toggle('column3r')
           setTimeout(() => {
            e.classList.toggle('column3r')
          }, 200);
        })
        break;
      case 4:
          row.map((e)=>{
          e.classList.toggle('column4r')
           setTimeout(() => {
            e.classList.toggle('column4r')
          }, 200);
        })
        break;
      case 5:
          row.map((e)=>{
          e.classList.toggle('column5r')
           setTimeout(() => {
            e.classList.toggle('column5r')
          }, 200);
        })
        break;
      case  6:
          row.map((e)=>{
          e.classList.toggle('column6r')
           setTimeout(() => {
            e.classList.toggle('column6r')
          }, 200);
        })
    }
  }else{
    switch ( parseInt(evt.target.id) ) {
      case 0:
          row.map((e)=>{
          e.classList.toggle('column0b')
           setTimeout(() => {
            e.classList.toggle('column0b')
          }, 200);
        })
        break;
      case 1:
          row.map((e)=>{
          e.classList.toggle('column1b')
           setTimeout(() => {
            e.classList.toggle('column1b')
          }, 200);
        })
        break;
      case 2:
          row.map((e)=>{
          e.classList.toggle('column2b')
           setTimeout(() => {
            e.classList.toggle('column2b')
          }, 200);
        })
        break;
      case 3:
          row.map((e)=>{
          e.classList.toggle('column3b')
           setTimeout(() => {
            e.classList.toggle('column3b')
          }, 200);
        })
        break;
      case 4:
          row.map((e)=>{
          e.classList.toggle('column4b')
           setTimeout(() => {
            e.classList.toggle('column4b')
          }, 200);
        })
        break;
      case 5:
          row.map((e)=>{
          e.classList.toggle('column5b')
           setTimeout(() => {
            e.classList.toggle('column5b')
          }, 200);
        })
        break;
      case  6:
          row.map((e)=>{
          e.classList.toggle('column6b')
           setTimeout(() => {
            e.classList.toggle('column6b')
          }, 200);
        })
  }
}
}