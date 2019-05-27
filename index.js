// importing the function here
import searchit from './searchitapi';


// getting the refrences here
const form = document.querySelector('#search');
const input = document.querySelector('#inputText');

// adding the event listeners
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    // getting the input value
    let value = input.value;

    // getting the sort value
    const sortValue = document.querySelector('input[name="sortby"]:checked').value;

    // getting the limit value
    const limtiValue = document.querySelector('#limit').value;

    // validating the form
    if(value===''){
        showMessage('Please type something to search','alert-danger');
    }

    // clearing the value here
    input.value = ''

    // search here
});

// message function
const showMessage = (txt,cls) => {
    // creating the div
    const div = document.createElement('div');

    // adding the class
    div.className = `alert ${cls}`;

    // adding txt
    div.textContent = txt

    // getting the parent
    const parent = document.getElementById('search-container');
    const parentChild = document.getElementById('search');

    // appending here
    parent.insertBefore(div,parentChild);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000);
}