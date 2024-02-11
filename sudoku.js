let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];

let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];
let selectedNumber = null;
let error = 0;


window.onload = function(){
    setGame();
}

function setGame(){
    // Creation of tiles 
for(let r = 0; r<9; r++){
    for(let c = 0; c<9; c++){
    let tile = document.createElement('div');
    tile.addEventListener('click',selectTile);
    if(board[r][c] != "-"){
         tile.innerText=board[r][c];
         tile.classList.add('tileBg')
    }
    if([c]==2 || [c]==5){
        tile.classList.add('setBorderRight')
    }
    if([r]==2 || [r]==5){
        tile.classList.add('setBorderBottom')
    }
    tile.classList.add('tile');
    tile.id = r.toString()+"-"+c.toString();
    document.getElementById('board').appendChild(tile)

        }
    }


    // Creation of digits
for(let d = 1; d<=9; d++){
    let digit = document.createElement('div');
   
    digit.addEventListener('click',selectNumber);
    digit.classList.add('digit')
    digit.id = d;
    digit.innerText = d;
    document.getElementById('numbers').appendChild(digit);
  
    }
}

function selectNumber(){
    if(selectedNumber != null){
        selectedNumber.classList.remove('digitBg');
    }
    selectedNumber = this;
    selectedNumber.classList.add('digitBg');
}

function selectTile(){
    if(this.innerText){
        return;
    }
    if(selectedNumber != null){
 let coords = this.id.split("-")
 let r = parseInt(coords[0])
 let c = parseInt(coords[1])
 if(solution[r][c]==selectedNumber.innerText){
        this.innerText = selectedNumber.innerText;
    }
    else{
        console.log('error');
        error++;
        document.getElementById('result').innerText=error
    }
}
}