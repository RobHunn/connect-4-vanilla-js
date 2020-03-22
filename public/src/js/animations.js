// animationStart: is called in the handleClick function. This handles game peace drop animations for blue/red chip based on top row click evt and current player turn by mapping through all td elements and applying a class. See connect4.css animations at the end of style page for :nth-child(1) selections to grab correct columns. then runs setTimeout to clean up and remove classes.
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