const prompt = require('prompt-sync')({sigint: true});


console.log("Welcome to the To-Do List Manager Application!\n");

console.log("Select an action: ");
console.log("[1] Create to-do item");
console.log("[2] Complete to-do item");
console.log("[3] Exit the application");
let choice = Number(prompt("> ")); //user can input their choice here

let items = [""]; //our list of to do items
let statusArray = [""]; //our list of completion statuses (true/false)

while(choice !== 3){
    if(choice === 1){
        console.log("\nCreate a new item\n");
        //prompt to ask user for new item
        let answer = prompt("Please enter an item: ");
        items.push(answer);
        statusArray.push(false);
        // console.log(items);
        // console.log(statusArray);

        printList();
        selectChoice();
    } else if(choice === 2){

        if(statusArray.length > 1){

            console.log("\nSelect an item to complete\n");
            //prompt the user for item number to complete
            let indexChoice = Number(prompt("Enter a number: "));
            
            /*
                Error checking
                indexChoice cannot be:
                -a number greater than the size of the current list
                -0
                -a String

            */
            while(indexChoice > statusArray.length - 1 || indexChoice === 0 || isNaN(indexChoice)){    
                //if user selects number greater than array length
                console.log("Please choose a number that corresponds to an item in the list.");
                indexChoice = Number(prompt("Enter a number: "));
            }

            if(statusArray[indexChoice] === false){
                    statusArray[indexChoice] = true;
            }
        } else {
            console.log("You have no items in your to-do list.");
        }

        //showcase changed list
        printList();
        selectChoice();
    } else {
        //if they pick anything that isn't 1 or 2
        console.log("\nPlease choose a number between 1 and 3\n");

        selectChoice();
    }
}

// Functions
function selectChoice(){
    console.log("Select an action: ");
    console.log("[1] Create to-do item");
    console.log("[2] Complete to-do item");
    console.log("[3] Exit the application");
    choice = Number(prompt("> "));
}

function printList(){
    console.log("\nCurrent To-Do list: ");
    let status = "";
    for(let i = 1; i < items.length; i++){
        //if statement to check if status is true or false
        if(statusArray[i] === false){
            status = "[incomplete] ";
        } else if(statusArray[i] === true){
            status = "[complete] ";
        }
        console.log(i + ". " + status + items[i]);
    }
    console.log("");
}


/*

1. Figure out the UI
-console.logs()
    -different user options
    -welcome message
-prompts
    -check if they input 1 - 3 -if statement
    1 for adding an item  
    2 for completing an item
    3 for ending the application
-display the list to user

2. Store to-do list items (choice === 1)
-prompt user for to-do list item
-start an array with an empty string to account for us looping through the array from index 1
-array to store prompt as a to-do list item
-.push() add toDo list item to array
-start to-do list at 1 (instead of index 0)
//////////
-store those items as incomplete

incomplete = false
complete = true

let statusArray = [];


items: ["", "Wash dog", "Go for walk", "Get groceries", "Mow"]
status:["", false,       true,          false,          false]



3. Completing Incomplete items (choice === 2)
-prompt for number that is the same as the number in the to-do list that we are trying to mark as complete

statusArray[2]
statusArray[1]
-at the index, the user specifies, change false to true (incomplete -> complete) for that item

-conditional to check completion status
-change false to true



*/