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

const zoomBtn = document.getElementById('zoomBtn');
const allImages = document.querySelectorAll('.stepImage');

zoomBtn.addEventListener('click', () => {
    allImages.forEach(img => {
        img.classList.toggle('large');
    });
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("darkMode");
}


const darkModeBtn = document.getElementById('darkModeToggle');

// Check if button exists to avoid errors
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        // This one line handles the whole switch!
        document.body.classList.toggle('darkMode');
        
        // Optional: change the button text so the user knows what happened
        if (document.body.classList.contains('darkMode')) {
            darkModeBtn.textContent = "☀️ Light Mode";
        } else {
            darkModeBtn.textContent = "🌙 Dark Mode";
        }
    });
}