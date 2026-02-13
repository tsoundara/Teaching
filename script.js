const headers = document.querySelectorAll('.stepHeader');  //select all headers 

headers.forEach(header => {
    header.addEventListener('click', () => {
        const parent = header.parentElement;                //grab the parent of the header element (stepDropdwon)
        const isOpen = parent.classList.contains('active');         //check if the parent has the active class (is it open?)

        document.querySelectorAll('.stepDropdown').forEach(dropdown => {    //select all dropdowns and loop through them
            dropdown.classList.remove('active');   //remove the active class from all dropdowns (all dropdowns will be closed)
        });
        
        if(!isOpen){            //if the dropdown was not open, add the active class to the parent (open the clicked dropdown)
            parent.classList.add('active');    //add the active class to the parent (open the clicked dropdown)
        }
    });
});