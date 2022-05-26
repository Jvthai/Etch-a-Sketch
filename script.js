//establish DOM element container for the grid
const container = document.querySelector('#container');

//ability to empty out the grid by calling function
function empty(element){
    element.innerHTML = ""; 
}

//reset grid button functionality
const resetBtn = document.querySelector('#resetBtn'); 
resetBtn.addEventListener("click", function(){
    //remove the contents of the container somehow and then call createGrid function to recreate a new grid
    empty(container);
    createGrid(16,16);
}); 

//create cutom grid button
const customGrid = document.querySelector('#customGrid')
customGrid.addEventListener("click", function(){
    let num = prompt("Please enter a number for the grid");
        empty(container);
        if (num <= 64){
            createGrid(num, num);
        }
        else{
            alert("Please try again and input a number below 65")
        }
        
});

// create the base grtid and any future grid by passing number values
function createGrid(rows, cols){
   for (let i = 0; i < (rows * cols); i++){
    //establishes the base grid
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    //assigns the each cell the ability to change the color on hover
        let gridItemArr = document.getElementsByClassName("grid-item");
            gridItemArr[i].addEventListener("mouseover", function(){
                gridItemArr[i].style.backgroundColor = "green";
            });  
    };
};

createGrid(16, 16);