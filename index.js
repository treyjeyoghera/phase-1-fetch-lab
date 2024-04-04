function fetchBooks() {
  
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Pass the JSON object to the renderBooks() function
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; // Assuming the book title is stored in the 'name' property
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

