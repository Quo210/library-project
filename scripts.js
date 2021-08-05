function Book(title,author,pages,read) {
    let creationDate = new Date().toLocaleDateString();
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
    this.date = creationDate;
    this.report = () => {
        const readBoolean = () => {
            return this.read = true? 'has been read already' : 'has not been read';
        }
        return `The book is known as ${title} and was written by ${author}, this version has ${pages} pages. So far this book ${readBoolean()}.`
    }

}

let myLibrary = [];

function addNewBook(title,author,pages,read) {
    let createBook = new Book(title,author,pages,read);

}

function generateList() {
    const totalBooks = myLibrary.length;
    for (let i = 0; i < totalBooks; i++) {
        let newHolder = document.createElement('div');
        let newTitleDiv = document.createElement('div');
        let newStatsDiv = document.createElement('div');
        let pDate = document.createElement('p');
        let pTitle = document.createElement('p');
        let pAuthor = document.createElement('p');
        let pRead = document.createElement('p');
        newTitleDiv.appendChild(pDate);
        newTitleDiv.appendChild(pTitle);
        newStatsDiv.appendChild(pAuthor);
        newStatsDiv.appendChild(pRead);
        newHolder.appendChild(newTitleDiv);
        newHolder.appendChild(newStatsDiv);
        newHolder.classList.add('book-holder');
        newTitleDiv.classList.add('titleDiv');
        newStatsDiv.classList.add('statsDiv');
        pDate.classList.add('date');
        pTitle.classList.add('title');
        pAuthor.classList.add('author');
        pRead.classList.add('read');

        let currentObj = myLibrary[i];
        pDate.textContent = currentObj.date;
        pTitle.textContent = currentObj.title;
        pAuthor.textContent = `By: ${currentObj.author}, ${currentObj.pages}p.`;
        pRead.textContent = currentObj.read;

        ref_ListDiv.appendChild(newHolder);
    }
}

function bringForm() {
    if (ref_formDiv.style.visibility == 'visible') {
        ref_formDiv.style.visibility = 'hidden'
    } else if (ref_formDiv.style.visibility == 'hidden') {
        ref_formDiv.style.visibility = 'visible'
    }
}

function globalListenerSetter() {
    ref_addButton.addEventListener('click',bringForm);
    ref_formCancelBtn.addEventListener('click',bringForm);
}

// Test Zone

const dune = new Book('Dune','Frank Herbert',444,true);
const threeBody = new Book('The Three Body Problem','Cixin Liu',302,true);
const beyondOrder = new Book('Beyond Order','Jordan Peterson',432,true);
const ref_ListDiv = document.querySelector('div#listDiv');
const ref_mainButtonsArr = Array.from( document.querySelectorAll('button.BTN'));
const ref_addButton = ref_mainButtonsArr[0];
const ref_formDiv = document.querySelector('div#form');
const ref_formCancelBtn = document.querySelector('input[value="Cancel"]')

myLibrary.push(dune), myLibrary.push(threeBody), myLibrary.push(beyondOrder);
ref_formDiv.style.visibility = 'hidden'


globalListenerSetter();