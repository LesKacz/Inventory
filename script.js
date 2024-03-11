const toDoItems = document.getElementsByClassName ("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown",function(event){
    if(event.key === "Enter")
   addItem();
})
// item class
function addItem(){
var divParent = document.createElement("div");
var divChild = document.createElement("div");
var checkIcon = document.createElement('i');
var trashIcon = document.createElement('i');

divParent.className = "item";
divParent.innerHTML = '<div>' +input.value+ '</div>';
//make Icons
checkIcon.className = "fas fa-check-square";
checkIcon.style.color = "light gray";
checkIcon.addEventListener("click", function(){
checkIcon.style.color = "dodgerblue";
})

divChild.appendChild(checkIcon);

trashIcon.className ="fas fa-trash";
trashIcon.style.color = "light blue";
trashIcon.addEventListener("click", function(){
    divParent.remove();
})
//makes check and trash can
divChild.appendChild(trashIcon);

divParent.appendChild(divChild);

toDoItems.appendChild(divParent);
//clear input fields
input.value = "";

}