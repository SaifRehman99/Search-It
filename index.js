// importing the function here
import searchIT from './searchitapi';


// getting the refrences here
const form = document.querySelector('#search');
const input = document.querySelector('#inputText');

// adding the event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // getting the input value
    let value = input.value;

    // getting the sort value
    const sortValue = document.querySelector('input[name="sortby"]:checked').value;

    // getting the limit value
    const limtiValue = document.querySelector('#limit').value;

    // validating the form
    if (value === '') {
        showMessage('Please type something to search', 'alert-danger');
    }

    // clearing the value here
    input.value = ''

    // search here
    searchIT.search(value, sortValue, limtiValue)
        .then((res) => {
            let output = '<div class="card-columns">';

            res.forEach(post => {
                // Check for image
                let image = post.preview
                    ? post.preview.images[0].source.url
                    : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';

                output += `
            <div class="card mb-2">
            <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${truncateString(post.selftext, 100)}</p>
              <a href="${post.url}" target="_blank
              " class="btn btn-primary">Read More</a>
              <hr>
              <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span> 
              <span class="badge badge-dark">Score: ${post.score}</span>
            </div>
          </div>
            `;
            });
            output += '</div>';
            document.getElementById('output').innerHTML = output;
        })
});

// message function
const showMessage = (txt, cls) => {
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
    parent.insertBefore(div, parentChild);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000);
}

// Truncate String Function
function truncateString(myString, limit) {
    const shortened = myString.indexOf(' ', limit);
    if (shortened == -1) return myString;
    return myString.substring(0, shortened);
}