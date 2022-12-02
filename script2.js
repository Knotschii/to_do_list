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
        let textSpan = document.createElement("span");
        textSpan.innerHTML = userInput.value + " ";
        newLi.appendChild(textSpan);
        //add edit-btn to new list item:
        let eBtn = document.createElement("button");
        eBtn.innerHTML = "edit";
        newLi.appendChild(eBtn);
        //add x-btn to new list item:
        let xBtn = document.createElement("button");
        xBtn.innerHTML = "del";
        newLi.appendChild(xBtn);
        //add eventListener for text in span (cross through or uncross):
        textSpan.addEventListener("click", () => {
            if(!textSpan.style.textDecoration){
                textSpan.style.textDecoration = "line-through";
            } else {
                textSpan.style.textDecoration = "";
            }
        }); 
        //add eventListener for edit button:
        






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











