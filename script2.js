//WO:
let submitBtn = document.querySelector("#input-btn");
let todolist = document.querySelector("#todo-list");

//WAS:
function addItem(e){
    //get user input:
    let userInput = document.querySelector("#input-field");
    if(userInput.value){
        //create new list item:
        let newLi = document.createElement("li");
        newLi.innerHTML = userInput.value + " ";
        todolist.appendChild(newLi);
        //add x-btn to new list item:
        let xBtn = document.createElement("a");
        xBtn.setAttribute("href", "");
        xBtn.innerHTML = "X";
        newLi.appendChild(xBtn);
        //add eventListener for new list item (cross through or uncross):
        newLi.addEventListener("click", () => {
            if(!newLi.style.textDecoration){
                newLi.style.textDecoration = "line-through";     //curly brackets weg?
            } else {
                newLi.style.textDecoration = "";
            }
        }); 


        //add eventListener for x-button (delete item):
        xBtn.addEventListener("click", (e) => {
            e.preventDefault();
            xBtn.parentElement.remove();
        });    
        //reset user input:
        userInput.value = "";

    } else {
        alert("Please enter a new list item!");
    }
}

//WANN:
submitBtn.addEventListener("click", addItem);  //alternatively submit?











