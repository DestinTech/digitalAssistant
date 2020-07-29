function Task(name, interval = "") { //Create a task constructor to add to an array of tasks
    this.name = name;
    this.complete = false;
    this.interval = interval;  
}
function Duty(name, interval = ""){ //Create a duty contructor and an array to add the duties to
    this.name = name;
    this.complete = false;
    this.interval = interval;  
}
let dutyList = [];
let taskList = [];

let dailyTasksContainer = document.querySelector("#dailyTasksContainer");
let dutyListContainer = document.querySelector("#dutyListContainer");

function render (){ //render items from lists to screen
    dailyTasksContainer.innerHTML = "";
    dutyListContainer.innerHTML = "";//clear the div to prevent reprinting 

    let id = 0;
    for (let task of taskList){
        let taskEl = document.createElement("div"); //create the div to hold everything in
        taskEl.id = id; 
        taskEl.className ="tasks";
        id++;
      
        //add a button to the div, 
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.style.display ="inline";
        taskEl.appendChild(checkbox);

        //TODO: add an event listener to listen for the checkmark
        
        let name = document.createElement("h4"); //add the title and append
        name.style.display ="inline-block";
        name.textContent = task.name;
        taskEl.appendChild(name);

       
        

        dailyTasksContainer.appendChild(taskEl); //append the individual div to the container
    }
    
    //and then do the exact same for duties? This has to be comically simple to clean up in to a single constructor and a single function.. Oh well, it's an MVP!
    for (let duty of dutyList){
    
    }
}



taskList.push(new Task("make a piece of wood in to a cover for my window's ac"));
taskList.push(new Task("make a piece of wood in to a cover for my window's ac"));
taskList.push(new Task("make a piece of wood in to a cover for my window's ac"));

taskList.push(new Task("make a piece of wood in to a cover for my window's ac"));

taskList.push(new Task("make a piece of wood in to a cover for my window's ac"));

taskList.push(new Task("make a piece of wood in to a cover for my window's ac"));

render();

//add a checkbox and set a data elements that refence the ID for both items.

//add each duty to a seperate div from the duty list


//add an event listener that listens for the taks and duties to be clickedd



//add event listeners to listen for the newDuty and newTask buttons



