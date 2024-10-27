const itemList = document.getElementById('colorSelect');
const deleteButton = document.querySelector('input[type="button"]');

    deleteButton.addEventListener('click', function() {
        // Get the selected option
        const selectedOption = itemList.options[itemList.selectedIndex];

        // If there is a selected option, remove it
        if (selectedOption) {
            itemList.removeChild(selectedOption);
        }
});