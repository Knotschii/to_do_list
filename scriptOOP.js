class ListItem {    
    constructor(todolist, text){   //muss todolist als parameter ListItem() übergeben werden? NOPE.
        this._li = document.createElement("li");
        this._span = document.createElement("span");
        this._span.innerHTML = text;
        this._edButton = document.createElement("button");
        this._edButton.innerHTML = "edit";
        this._delButton = document.createElement("button");
        this._delButton.innerHTML = "del";
        //create linking:
        todolist.appendChild(this._li);    //if I modify this._li does it modify the DOM? or is it not call-by-reference? YES, apparently.
        this._li.appendChild(this._span);
        this._li.appendChild(this._edButton);
        this._li.appendChild(this._delButton);
        //set eventListeners:
        this.setCrossThrough();
        this.setDelete();
        this.setEdit();
    }

    setCrossThrough(){
        this._span.addEventListener("click", () => {
            if(!this._span.style.textDecoration){
                this._span.style.textDecoration = "line-through";
            } else {
                this._span.style.textDecoration = "";
            }
        });
    }

    setDelete(){
        this._delButton.addEventListener("click", (e) => {
            e.preventDefault();
            this._delButton.parentElement.remove();
        });
    }

    setEdit(){
        this._edButton.addEventListener("click", () => {
            //if button text is "edit":
            if(this._edButton.innerHTML === "edit"){
                //change button text to "save"  (change back to "edit" later):
                this._edButton.innerHTML = "save";
                //save list item text into variable:
                let savedText = this._span.innerHTML;
                //create input:
                let editInput = document.createElement("input");
                editInput.setAttribute("type", "text");
                //put saved item text into input:
                editInput.setAttribute("value", savedText);
                //editInput.value = savedText;
                console.log("editInput is: " + editInput);
                //remove span:
                this._span.remove();
                //append input to list item:
                this._li.prepend(editInput);
            } else {   //if button text is "save":
                //editInput.value is saved in var, var is appended as new text to textSpan which is appended again:
                let editInput = document.querySelector("li > input");
                let savedText = editInput.value;
                console.log(savedText);
                console.log(this._span.innerHTML);
                this._span.innerHTML = savedText;
                this._li.prepend(this._span);
                //editInput is deleted
                editInput.remove();
                //eBtn text is set back to "edit":
                this._edButton.innerHTML = "edit";
            }
        });
    }
}


class ToDoList {
    constructor(){
        this._toDoList = document.querySelector("#todo-list");
        this._userInput = document.querySelector("#input-field")
        this._submitButton = document.querySelector("#input-btn");
        this._listItems = document.querySelectorAll("li"); //list!  
        this.setSubmit();
    }

    setSubmit(){
        this._submitButton.addEventListener("click", () => {
            let text = this._userInput.value;
            if(text){
                const myItem = new ListItem(this._toDoList, text);
                console.log("test from .setSubmit(): ", text);
            } else {
                alert("Please enter a new list item!");
            }
            this._userInput.value = "";  
        });
    }

    getCurrentListItems(){
        return this._listItems;
    }
}


///instantiate:
let myToDoList = new ToDoList();




