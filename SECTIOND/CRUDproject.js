// Develop a simple JavaScript application named "Bucket List" that can do the following:
// 1. Add an item to the bucket list (Create). 
//2. Display the list of items (Read/List). 
//3. Remove an item from the bucket list (Delete). 
//4• Use simple HTML, CSS for the interface and vanilla JavaScript for functionality. 
//5• Demonstrate adding, listing, and deleting items with buttons.
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const bucketList = document.getElementById('bucketList');

addButton.addEventListener('click', function() {
    const newItemText = itemInput.value.trim();
    if (newItemText) {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        bucketList.appendChild(newItem);
        itemInput.value = ''; // Clear the input field
    }
});

bucketList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        bucketList.removeChild(event.target); // Remove the clicked item
    }
});




