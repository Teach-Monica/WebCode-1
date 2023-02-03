
async function getBooksData(page, pageSize) {
  try {
    const response = await fetch(
      `https://anapioficeandfire.com/api/books?page=${page}&pageSize=${pageSize}`
    );
    data = await response.json();
    const booksContainer = document.getElementById('booksContainer');
    let bb = document.querySelector('#booksContainer');
    while (bb.firstChild) {
      bb.removeChild(bb.firstChild);
    }
    data.forEach(async (book) => {
      // Extract the required information from each book object
      const name = book.name;
      const ISBN = book.isbn;
      const pages = book.numberOfPages;
      const authors = book.authors;
      const publisher = book.publisher;
      const releaseDate = book.released;
      const characters = book.characters.slice(0, 5);
      console.log(characters);
      for (let i = 0; i < characters.length; i++) {
        const characterResponse = await fetch(characters[i]);
        const chacterJson = await characterResponse.json();
        characters[i] = chacterJson['name'];
      }

      // Create HTML elements dynamically using DOM
      const bookDiv = document.createElement('div');
      const nameP = document.createElement('p');
      const ISBNP = document.createElement('p');
      const pagesP = document.createElement('p');
      const authorsP = document.createElement('p');
      const publisherP = document.createElement('p');
      const releaseDateP = document.createElement('p');
      const charactersP = document.createElement('p');

      // Append the extracted data to the HTML elements
      nameP.innerText = `Book name: ${name}`;
      ISBNP.innerText = `ISBN: ${ISBN}`;
      pagesP.innerText = `Number of pages: ${pages}`;
      authorsP.innerText = `Authors: ${authors.join(', ')}`;
      publisherP.innerText = `Publisher: ${publisher}`;
      releaseDateP.innerText = `Release Date: ${releaseDate}`;
      charactersP.innerText = `Characters: ${characters.join(', ')}`;

      // Append the HTML elements to the bookDiv
      bookDiv.appendChild(nameP);
      bookDiv.appendChild(ISBNP);
      bookDiv.appendChild(pagesP);
      bookDiv.appendChild(authorsP);
      bookDiv.appendChild(publisherP);
      bookDiv.appendChild(releaseDateP);
      bookDiv.appendChild(charactersP);
      bookDiv.style.width = '300px';
      bookDiv.style.height = '300px';
      bookDiv.style.border = '3px solid black';
      bookDiv.style.padding = '25px';
      bookDiv.style.margin = '25px';
      bookDiv.style.borderRadius = '35px';
      bookDiv.style.backgroundColor = '#913175';

      // Append the bookDiv to the booksContainer
      global_parent = document.querySelector('#booksContainer');
      global_parent.append(bookDiv);
    });
  } catch (error) {
    console.error(error);
  }
}
// Call the getBooksData function
getBooksData(1, 2);

function getPage1() {
  getBooksData(1, 2);
}

function getPage2() {
  getBooksData(2, 2);
}

function getPage3() {
  getBooksData(3, 2);
}
function getPage4() {
  getBooksData(4, 2);
}
function getPage5() {
  getBooksData(5, 2);
}

async function filter(e) {
  console.log(document.getElementById('search-field').value);
  try {
    const response = await fetch(`https://anapioficeandfire.com/api/books`);
    data = await response.json();
    let booksContainer = document.getElementById('booksContainer');
    let bb = document.querySelector('#booksContainer');
    while (bb.firstChild) {
      bb.removeChild(bb.firstChild);
    }
    data.forEach(async (book) => {
      if (
        book.name
          .toLowerCase()
          .includes(document.getElementById('search-field').value.toLowerCase())
      ) {
        // Extract the required information from each book object
        const name = book.name;
        const ISBN = book.isbn;
        const pages = book.numberOfPages;
        const authors = book.authors;
        const publisher = book.publisher;
        const releaseDate = book.released;
        const characters = book.characters.slice(0, 5);
        console.log(characters);
        for (let i = 0; i < characters.length; i++) {
          const characterResponse = await fetch(characters[i]);
          const chacterJson = await characterResponse.json();
          characters[i] = chacterJson['name'];
        }

        // Create HTML elements dynamically using DOM
        const bookDiv = document.createElement('div');
        const nameP = document.createElement('p');
        const ISBNP = document.createElement('p');
        const pagesP = document.createElement('p');
        const authorsP = document.createElement('p');
        const publisherP = document.createElement('p');
        const releaseDateP = document.createElement('p');
        const charactersP = document.createElement('p');

        // Append the extracted data to the HTML elements
        nameP.innerText = `Book name: ${name}`;
        ISBNP.innerText = `ISBN: ${ISBN}`;
        pagesP.innerText = `Number of pages: ${pages}`;
        authorsP.innerText = `Authors: ${authors.join(', ')}`;
        publisherP.innerText = `Publisher: ${publisher}`;
        releaseDateP.innerText = `Release Date: ${releaseDate}`;
        charactersP.innerText = `Characters: ${characters.join(', ')}`;
        
        // Append the HTML elements to the bookDiv
        bookDiv.appendChild(nameP);
        bookDiv.appendChild(ISBNP);
        bookDiv.appendChild(pagesP);
        bookDiv.appendChild(authorsP);
        bookDiv.appendChild(publisherP);
        bookDiv.appendChild(releaseDateP);
        bookDiv.appendChild(charactersP);
        bookDiv.style.width = '300px';
        bookDiv.style.height = '300px';
        bookDiv.style.border = '3px solid black';
        bookDiv.style.padding = '25px';
        bookDiv.style.margin = '25px';
        bookDiv.style.borderRadius = '35px';
        bookDiv.style.backgroundColor = '#913175';

        // Append the bookDiv to the booksContainer
        global_parent = document.querySelector('#booksContainer');
        global_parent.append(bookDiv);
      }
    });
  } catch (error) {
    console.error(error);
  }
}
