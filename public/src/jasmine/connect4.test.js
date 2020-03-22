describe("makeBoard() test (with setup)", function() {

     beforeAll(function () {
        const boardDiv = document.querySelector('#game');
        boardDiv.style.display = 'none';
    });

    it('should make a multi dimensional array based off variables width and height makeBoard()', function () {
        expect(board.length).toEqual(HEIGHT);
        expect(board[0].length).toEqual(WIDTH);
    });
    it(" makeBoard() should make array 'board' with some of the values", function() {
     //this only works if let WIDTH = 7; and let HEIGHT = 6 are set to thoes values;
      expect(board).not.toEqual(jasmine.arrayContaining([1,2]));
      expect(
        board.every( e => e.every( e => e === undefined ) ) ).toEqual(true);
    });

});

describe("makeHtmlBoard() test ", function() {

    it('should setAttribute("id", "column-top1") for first HTML row makeHtmlBoard()', function () {
        let row = document.getElementsByTagName("tr");
        row = Array.from(row);
        expect( row[0].hasAttribute("id") ).toEqual(true);
        expect( row[0].getAttribute("id") ).toEqual("column-top1");
    });

    it('should make a variable amount "let HEIGHT = x" of HTML table rows + 1 top row  makeHtmlBoard()', function () {
        let row = document.getElementsByTagName("tr");
        row = Array.from(row);
        expect(row.length).toEqual(HEIGHT + 1);
    });

    it('should make a variable amount "let WIDTH = x" of HTML table td tags times number of rows "let HEIGHT = x" playable grid makeHtmlBoard()', function () {
        let td = document.getElementsByTagName("td");
        td = Array.from(td);
        td.splice(0,7)//minus top row
        expect(td.length).toEqual(WIDTH * HEIGHT); // playable rows
    });
});