Step One: Planning

Question: 1 
what HTML would be useful for the game board itself?
Answer: 1
My first though is to use a table... We could use 6 x rows and 7 x td to build the board
or
Go with HTML canvas, witch will be much harder because i don't know canvas but will end up being the most awesome project.
Final Answer: 
The code i was to follow was using the html table method so thats what i stayed with...

Question: 2
how could you represent a played-piece in the HTML board?
Answer: 2 
SVG would be ok, or create an canvas drawing to represent it, or div with background color added

Question: 3
in the JavaScript, what would be a good structure for the in-memory game board?
Answer: 3
database driven or local storage for data persistance, in game data structure could be object or array because its so small performance wont be an issue, but for practice we will use a hashtable with map and sets

Question: 4
what might the flow of the game be?
Answer: 4
splash screen with a setting disply... then select 2 player mode or vs computer AI mode, pick color and who goes first. Animation to start game and show board...

Question: 5
Then, write down some functions names/descriptions that would be useful for this game.
 Answer: 5
const init = ()=>{
    // window.onload function
    // this would trigger the animation to start game - show setting splash screen
    //maybe make calls to db for past game if making accounts...
}
const handleSetting = ()=>{
    //this would take user options selected and build game with thoes params
}

const makeGameBoard = ()=>{
    //i dont know how to use canvas yet, but this function i would dynamicly build the canvas board and be awaiting user inputs
}

const handleClick = ()=>{
    //this would handle user clicks to select where to drop next game peace
}

const isWin = ()=>{
    //would check to see if someone won
}

const winner = ()=>{
    //end of game animation on win and maybe lose as well
}

const score = () => {
    maybe some sort of game score or timer counter...
}

const reset = ()=>{
    //reset on win or whenever
}