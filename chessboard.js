const letters = ["A", "B", "C", "D", "E","F","G", "H" ];
const matrix = getChessMatrix();
console.log(matrix)
class ChessBoard {
    constructor(idParent) {
        this.parentElem = document.getElementById(idParent);
    }
    render() {
        this.parentElem.innerHTML = `${getTitle()}${getContent()}${getTitle()}`
    }
}
function getTitle() {
    return `${getRow()}${getEmptyCell()}${getLetters()}</div>`
}
function getRow() {
    return `<div class="row">`
}
function getEmptyCell() {
    return `<div class="col-auto text-white">1</div>`
}
function getChessMatrix() {
    const matrix = [];
    let count = 0
    for (let i = 0; i < 8; i++) {
        matrix.push([]);
        for (let j = 0; j < 8; j++) {
            matrix[i][j] = count++ % 2 - i % 2;
        }
    }
    return matrix;
}
function getContent() {
    return matrix.map((r, i) => `${getChessRow(r,i)}</div>`).join('');
}
function getChessRow(row, index) {
    return `${getRow()}${getCell(index)}${row.map((cell, j) =>
    `<div class="col-auto ${cell == 0 ? 'bg-dark' : 'bg-white'}
     ${cell == 0 ? 'text-dark' : 'text-white'} border">${letters[j]}</div>`).join('')}
     ${getCell(index)}`
}
function getLetters() {
    return letters.map(l => `<div class="col-auto border border-white" >${l}</div>`).join('')
}
function getCell(num) {
    return `<div class="col-auto">${num}</div>`
}


  
//   <div class="col-auto border border-white" >A</div>
//   <div class="col-auto border border-white">B</div>
//   <div class="col-auto border border-white">C</div>
//   <div class="col-auto border border-white">D</div>
//   <div class="col-auto border border-white">E</div>
//   <div class="col-auto border border-white">F</div>
//   <div class="col-auto border border-white">G</div>
//   <div class="col-auto border border-white">H</div>
//   <div class="col-auto bg-white text-white">l</div>
// </div>

//   <div class="col-auto">1</div>
//  <div class="col-auto bg-dark text-dark border">A</div>
//   <div class="col-auto bg-white text-white border">B</div>
//   <div class="col-auto bg-dark text-dark border">C</div>
//   <div class="col-auto bg-white text-white border">D</div>
//   <div class="col-auto bg-dark text-dark border">E</div>
//   <div class="col-auto bg-white text-white border">F</div>
//   <div class="col-auto bg-dark text-dark border">G</div>
//   <div class="col-auto bg-white text-white border">H</div>
//   <div class="col-auto">1</div>
// </div>
// <div class="row ">
//   <div class="col-auto">2</div>
//  <div class="col-auto bg-white  text-white border">A</div>
//   <div class="col-auto bg-dark  text-dark border">B</div>
//   <div class="col-auto bg-white text-white border">C</div>
//   <div class="col-auto bg-dark text-dark border">D</div>
//   <div class="col-auto bg-white text-white border">E</div>
//   <div class="col-auto bg-dark text-dark border">F</div>
//   <div class="col-auto bg-white text-white border">G</div>
//   <div class="col-auto bg-dark text-dark border">H</div>
//   <div class="col-auto">2</div>
// </div>
// <div class="row ">
//   <div class="col-auto">3</div>
//  <div class="col-auto bg-dark text-dark border">A</div>
//   <div class="col-auto bg-white text-white border">B</div>
//   <div class="col-auto bg-dark text-dark border">C</div>
//   <div class="col-auto bg-white text-white border">D</div>
//   <div class="col-auto bg-dark text-dark border">E</div>
//   <div class="col-auto bg-white text-white border">F</div>
//   <div class="col-auto bg-dark text-dark border">G</div>
//   <div class="col-auto bg-white text-white border">H</div>
//   <div class="col-auto">3</div>
// </div>
// <div class="row ">
//   <div class="col-auto">4</div>
//  <div class="col-auto bg-white  text-white border">A</div>
//   <div class="col-auto bg-dark  text-dark border">B</div>
//   <div class="col-auto bg-white text-white border">C</div>
//   <div class="col-auto bg-dark text-dark border">D</div>
//   <div class="col-auto bg-white text-white border">E</div>
//   <div class="col-auto bg-dark text-dark border">F</div>
//   <div class="col-auto bg-white text-white border">G</div>
//   <div class="col-auto bg-dark text-dark border">H</div>
//   <div class="col-auto">4</div>
// </div>
// <div class="row ">
//   <div class="col-auto">5</div>
//  <div class="col-auto bg-dark text-dark border">A</div>
//   <div class="col-auto bg-white text-white border">B</div>
//   <div class="col-auto bg-dark text-dark border">C</div>
//   <div class="col-auto bg-white text-white border">D</div>
//   <div class="col-auto bg-dark text-dark border">E</div>
//   <div class="col-auto bg-white text-white border">F</div>
//   <div class="col-auto bg-dark text-dark border">G</div>
//   <div class="col-auto bg-white text-white border">H</div>
//   <div class="col-auto">5</div>
// </div>
// <div class="row ">
//   <div class="col-auto">6</div>
//  <div class="col-auto bg-white  text-white border">A</div>
//   <div class="col-auto bg-dark  text-dark border">B</div>
//   <div class="col-auto bg-white text-white border">C</div>
//   <div class="col-auto bg-dark text-dark border">D</div>
//   <div class="col-auto bg-white text-white border">E</div>
//   <div class="col-auto bg-dark text-dark border">F</div>
//   <div class="col-auto bg-white text-white border">G</div>
//   <div class="col-auto bg-dark text-dark border">H</div>
//   <div class="col-auto">6</div>
// </div>
// <div class="row ">
//   <div class="col-auto">7</div>
//  <div class="col-auto bg-dark text-dark border">A</div>
//   <div class="col-auto bg-white text-white border">B</div>
//   <div class="col-auto bg-dark text-dark border">C</div>
//   <div class="col-auto bg-white text-white border">D</div>
//   <div class="col-auto bg-dark text-dark border">E</div>
//   <div class="col-auto bg-white text-white border">F</div>
//   <div class="col-auto bg-dark text-dark border">G</div>
//   <div class="col-auto bg-white text-white border">H</div>
//   <div class="col-auto">7</div>
// </div>
// <div class="row ">
//   <div class="col-auto">8</div>
//  <div class="col-auto bg-white  text-white border">A</div>
//   <div class="col-auto bg-dark  text-dark border">B</div>
//   <div class="col-auto bg-white text-white border">C</div>
//   <div class="col-auto bg-dark text-dark border">D</div>
//   <div class="col-auto bg-white text-white border">E</div>
//   <div class="col-auto bg-dark text-dark border">F</div>
//   <div class="col-auto bg-white text-white border">G</div>
//   <div class="col-auto bg-dark text-dark border">H</div>
//   <div class="col-auto">8</div>
// </div>
// <div class="row ">
//   <div class="col-auto text-white">1</div>
//   <div class="col-auto border border-white" >A</div>
//   <div class="col-auto border border-white">B</div>
//   <div class="col-auto border border-white">C</div>
//   <div class="col-auto border border-white">D</div>
//   <div class="col-auto border border-white">E</div>
//   <div class="col-auto border border-white">F</div>
//   <div class="col-auto border border-white">G</div>
//   <div class="col-auto border border-white">H</div>
//   <div class="col-auto bg-white text-white">l</div>
// </div>