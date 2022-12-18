var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = () => {
    setGame()
}

const setGame = () => {
    //set digits row at the bottom
    for (let i = 1; i <= 9; i++){
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    for (let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();

            if(board[r][c] != "-"){
                tile.innerText = board[r][c];
                tile.classList.add("tileStart")
            }

            if (r == 2 || r ==5) {
                tile.classList.add("hline");
            }
            if (c == 2 || c ==5) {
                tile.classList.add("vline");
            }
            
            tile.addEventListener("click", selectTile)
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }

}

function selectNumber() {
    if(numSelected != null){
        numSelected.classList.remove("numberSelected");
    }
    numSelected = this;
    console.log(this)
    numSelected.classList.add("numberSelected")
}

function selectTile() {
    if(numSelected) {
        if(this.innerText != "")return;

        //"0-0" "1-1" ...
        console.log(this.id)
        let cords = this.id.split("-");//["0", "0"]
        let r = parseInt(cords[0]);
        let c = parseInt(cords[1]);

        if(solution[r][c] == numSelected.id){
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = "Errors: " + errors;
        }
    }
}