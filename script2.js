//WO:
let submitBtn = document.querySelector("#input-btn");
let todolist = document.querySelector("#todo-list");

//WAS:
function addItem(e){
    //get user input:
    let userInput = document.querySelector("#input-field");
    if(userInput.value){
        //create new list item with span-element + text:
        let newLi = document.createElement("li");
        todolist.appendChild(newLi);
        let span = document.createElement("span");
        span.innerHTML = userInput.value + " ";
        newLi.appendChild(span);
        //add x-btn to new list item:
        let xBtn = document.createElement("button");
        xBtn.innerHTML = "del";
        newLi.appendChild(xBtn);
        //add eventListener for new list item (cross through or uncross):
        newLi.addEventListener("click", () => {
            if(!newLi.style.textDecoration){
                newLi.style.textDecoration = "line-through";
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











