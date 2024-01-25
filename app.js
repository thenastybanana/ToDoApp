nameVar = document.getElementById("name")
countEl = document.getElementById("count-el")
// let newCount = 0;
// var spans = document.getElementsByTagName("span");

// fhrt

// function deleteItem(button){
//     var listItem = button.parentNode

//     var list = listItem.parentNode

//     list.removeChild(listItem);
//   }






// document.getElementById('submitBtn').onclick = function(){
//     console.log(newCount += 1)
//     document.getElementById('submitData').innerHTML += "<li id=" + newCount + ">" + nameVar.value + "</li>" + '<button type="button"" id="'+ newCount +'" onclick="deleteItem(this)">delete</button>';

//     nameVar.value


// }


var newCount = 0; // Ensure newCount is initialized outside the click event handler



document.getElementById('submitBtn').onclick = function(){
  
for(let i = 0; i < nameVar.value; i++){
    if(i !== 0){
            newCount += 1; // Increment newCount
            countEl.innerHTML = newCount
        
        
            // Create a new li element and button element
            var newLi = document.createElement('li');
            newLi.id = newCount;
            newLi.className = "ToDoItem"
            newLi.innerHTML = nameVar.value;
        
            var deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.id = newCount;
            deleteButton.className = "ToDoButton"
            // deleteButton.id = "TodoButton"
            deleteButton.innerHTML = 'delete';
            deleteButton.onclick = function() {
                deleteItem(this);
            };
        
            // Append the li and button to the ul
            document.getElementById('submitData').appendChild(newLi)
        // document.getElementsById(newLi).appendChild(deleteButton)
        // document.getElementById('submitData')
            
            .appendChild(deleteButton);
        
            // Clear the input value
            nameVar.value = '';
        }
    }

} 


function deleteItem(button) {
    // Get the parent <li> element of the button

    
    var listItem = document.getElementById(button.id);

    // Remove the <li> element directly
    listItem.remove();
}

//disables enter button 
window.addEventListener('keydown',function(e) {
    if (e.keyIdentifier=='U+000A' || e.keyIdentifier=='Enter' || e.keyCode==13) {
        if (e.target.nodeName=='INPUT' && e.target.type=='text') {
            e.preventDefault();

            return false;
        }
    }
}, true);







//to do: get count clicker to add i to each listItem class to coordinate with delete button

//now i have an id with each list item printing a number next to the id. this will help me grab each list item individually when I click delete. to do this, I need to delete just the input from that item alone


