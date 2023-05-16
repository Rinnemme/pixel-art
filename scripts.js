const gridContainer = document.getElementById("grid-container")
const dimensionBox = document.getElementById("grid-dimensions")
const artUI = document.getElementById("button-container")
const colorPicker = document.getElementById("color-picker")
const download = document.getElementById("download-button")
let dimension = 10

function refreshGrid() {
    const grid = document.getElementById("grid")
    grid.remove()
    const newGrid = document.createElement('div')
    newGrid.setAttribute('id','grid')
    gridContainer.appendChild(newGrid)
    const width = (1/dimension*100)
    for (let i=1;i<=dimension*dimension;i++) {
        const newCell = document.createElement('div')
        newCell.classList.add("cell")
        newCell.style.width= width + "%"
        newCell.style.height= width + "%"
        newCell.addEventListener("click", setColor)
        newGrid.appendChild(newCell)
    }
}

function setColor() {
    this.style.backgroundColor=`${colorPicker.value}`
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'
    })
}

function openUI() {
    artUI.style.display = "flex"
    refreshGrid()
}

function dimensionUp() {
    if (dimension===50) {return}
    dimension=dimension+1
    dimensionBox.textContent=dimension
}

function dimensionDown() {
    if (dimension===1) {return}
    dimension=dimension-1
    dimensionBox.textContent=dimension
}

function toggleGrid() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.classList.toggle('no-grid')
    })
}