let message = document.getElementById('message');

function revealMessage() {
   message.classList.remove('hide');
   setTimeout( () => { message.classList.add('hide')}, 1000)
}


function deleteMovie(event) {
   event.target.parentNode.remove();
   message.textContent = `${event.target.previousSibling.textContent} Deleted!`;
   revealMessage();
}


function crossOffMovie(event) {
   event.target.classList.toggle('checked');
   if (event.target.classList.contains('checked')) { message.textContent = `${event.target.textContent} watched!`; }
   else { message.textContent = `${event.target.textContent} added back!`; }
   revealMessage();
}



function addMovie(event) {
   event.preventDefault();

   let inputField = document.querySelector('input');

   //--- My own code, not given by directions ---//
   if (inputField.value === '') { return; }
   // --- End custom code --- //

   let movie = document.createElement('li');
   let movieTitle = document.createElement('span');

   movieTitle.textContent = inputField.value;
   movieTitle.addEventListener('click', crossOffMovie);
   movie.appendChild(movieTitle);

   let deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'X';
   deleteBtn.addEventListener('click', deleteMovie);
   movie.appendChild(deleteBtn);

   document.querySelector('ul').appendChild(movie);
   inputField.value = '';
}

document.querySelector('form').addEventListener('submit', addMovie);