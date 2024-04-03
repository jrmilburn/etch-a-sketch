const sketch = document.createElement("div");
const grid = document.createElement("div");
const btn = document.createElement("button");
const container = document.querySelector(".container");

btn.textContent = "New Grid";
btn.style.cssText = "padding: 10px; margin: 10px;"
container.appendChild(btn);


sketch.style.cssText = "width: 960px; height: 960px; display: flex; flex-wrap: wrap;";
grid.style.cssText = "border: none; outline: 1px solid black; background-color: rgb(0,0,0,0);";

function createGrid(x){

    grid.style.width = `${960/x}px`;
    grid.style.height = `${960/x}px`;

    for(let rows = 0; rows < x; rows++){
        for(let cols = 0; cols < x; cols++){
            let i = grid.cloneNode()
            sketch.appendChild(i)
        }
        
    }

    container.appendChild(sketch);

    return
}

createGrid(16);

sketch.addEventListener("mouseover", (event) => {
    let x = +event.target.style.opacity;
    event.target.style.backgroundColor = `rgb(0,0,0,${x+0.1})`;
});

btn.onclick = () => {
    while(true){
        let newGrid = prompt("Choose a new grid size from 1-100 inclusive");
        if (newGrid > 0 && newGrid <=100){
            sketch.textContent = '';
            createGrid(newGrid);
            break
        }
    }
    
}