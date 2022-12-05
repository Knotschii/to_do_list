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
        eBtn.addEventListener("click", () => {
            //if button text is "edit":
            if(eBtn.innerHTML === "edit"){
                //change button text to "save"  (change back to "edit" later):
                eBtn.innerHTML = "save";
                //save list item text into variable:
                let savedText = textSpan.innerHTML;
                //create input:
                let editInput = document.createElement("input");
                editInput.setAttribute("type", "text");
                //put saved item text into input:
                editInput.setAttribute("value", savedText);
                //editInput.value = savedText;
                console.log("editInput is: " + editInput);
                //remove span:
                textSpan.remove();
                //append input to list item:
                newLi.prepend(editInput);
            } else {   //if button text is "save":
                //editInput.value is saved in var, var is appended as new text to textSpan which is appended again:
                let editInput = document.querySelector("li > input");
                let savedText = editInput.value;
                console.log(savedText);
                console.log(textSpan.innerHTML);
                textSpan.innerHTML = savedText;
                newLi.prepend(textSpan);
                //editInput is deleted
                editInput.remove();
                //eBtn text is set back to "edit":
                eBtn.innerHTML = "edit";
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











