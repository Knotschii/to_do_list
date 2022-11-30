//WO:
const submitBtn = document.querySelector("#input-btn");
const todolist = document.querySelector("#todo-list");

//WAS:
function addItem(e){
    const userInput = document.querySelector("#input-field").value;
    //console.log(userInput);
    if(userInput){
        let newLi = document.createElement("li");
        newLi.innerHTML = userInput + " ";
        todolist.appendChild(newLi);
        //add x-button to new list item:
        let xBtn = document.createElement("a");
        xBtn.setAttribute("href", "");
        xBtn.innerHTML = "X";
        newLi.appendChild(xBtn);
    }
}

function removeItem(e){



}

//WANN:
submitBtn.addEventListener("click", addItem);    //alternatively submit?

//vielleicht liste referenzieren, wenn x gedrückt bei einem Kind, dann dieses Kind löschen (ID?)