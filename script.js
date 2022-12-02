//WO:
let submitBtn = document.querySelector("#input-btn");
let todolist = document.querySelector("#todo-list");
let closeButtons = document.querySelectorAll("a");  //items in liste packen, um darüber zu loopen?
let listItems = document.querySelectorAll("li");

//WAS:
function addItem(e){
    //get user input:
    let userInput = document.querySelector("#input-field");
    //console.log(userInput);
    if(userInput.value){
        let newLi = document.createElement("li");
        newLi.innerHTML = userInput.value + " ";
        todolist.appendChild(newLi);
        //add x-button to new list item:
        let xBtn = document.createElement("a");
        xBtn.setAttribute("href", "");
        xBtn.innerHTML = "X";
        newLi.appendChild(xBtn);
        userInput.value = "";
    }
    else{
        alert("Please enter a new list item!");
    }
}

//THOSE FUNCTIONS HAVE TO RUN AFTER CREATING A NEW LIST ITEM in order for it to work on the new item!:
//be able to cross through:
for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", function(){
        listItems[i].style.textDecoration = "line-through";
    })
}

//loop through x-buttons of all list items + see if user clicks:
//be able to remove via button:
for(let i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener("click", function(e){
        e.preventDefault();
        closeButtons[i].parentElement.remove();
    });
}

//WANN:
submitBtn.addEventListener("click", addItem);    //alternatively submit?

